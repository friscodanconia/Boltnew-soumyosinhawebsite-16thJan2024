import type { Project, Section } from '../types/project';

export const projects: Project[] = [
  {
    id: "ai-investment-research",
    slug: "ai-investment-research",
    title: "AI Investment Research Platform",
    tagline: "4-agent AI pipeline analyzing 82 companies across the AI value chain",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
    links: {
      demo: "https://investmentadvisor.soumyosinha.com",
      github: "https://github.com/friscodanconia/ai-investment-research",
    },
    technologies: ["Next.js", "TypeScript", "Python", "GitHub Actions", "Vercel"],
    sections: [
      {
        type: 'image',
        src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
        alt: "AI Investment Research Platform"
      },
      {
        type: 'text',
        content: "A 4-agent AI research pipeline that analyzes the entire AI industry value chain \u2014 82 companies, 7 layers, 9 countries, $34.5T market cap \u2014 and presents findings as an interactive website with live daily prices. Check it out at <a href=\"https://investmentadvisor.soumyosinha.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-amber-600 dark:text-amber-400 hover:underline\">investmentadvisor.soumyosinha.com</a>."
      },
      {
        type: 'stats',
        items: [
          { value: "82", label: "companies tracked" },
          { value: "$34.5T", label: "market cap mapped" },
          { value: "7", label: "value chain layers" },
          { value: "4", label: "AI agents" },
        ]
      },
      {
        type: 'heading',
        content: "The Why"
      },
      {
        type: 'text',
        content: "I wanted to understand the AI industry as an investment landscape \u2014 who supplies what to whom, where the bottlenecks are, and which companies are best positioned. Instead of reading analyst reports, I built agents to do the research and a website to explore the findings."
      },
      {
        type: 'heading',
        content: "The 4-Agent Pipeline"
      },
      {
        type: 'list',
        items: ["Agent 1 \u2014 Value Chain Mapper: Maps 82 companies across 7 layers with supply chain dependencies", "Agent 2 \u2014 Financial Metrics Analyzer: 61 financial profiles with peer group comparisons", "Agent 3 \u2014 Portfolio Constructor: $100K model portfolio with 15 stocks + 4 ETFs", "Council of Judges: Multi-model deliberation (GPT-4, Gemini, Claude, Llama) produces consensus portfolio"]
      },
      {
        type: 'heading',
        content: "Key Features"
      },
      {
        type: 'list',
        items: ["Interactive AI value chain infographic with bubble charts", "Side-by-side portfolio comparison: Original vs Council consensus", "Live daily stock prices via Alpha Vantage + GitHub Actions", "Critical chokepoint analysis (ASML 100% EUV, TSMC 90%+ advanced fab)"]
      },
      {
        type: 'heading',
        content: "Tools Used"
      },
      {
        type: 'list',
        items: ["Next.js 15, TypeScript, Tailwind CSS, Recharts", "Python for data pipelines and price fetching", "Alpha Vantage API for live prices", "GitHub Actions for daily automation", "Claude Code for the entire build"]
      },
    ]
  },
  {
    id: "company-news-digest",
    slug: "company-news-digest",
    title: "Company News Digest",
    tagline: "AI-ranked company news digests delivered to Slack",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?auto=format&fit=crop&q=80",
    links: {
    },
    technologies: ["Claude Code Skill", "Python", "NewsAPI", "Slack API"],
    sections: [
      {
        type: 'image',
        src: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?auto=format&fit=crop&q=80",
        alt: "Company News Digest"
      },
      {
        type: 'text',
        content: "A Claude Code skill that fetches, ranks, and summarizes the latest news for any company, then posts a concise digest to Slack. Just say \"news digest for Tesla\" and it handles the rest."
      },
      {
        type: 'heading',
        content: "The Why"
      },
      {
        type: 'text',
        content: "Keeping up with company news is tedious \u2014 you have to check multiple sources, filter noise, and mentally rank what matters. I built this as a Claude Code skill so I can get a curated, ranked digest for any company on demand, delivered straight to Slack."
      },
      {
        type: 'heading',
        content: "How It Works"
      },
      {
        type: 'list',
        items: ["Fetches latest articles from NewsAPI.org for any company", "Claude ranks articles using a rubric: material impact, market-moving potential, source authority, novelty", "Enforces source diversity \u2014 max 2 articles per source", "Posts formatted digest to Slack with Block Kit formatting", "Ends every digest with a \"Bottom Line\" synthesis"]
      },
      {
        type: 'heading',
        content: "Tools Used"
      },
      {
        type: 'list',
        items: ["Claude Code skill system", "Python for fetch and Slack scripts", "NewsAPI.org for article data", "Slack Incoming Webhooks for delivery"]
      },
    ]
  },
];

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
