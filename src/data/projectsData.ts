export const projectsData = {
  projects: {
    title: "Projects",
    items: [
      {
        id: "movie-info-site",
        slug: "movie-info-site",
        title: "Movie Information Site",
        description: "A comprehensive movie information platform built with modern web technologies",
        thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80",
        technologies: ["React", "Claude AI", "Vercel", "Visual Studio Code"],
        links: {
          demo: "https://www.cinemagic.me/",
          github: "https://github.com/example/movie-info"
        },
        features: [
          "Real-time movie data from public APIs",
          "Advanced search and filtering",
          "Personalized recommendations",
          "Responsive design for all devices"
        ],
        content: `
          <div class="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80"
              alt="Movie Information Site"
              class="w-full h-64 object-cover rounded-lg"
            />
            
            <p>
              CineMagic is a modern movie information platform that leverages the power of AI and public APIs to provide users with comprehensive movie data, reviews, and recommendations.
            </p>

            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Key Features</h2>
            
            <div class="space-y-4">
              <ul class="list-disc pl-6 space-y-2">
                <li>Real-time movie data integration</li>
                <li>AI-powered recommendations</li>
                <li>Advanced search capabilities</li>
                <li>Responsive design</li>
              </ul>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Technology Stack</h3>
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80"
                alt="Tech Stack"
                class="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
          </div>
        `
      },
      {
        id: "ai-chatbot",
        slug: "ai-chatbot",
        title: "AI-powered Chatbot",
        description: "An intelligent chatbot using OpenAI's API for natural conversations",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
        technologies: ["OpenAI API", "Node.js", "React"],
        links: {
          github: "https://github.com/example/ai-chatbot"
        },
        features: [
          "Natural language processing",
          "Context-aware responses",
          "Multi-language support",
          "Customizable personality"
        ],
        content: `
          <div class="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
              alt="AI Chatbot"
              class="w-full h-64 object-cover rounded-lg"
            />
            
            <p>
              An advanced AI chatbot that leverages OpenAI's API to provide natural, context-aware conversations with users.
            </p>

            <div class="aspect-w-16 aspect-h-9 mb-8">
              <iframe
                src="https://www.youtube.com/embed/example"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="w-full h-full rounded-lg"
              ></iframe>
            </div>

            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Features</h2>
            
            <div class="space-y-4">
              <ul class="list-disc pl-6 space-y-2">
                <li>Natural language understanding</li>
                <li>Context retention</li>
                <li>Personality customization</li>
                <li>Multi-language support</li>
              </ul>
            </div>
          </div>
        `
      }
    ]
  }
};
