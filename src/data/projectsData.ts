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
      github: "https://github.com/friscodanconia/ai-investment-research"
    },
    technologies: ["Next.js", "TypeScript", "Python", "GitHub Actions", "Vercel"],
    sections: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80',
        alt: 'AI Investment Research Platform'
      },
      {
        type: 'text',
        content: 'A 4-agent AI research pipeline that analyzes the entire AI industry value chain — 82 companies, 7 layers, 9 countries, $34.5T market cap — and presents findings as an interactive website with live daily prices. Check it out at <a href="https://investmentadvisor.soumyosinha.com" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 hover:underline">investmentadvisor.soumyosinha.com</a>.'
      },
      {
        type: 'stats',
        items: [
          { value: '82', label: 'companies tracked' },
          { value: '$34.5T', label: 'market cap mapped' },
          { value: '7', label: 'value chain layers' },
          { value: '4', label: 'AI agents' }
        ]
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'I wanted to understand the AI industry as an investment landscape — who supplies what to whom, where the bottlenecks are, and which companies are best positioned. Instead of reading analyst reports, I built agents to do the research and a website to explore the findings.'
      },
      { type: 'heading', content: 'The 4-Agent Pipeline' },
      {
        type: 'list',
        items: [
          'Agent 1 — Value Chain Mapper: Maps 82 companies across 7 layers with supply chain dependencies',
          'Agent 2 — Financial Metrics Analyzer: 61 financial profiles with peer group comparisons',
          'Agent 3 — Portfolio Constructor: $100K model portfolio with 15 stocks + 4 ETFs',
          'Council of Judges: Multi-model deliberation (GPT-4, Gemini, Claude, Llama) produces consensus portfolio'
        ]
      },
      { type: 'heading', content: 'Key Features' },
      {
        type: 'list',
        items: [
          'Interactive AI value chain infographic with bubble charts',
          'Side-by-side portfolio comparison: Original vs Council consensus',
          'Live daily stock prices via Alpha Vantage + GitHub Actions',
          'Critical chokepoint analysis (ASML 100% EUV, TSMC 90%+ advanced fab)'
        ]
      },
      { type: 'heading', content: 'Tools Used' },
      {
        type: 'list',
        items: [
          'Next.js 15, TypeScript, Tailwind CSS, Recharts',
          'Python for data pipelines and price fetching',
          'Alpha Vantage API for live prices',
          'GitHub Actions for daily automation',
          'Claude Code for the entire build'
        ]
      }
    ]
  },
  {
    id: "company-news-digest",
    slug: "company-news-digest",
    title: "Company News Digest",
    tagline: "AI-ranked company news digests delivered to Slack",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?auto=format&fit=crop&q=80",
    links: {},
    technologies: ["Claude Code Skill", "Python", "NewsAPI", "Slack API"],
    sections: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?auto=format&fit=crop&q=80',
        alt: 'Company News Digest'
      },
      {
        type: 'text',
        content: 'A Claude Code skill that fetches, ranks, and summarizes the latest news for any company, then posts a concise digest to Slack. Just say "news digest for Tesla" and it handles the rest.'
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'Keeping up with company news is tedious — you have to check multiple sources, filter noise, and mentally rank what matters. I built this as a Claude Code skill so I can get a curated, ranked digest for any company on demand, delivered straight to Slack.'
      },
      { type: 'heading', content: 'How It Works' },
      {
        type: 'list',
        items: [
          'Fetches latest articles from NewsAPI.org for any company',
          'Claude ranks articles using a rubric: material impact, market-moving potential, source authority, novelty',
          'Enforces source diversity — max 2 articles per source',
          'Posts formatted digest to Slack with Block Kit formatting',
          'Ends every digest with a "Bottom Line" synthesis'
        ]
      },
      { type: 'heading', content: 'Tools Used' },
      {
        type: 'list',
        items: [
          'Claude Code skill system',
          'Python for fetch and Slack scripts',
          'NewsAPI.org for article data',
          'Slack Incoming Webhooks for delivery'
        ]
      }
    ]
  },
  {
    id: "cinemagic",
    slug: "cinemagic",
    title: "CineMagic",
    tagline: "Movie and TV discovery with curated collections and regional cinema",
        thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80",
        links: {
      demo: "https://cinemagic.soumyosinha.com/",
      github: "https://github.com/friscodanconia/movie-search-app"
    },
    technologies: ["Next.js", "TypeScript", "TMDB API"],
    sections: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80',
        alt: 'CineMagic'
      },
      {
        type: 'text',
        content: 'A movie and TV show discovery platform with curated collections, cinema challenges, and regional cinema sections. Check it out at <a href="https://cinemagic.soumyosinha.com" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 hover:underline">cinemagic.soumyosinha.com</a>.'
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'I like movies, but frustrated by the cluttered user experience of existing movie sites. I wanted to build something clean and focused on discovery - with curated collections, regional cinema sections, and fun challenges to help people find their next favorite film.'
      },
      { type: 'heading', content: 'Key Features' },
      {
        type: 'list',
        items: [
          'Search movies, TV shows, and people',
          'Curated collections for discovery',
          'Cinema challenges to test your knowledge',
          'Cinema DNA - discover your viewing personality',
          'Regional cinema sections (Hindi, Tamil, Telugu)',
          'Trending and critically acclaimed sections'
        ]
      },
      { type: 'heading', content: 'Tools Used' },
      {
        type: 'list',
        items: [
          'Next.js, TypeScript',
          'TMDB API for movie data',
          'AI tools for curation'
        ]
      }
    ]
  },
  {
    id: "nestor-ai",
    slug: "nestor-ai",
    title: "Nestor",
    tagline: "Your guide to AI tools and resources",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
        links: {
      demo: "https://www.nestor.guide/",
      github: "https://github.com/friscodanconia/nestor-ai"
    },
    technologies: ["TypeScript", "Bolt.new", "Windsurf", "Vercel"],
    sections: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
        alt: 'Nestor AI Guide'
      },
      {
        type: 'text',
        content: 'A curated guide to AI tools and resources. Browse topics or search to quickly find what you need. Check it out at <a href="https://www.nestor.guide/" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 hover:underline">nestor.guide</a>.'
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'The AI landscape changes daily with new tools and models. With so much information available, it\'s hard to know where to focus. Nestor curates essential tools, resources, and insights to help navigate the space effectively.'
      },
      { type: 'heading', content: 'Categories' },
      {
        type: 'list',
        items: [
          'Top Tools - Best no-code tools',
          'Agents - Agents in action',
          'Apps - Must try apps',
          'AI in Marketing - How marketers can use AI',
          'Video & Audio - Explore multimedia tools',
          'Productivity - Personal organization and efficiency',
          'Content Creation - Writing and copywriting',
          'Image & Design - AI image generation',
          'GitHub Repos - Curated list of repos',
          'And more: Education, Finance, Health, Travel, Gaming'
        ]
      },
      { type: 'heading', content: 'Tools Used' },
      {
        type: 'list',
        items: [
          'Bolt.new',
          'Claude Sonnet',
          'Vercel for deployment',
          'Windsurf for debugging'
        ]
      }
    ]
  },
  {
    id: "bbmp-tracker",
    slug: "bbmp-tracker",
    title: "BBMP Work Tracker",
    tagline: "Civic tech for transparency in Bangalore public works",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
        links: {
      demo: "https://bbmp-tracker.vercel.app",
      github: "https://github.com/friscodanconia/bbmp-tracker"
    },
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Google APIs"],
    sections: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80',
        alt: 'BBMP Work Tracker'
      },
      {
        type: 'text',
        content: 'A civic tech project that brings transparency to BBMP work orders and public spending in Bangalore. Search by location to see where your tax money is being spent. Check it out at <a href="https://bbmp-tracker.vercel.app" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 hover:underline">bbmp-tracker.vercel.app</a>.'
      },
      {
        type: 'stats',
        items: [
          { value: '14,339', label: 'work orders' },
          { value: '₹10,462 Cr', label: 'public spending' },
          { value: '243', label: 'wards mapped' },
          { value: '469', label: 'landmarks' }
        ]
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'As a Bangalore resident, I wanted to understand where public money is being spent. BBMP publishes work order data, but it\'s not easily searchable. This tool makes it accessible by letting citizens search by their address or landmark.'
      },
      { type: 'heading', content: 'Key Features' },
      {
        type: 'list',
        items: [
          'Smart search by address, PIN code, or landmark',
          'Google Street View for visual verification',
          'Ward-wise spending breakdowns',
          'Automated monitoring for new data (GitHub Actions)'
        ]
      },
      { type: 'heading', content: 'Tools Used' },
      {
        type: 'list',
        items: [
          'Next.js 15, TypeScript',
          'PostgreSQL with PostGIS',
          'Google Places and Street View APIs',
          'Python for ETL scripts'
        ]
      }
    ]
  },
  {
    id: "tally-prime-assistant",
    slug: "tally-prime-assistant",
    title: "TallyPrime AI Assistant",
    tagline: "AI-powered help for TallyPrime accounting software",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
        links: {
      demo: "https://tallyprimeassistant.soumyosinha.com/",
      github: "https://github.com/friscodanconia/tallyprimeassistant"
    },
    technologies: ["RAG", "TypeScript", "AI"],
    sections: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80',
        alt: 'TallyPrime AI Assistant'
      },
      {
        type: 'text',
        content: 'An AI-powered assistant for TallyPrime accounting software with FAQ search, quick actions, and chat-based help. Try it at <a href="https://tallyprimeassistant.soumyosinha.com/" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 hover:underline">tallyprimeassistant.soumyosinha.com</a>.'
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'TallyPrime is widely used accounting software in India, but navigating its features can be challenging. This AI assistant provides instant help through FAQ search, quick action buttons, and a chat interface.'
      },
      { type: 'heading', content: 'Key Features' },
      {
        type: 'list',
        items: [
          'FAQ search for common TallyPrime questions',
          'Quick actions: Create Voucher, Day Book Report, Balance Sheet',
          'Quick actions: Ledger Account, Trial Balance, Stock Summary',
          'Chat interface for natural language queries',
          'AI-powered business intelligence'
        ]
      },
      { type: 'heading', content: 'Tools Used' },
      {
        type: 'list',
        items: [
          'RAG architecture',
          'TypeScript',
          'AI for conversational interface'
        ]
      }
    ]
  },
  {
    id: "books-2025",
    slug: "books-2025",
    title: "2025 Reading Log",
    tagline: "Week-by-week reading tracker for 2025",
    thumbnail: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80",
        links: {
      demo: "https://books2025.soumyosinha.com/",
      github: "https://github.com/friscodanconia/books2025"
    },
    technologies: ["TypeScript", "AI Design", "Vercel"],
    sections: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80',
        alt: '2025 Reading Log'
      },
      {
        type: 'text',
        content: 'A week-by-week reading log capturing stories, ideas, and worlds throughout 2025. Check it out at <a href="https://books2025.soumyosinha.com/" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 hover:underline">books2025.soumyosinha.com</a>.'
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'I wanted to document my reading journey in 2025 in a visual, organized way. Most reading trackers are cluttered - I wanted something that feels like a warm little library.'
      },
      { type: 'heading', content: 'Key Features' },
      {
        type: 'list',
        items: [
          'Week-by-week reading tracker',
          'Personal library view',
          'Favorites collection',
          'Clean, warm interface'
        ]
      }
    ]
  },
  {
    id: "visual-cookbook",
    slug: "visual-cookbook",
    title: "Chicken Atlas",
    tagline: "Ad-free visual cookbook with rich infographics",
    thumbnail: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80",
        links: {
      demo: "https://chickenatlas.nestor.guide/"
    },
    technologies: ["lovable.dev", "Windsurf", "Vercel", "OpenAI"],
    sections: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80',
        alt: 'Chicken Atlas'
      },
      {
        type: 'text',
        content: 'A visual cookbook about chicken recipes that is ad-free and gives you rich infographics and cooking instructions. Check it out at <a href="https://chickenatlas.nestor.guide/" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 hover:underline">chickenatlas.nestor.guide</a>.'
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'I like cooking, but looking for recipes is painful. Most sites are full of ads, pop-ups, and irrelevant information. I wanted to build something easy, ad-free, and straight to the point. This MVP was coded over a weekend.'
      },
      { type: 'heading', content: 'Key Features' },
      {
        type: 'list',
        items: [
          'Ad-free recipe experience',
          'Rich infographics',
          'Detailed cooking instructions',
          'Visual step-by-step guides'
        ]
      },
      { type: 'heading', content: 'Tools Used' },
      {
        type: 'list',
        items: [
          'lovable.dev',
          'Windsurf',
          'Vercel',
          'OpenAI'
        ]
      }
    ]
  },
  {
    id: "product-imagery-fashion",
    slug: "product-imagery-fashion",
    title: "AI Product Imagery",
    tagline: "Using AI to simplify fashion product photography",
    thumbnail: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80",
        links: {
      demo: "/product-imagery-gallery"
    },
    technologies: ["Google 2.0 Flash", "Hugging Face"],
    sections: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80',
        alt: 'AI Product Imagery'
      },
      {
        type: 'text',
        content: 'I consulted with a client on the importance of product imagery and its impact on customer experience and conversion. They pointed out the cost behind this process, especially with seasonal variations requiring constant investment. I investigated AI solutions that can help.'
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'Multi-modal models are getting better every week. You can add reference images, brand identity, and character infusion to create quality bounds. I used experimental models to input one model image and create five different variations across color and style.'
      },
      { type: 'cta', text: 'View the gallery', url: '/product-imagery-gallery' },
      { type: 'heading', content: 'Key Features' },
      {
        type: 'list',
        items: [
          'Image generation from seed images',
          'Style and color variations',
          'Prompt engineering for fine-tuning'
        ]
      },
      { type: 'heading', content: 'Tools Used' },
      {
        type: 'list',
        items: [
          'Google 2.0 Flash Experimental',
          'Hugging Face hosted models'
        ]
      }
    ]
  },
  {
    id: "marketing-toolkit",
    slug: "marketing-toolkit",
    title: "AI Marketing Toolkit",
    tagline: "Building marketing assets entirely with AI tools",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        links: {
      demo: "https://fi.pinterest.com/nestorguide/ai-ads/"
    },
    technologies: ["OpenAI", "ElevenLabs", "Pika Labs", "Runway"],
    sections: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
        alt: 'AI Marketing Toolkit'
      },
      {
        type: 'text',
        content: 'How to build a toolkit of product imagery, models, OOH, social media, print, and video assets using AI tools. Check out the <a href="https://fi.pinterest.com/nestorguide/ai-ads/" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 hover:underline">results on Pinterest</a>.'
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'AI is changing the marketing input:output process. Earlier, teams would build briefs, agencies create prototypes, revisions take weeks or months. If AI can improve this cycle through rapid iteration, we unlock massive efficiencies. I tested all these tools to see how the assets turn out.'
      },
      { type: 'heading', content: 'Asset Types Created' },
      {
        type: 'list',
        items: [
          'Product imagery',
          'Models showcasing products',
          'Video content',
          'OOH, Social Media, Print Assets'
        ]
      },
      { type: 'heading', content: 'Tools Used' },
      {
        type: 'list',
        items: [
          'OpenAI, Google 2.0 Flash',
          'ElevenLabs, Murf.ai',
          'Pika Labs, Freepik, Runway, Higgsfield'
        ]
      }
    ]
  }
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
