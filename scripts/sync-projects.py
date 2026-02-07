#!/usr/bin/env python3
"""
Sync projects from markdown files in ~/Desktop/Claude Projects/ to the website.

Usage:
    python3 scripts/sync-projects.py              # Preview changes
    python3 scripts/sync-projects.py --apply       # Update projectsData.ts
    python3 scripts/sync-projects.py --apply --push # Update, commit, and push

Markdown format:
    ---
    id: my-project
    title: My Project
    tagline: Short description
    thumbnail: https://images.unsplash.com/...
    demo: https://myproject.soumyosinha.com
    github: https://github.com/friscodanconia/myproject
    technologies:
      - Tech 1
      - Tech 2
    date: 2026-02-07
    publish: true                   # only publish: true files go live
    stats:                          # optional
      - value: "42"
        label: things built
    ---

    First paragraph becomes the intro text.

    ## The Why
    Paragraph explaining motivation.

    ## Section Heading
    - Bullet point 1
    - Bullet point 2
"""

import os
import re
import sys
import json
import subprocess
from pathlib import Path
from datetime import datetime

PROJECTS_DIR = Path.home() / "Desktop" / "Claude projects"
WEBSITE_REPO = Path.home() / "soumyopersonalwebsite"
DATA_FILE = WEBSITE_REPO / "src" / "data" / "projectsData.ts"

# --- YAML frontmatter parser (no external deps) ---

def parse_frontmatter(text: str) -> tuple[dict, str]:
    """Parse YAML frontmatter and return (metadata, body)."""
    if not text.startswith("---"):
        return {}, text

    end = text.find("\n---", 3)
    if end == -1:
        return {}, text

    yaml_str = text[4:end]
    body = text[end + 4:].strip()
    meta = parse_simple_yaml(yaml_str)
    return meta, body


def parse_simple_yaml(text: str) -> dict:
    """Parse simple YAML (flat keys, string values, lists, list-of-dicts)."""
    result = {}
    current_key = None
    current_list = None
    current_dict_item = None

    for line in text.split("\n"):
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            continue

        # Continuation of a dict item (indented key: value under a list item)
        indent = len(line) - len(line.lstrip())
        if indent >= 4 and current_dict_item is not None and ": " in stripped:
            key, val = stripped.split(":", 1)
            current_dict_item[key.strip()] = val.strip().strip('"').strip("'")
            continue

        # List item (starts with "  - ")
        if line.startswith("  - "):
            item_content = stripped[2:].strip()  # after "- "

            # Check if this is a dict-style list item (key: value)
            if ": " in item_content:
                # Flush previous dict item
                if current_dict_item is not None and current_list is not None:
                    current_list.append(current_dict_item)
                current_dict_item = {}
                key, val = item_content.split(":", 1)
                current_dict_item[key.strip()] = val.strip().strip('"').strip("'")
            else:
                # Simple string list item — flush any pending dict
                if current_dict_item is not None and current_list is not None:
                    current_list.append(current_dict_item)
                    current_dict_item = None
                if current_list is None:
                    current_list = []
                current_list.append(item_content.strip('"').strip("'"))
            continue

        # Flush any pending dict item
        if current_dict_item is not None and current_list is not None:
            current_list.append(current_dict_item)
            current_dict_item = None

        # Flush list
        if current_list is not None and current_key:
            result[current_key] = current_list
            current_list = None
            current_key = None

        # Key: value pair
        if ":" in stripped:
            key, val = stripped.split(":", 1)
            val = val.strip()
            if val:
                result[key.strip()] = val.strip('"').strip("'")
                current_key = None
            else:
                current_key = key.strip()
                current_list = []

    # Flush remaining
    if current_dict_item is not None and current_list is not None:
        current_list.append(current_dict_item)
    if current_list is not None and current_key:
        result[current_key] = current_list

    return result


# --- Markdown body parser ---

def parse_body(body: str, meta: dict) -> list[dict]:
    """Convert markdown body into website section objects."""
    sections = []
    lines = body.split("\n")
    i = 0

    # Stats section (from frontmatter) — inserted after first text block
    stats = meta.get("stats")
    if stats and isinstance(stats, list) and isinstance(stats[0], dict):
        pass

    while i < len(lines):
        line = lines[i]

        # Heading
        if line.startswith("## "):
            sections.append({"type": "heading", "content": line[3:].strip()})
            i += 1
            continue

        # Bullet list
        if line.startswith("- "):
            items = []
            while i < len(lines) and lines[i].startswith("- "):
                items.append(lines[i][2:].strip())
                i += 1
            sections.append({"type": "list", "items": items})
            continue

        # Paragraph
        stripped = line.strip()
        if stripped:
            # Collect multi-line paragraph
            para_lines = []
            while i < len(lines) and lines[i].strip() and not lines[i].startswith("## ") and not lines[i].startswith("- "):
                para_lines.append(lines[i].strip())
                i += 1
            para = " ".join(para_lines)
            # Convert markdown links to HTML
            para = convert_links(para, meta)
            sections.append({"type": "text", "content": para})

            # Insert stats after the first text block (intro)
            if stats and isinstance(stats, list) and isinstance(stats[0], dict) and len(sections) == 1:
                sections.insert(2, {
                    "type": "stats",
                    "items": [{"value": s["value"], "label": s["label"]} for s in stats]
                })
            continue

        i += 1

    return sections


def convert_links(text: str, meta: dict) -> str:
    """Convert markdown links [text](url) to styled HTML links."""
    def replace_link(m):
        link_text = m.group(1)
        url = m.group(2)
        return f'<a href="{url}" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 hover:underline">{link_text}</a>'

    return re.sub(r'\[([^\]]+)\]\(([^)]+)\)', replace_link, text)


# --- TypeScript generator ---

def project_to_ts(p: dict, indent: int = 2) -> str:
    """Convert a project dict to TypeScript object literal."""
    sp = " " * indent
    sp2 = " " * (indent + 2)
    sp3 = " " * (indent + 4)
    sp4 = " " * (indent + 6)

    lines = [f"{sp}{{"]
    lines.append(f'{sp2}id: {json.dumps(p["id"])},')
    lines.append(f'{sp2}slug: {json.dumps(p["id"])},')
    lines.append(f'{sp2}title: {json.dumps(p["title"])},')
    lines.append(f'{sp2}tagline: {json.dumps(p["tagline"])},')
    lines.append(f'{sp2}thumbnail: {json.dumps(p["thumbnail"])},')

    # Links
    links = {}
    if p.get("demo"):
        links["demo"] = p["demo"]
    if p.get("github"):
        links["github"] = p["github"]
    lines.append(f"{sp2}links: {{")
    for k, v in links.items():
        lines.append(f'{sp3}{k}: {json.dumps(v)},')
    lines.append(f"{sp2}}},")

    # Technologies
    techs = json.dumps(p.get("technologies", []))
    lines.append(f"{sp2}technologies: {techs},")

    # Sections
    lines.append(f"{sp2}sections: [")
    for section in p.get("sections", []):
        lines.append(f"{sp3}{{")
        if section["type"] == "image":
            continue  # Skip image sections
        elif section["type"] == "text":
            lines.append(f"{sp4}type: 'text',")
            lines.append(f"{sp4}content: {json.dumps(section['content'])}")
        elif section["type"] == "heading":
            lines.append(f"{sp4}type: 'heading',")
            lines.append(f"{sp4}content: {json.dumps(section['content'])}")
        elif section["type"] == "list":
            lines.append(f"{sp4}type: 'list',")
            items_str = json.dumps(section["items"], indent=None)
            lines.append(f"{sp4}items: {items_str}")
        elif section["type"] == "stats":
            lines.append(f"{sp4}type: 'stats',")
            lines.append(f"{sp4}items: [")
            for stat in section["items"]:
                lines.append(f"{sp4}  {{ value: {json.dumps(stat['value'])}, label: {json.dumps(stat['label'])} }},")
            lines.append(f"{sp4}]")
        lines.append(f"{sp3}}},")
    lines.append(f"{sp2}]")

    lines.append(f"{sp}}},")
    return "\n".join(lines)


def generate_ts(markdown_projects: list[dict], existing_ids: set, existing_block: str) -> str:
    """Generate the full projectsData.ts content."""
    parts = ["import type { Project, Section } from '../types/project';\n"]
    parts.append("export const projects: Project[] = [")

    # New projects from markdown (sorted by date, newest first)
    for p in markdown_projects:
        parts.append(project_to_ts(p))

    # Existing projects that aren't in markdown
    if existing_block:
        parts.append(existing_block)

    parts.append("];")

    # Legacy export
    parts.append("""
// Legacy export for backward compatibility with existing components
export const projectsData = {
  projects: {
    title: "Projects",
    items: projects.map(p => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      description: p.tagline,
      thumbnail: p.thumbnail,
      links: p.links,
      technologies: p.technologies,
      features: p.sections
        .filter((s): s is Extract<Section, { type: 'list' }> => s.type === 'list')
        .flatMap(s => s.items)
        .slice(0, 4),
      why: p.sections
        .find((s, i, arr) =>
          s.type === 'text' &&
          arr[i - 1]?.type === 'heading' &&
          (arr[i - 1] as { content: string }).content === 'The Why'
        )?.type === 'text'
        ? (p.sections.find((s, i, arr) =>
            s.type === 'text' &&
            arr[i - 1]?.type === 'heading' &&
            (arr[i - 1] as { content: string }).content === 'The Why'
          ) as { content: string })?.content
        : undefined
    }))
  }
};
""")

    return "\n".join(parts)


# --- Extract existing projects not covered by markdown ---

def extract_existing_projects(ts_content: str, markdown_ids: set) -> tuple[set, str]:
    """Extract existing project IDs and the TS block for non-markdown projects.

    Uses a simple approach: split the projects array into individual project
    blocks by tracking brace depth from the top-level array.
    """
    existing_ids = set()

    # Find the projects array content
    start_marker = "export const projects: Project[] = ["
    start_idx = ts_content.find(start_marker)
    if start_idx == -1:
        return set(), ""

    array_start = start_idx + len(start_marker)

    # Find matching ]; by tracking brace depth
    depth = 1  # we're inside the [ already
    pos = array_start
    while pos < len(ts_content) and depth > 0:
        ch = ts_content[pos]
        if ch == '[':
            depth += 1
        elif ch == ']':
            depth -= 1
        pos += 1

    array_content = ts_content[array_start:pos - 1]

    # Split into individual project blocks by tracking { } depth
    blocks = []
    block_start = None
    depth = 0
    for i, ch in enumerate(array_content):
        if ch == '{':
            if depth == 0:
                block_start = i
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0 and block_start is not None:
                block = array_content[block_start:i + 1]
                # Find the project id
                id_match = re.search(r'id:\s*["\']([^"\']+)["\']', block)
                if id_match:
                    pid = id_match.group(1)
                    existing_ids.add(pid)
                    if pid not in markdown_ids:
                        # Include trailing comma if present
                        trailing = array_content[i + 1:i + 2]
                        block_text = block + ("," if trailing == "," else ",")
                        blocks.append(block_text)
                block_start = None

    return existing_ids, "\n".join(f"  {block}" for block in blocks)


# --- Main ---

def load_markdown_projects() -> list[dict]:
    """Load all markdown project files."""
    projects = []
    if not PROJECTS_DIR.exists():
        print(f"Projects directory not found: {PROJECTS_DIR}")
        return projects

    for md_file in sorted(PROJECTS_DIR.glob("*.md")):
        # Skip template files
        if md_file.name.startswith("_"):
            continue

        content = md_file.read_text()
        meta, body = parse_frontmatter(content)

        if not meta.get("id"):
            # Try to derive id from filename
            meta["id"] = md_file.stem

        if not meta.get("title"):
            print(f"  Skipping {md_file.name}: no title in frontmatter")
            continue

        # Only include projects with publish: true
        publish = str(meta.get("publish", "false")).lower()
        if publish != "true":
            print(f"  Draft (publish: false): {meta['title']} ({md_file.name})")
            continue

        # Build project dict
        project = {
            "id": meta["id"],
            "title": meta["title"],
            "tagline": meta.get("tagline", ""),
            "thumbnail": meta.get("thumbnail", "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80"),
            "demo": meta.get("demo", ""),
            "github": meta.get("github", ""),
            "technologies": meta.get("technologies", []),
            "date": meta.get("date", "2020-01-01"),
            "sections": parse_body(body, meta),
        }
        projects.append(project)
        print(f"  Loaded: {meta['title']} ({md_file.name})")

    # Sort by date, newest first
    projects.sort(key=lambda p: p.get("date", ""), reverse=True)
    return projects


def main():
    apply = "--apply" in sys.argv
    push = "--push" in sys.argv

    print("=== Project Sync ===\n")
    print(f"Source: {PROJECTS_DIR}")
    print(f"Target: {DATA_FILE}\n")

    # Load markdown projects
    print("Loading markdown files...")
    md_projects = load_markdown_projects()
    md_ids = {p["id"] for p in md_projects}
    print(f"\nFound {len(md_projects)} markdown project(s)")

    # Load existing TS
    print(f"\nReading existing {DATA_FILE.name}...")
    ts_content = DATA_FILE.read_text()
    existing_ids, existing_block = extract_existing_projects(ts_content, md_ids)
    kept_ids = existing_ids - md_ids
    print(f"  Existing projects: {len(existing_ids)}")
    print(f"  Will keep (not in markdown): {len(kept_ids)}")
    if kept_ids:
        for kid in sorted(kept_ids):
            print(f"    - {kid}")

    # Generate new TS
    new_ts = generate_ts(md_projects, kept_ids, existing_block)

    if not apply:
        print("\n--- Preview (first 80 lines) ---")
        for i, line in enumerate(new_ts.split("\n")[:80]):
            print(f"  {line}")
        print(f"\n  ... ({len(new_ts.split(chr(10)))} total lines)")
        print("\nRun with --apply to write changes.")
        print("Run with --apply --push to write, commit, and push.")
        return

    # Write
    DATA_FILE.write_text(new_ts)
    print(f"\nWrote {DATA_FILE}")

    if push:
        print("\nCommitting and pushing...")
        os.chdir(WEBSITE_REPO)
        subprocess.run(["git", "add", "src/data/projectsData.ts"], check=True)

        # Check if there are changes to commit
        result = subprocess.run(["git", "diff", "--cached", "--quiet"])
        if result.returncode == 0:
            print("No changes to commit.")
            return

        date_str = datetime.now().strftime("%Y-%m-%d")
        msg = f"Sync projects from markdown ({date_str})\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
        subprocess.run(["git", "commit", "-m", msg], check=True)
        subprocess.run(["git", "push", "origin", "main"], check=True)
        print("Pushed to GitHub. Vercel will auto-deploy.")
    else:
        print("\nFile updated. Run with --push to also commit and push.")


if __name__ == "__main__":
    main()
