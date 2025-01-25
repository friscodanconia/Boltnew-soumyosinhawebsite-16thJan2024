export const projectsData = {
  projects: {
    title: "Projects",
    items: [
      {
        id: "movie-info-site",
        slug: "movie-info-site",
        title: "Movie Information Site",
        description: "A movie information site built using public APIs and modern AI tools. Check out the experience at <a href='https://www.cinemagic.me' target='_blank' rel='noopener noreferrer'>cinemagic.me</a>",
        thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80",
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
        why: "I like movies, but a bit frustrated by the increasingly complicated user journey of IMDB. I wanted to build a simple user experience where you can enter the name of movie, actor, actress and get relevant results. This tool is free of charge and using the TMDB API to get results and uses some custom ranking logic to display results.",
        content: `
          <div class="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80"
              alt="Movie Information Site"
              class="w-full h-64 object-cover rounded-lg"
            />
            
            <p>
              A comprehensive movie information site built using AI tools and publicly available APIs. A user can enter movie related terms and will be delivered relevant search results. You can check out the experience at <a href="https://www.cinemagic.me" target="_blank" rel="noopener noreferrer">cinemagic.me</a>.
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
              <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Why CineMagic?</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
                CineMagic stands out by offering a unique combination of features that make discovering and exploring movies a delightful experience:
              </p>
              <ul class="list-disc pl-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>Personalized recommendations based on your viewing history</li>
                <li>Comprehensive movie information including cast, crew, and reviews</li>
                <li>Advanced search filters to find exactly what you're looking for</li>
                <li>Clean, intuitive interface designed for movie enthusiasts</li>
                <li>Regular updates with new features and content</li>
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
      },
      {
        id: "task-manager",
        slug: "task-manager",
        title: "Task Manager Application",
        description: "A modern task management application with real-time collaboration features",
        thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80",
        technologies: ["React", "Firebase", "Material-UI"],
        links: {
          demo: "https://taskmanager-demo.com",
          github: "https://github.com/example/task-manager"
        },
        features: [
          "Real-time collaboration",
          "Task prioritization",
          "Team management",
          "Progress tracking"
        ],
        content: `
          <div class="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80"
              alt="Task Manager"
              class="w-full h-64 object-cover rounded-lg"
            />
            
            <p>
              A collaborative task management platform designed for teams to organize, track, and complete projects efficiently.
            </p>

            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Features</h2>
            
            <div class="space-y-4">
              <ul class="list-disc pl-6 space-y-2">
                <li>Real-time updates and collaboration</li>
                <li>Task assignment and tracking</li>
                <li>Team communication tools</li>
                <li>Progress visualization</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "fitness-tracker",
        slug: "fitness-tracker",
        title: "Fitness Tracking App",
        description: "A comprehensive fitness tracking application with workout planning and progress monitoring",
        thumbnail: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80",
        technologies: ["React Native", "Node.js", "MongoDB"],
        links: {
          demo: "https://fitnesstracker-demo.com",
          github: "https://github.com/example/fitness-tracker"
        },
        features: [
          "Workout planning",
          "Progress tracking",
          "Nutrition logging",
          "Social features"
        ],
        content: `
          <div class="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80"
              alt="Fitness Tracker"
              class="w-full h-64 object-cover rounded-lg"
            />
            
            <p>
              A mobile fitness application that helps users track workouts, monitor progress, and achieve their fitness goals.
            </p>

            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Features</h2>
            
            <div class="space-y-4">
              <ul class="list-disc pl-6 space-y-2">
                <li>Customizable workout plans</li>
                <li>Progress tracking and analytics</li>
                <li>Nutrition tracking</li>
                <li>Community features</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "recipe-finder",
        slug: "recipe-finder",
        title: "Recipe Finder App",
        description: "A recipe discovery platform with personalized recommendations and meal planning",
        thumbnail: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80",
        technologies: ["Vue.js", "Express", "PostgreSQL"],
        links: {
          demo: "https://recipefinder-demo.com",
          github: "https://github.com/example/recipe-finder"
        },
        features: [
          "Recipe search",
          "Meal planning",
          "Shopping lists",
          "Nutritional information"
        ],
        content: `
          <div class="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80"
              alt="Recipe Finder"
              class="w-full h-64 object-cover rounded-lg"
            />
            
            <p>
              A comprehensive recipe platform that helps users discover, plan, and prepare meals with ease.
            </p>

            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Features</h2>
            
            <div class="space-y-4">
              <ul class="list-disc pl-6 space-y-2">
                <li>Advanced recipe search</li>
                <li>Meal planning tools</li>
                <li>Automated shopping lists</li>
                <li>Nutritional analysis</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "e-commerce-platform",
        slug: "e-commerce-platform",
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with advanced product management and analytics",
        thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80",
        technologies: ["Next.js", "Stripe", "MongoDB"],
        links: {
          demo: "https://ecommerce-demo.com",
          github: "https://github.com/example/ecommerce"
        },
        features: [
          "Product management",
          "Order processing",
          "Payment integration",
          "Analytics dashboard"
        ],
        content: `
          <div class="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80"
              alt="E-commerce Platform"
              class="w-full h-64 object-cover rounded-lg"
            />
            
            <p>
              A modern e-commerce solution for businesses of all sizes.
            </p>

            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Features</h2>
            
            <div class="space-y-4">
              <ul class="list-disc pl-6 space-y-2">
                <li>Inventory management</li>
                <li>Secure payments</li>
                <li>Order tracking</li>
                <li>Business analytics</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "social-network",
        slug: "social-network",
        title: "Social Network Platform",
        description: "A modern social networking platform with real-time features and multimedia sharing",
        thumbnail: "https://images.unsplash.com/photo-1522098635833-216c03d81fbe?auto=format&fit=crop&q=80",
        technologies: ["React", "Socket.io", "Redis"],
        links: {
          demo: "https://socialnetwork-demo.com",
          github: "https://github.com/example/social-network"
        },
        features: [
          "Real-time messaging",
          "Media sharing",
          "User profiles",
          "Activity feed"
        ],
        content: `
          <div class="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1522098635833-216c03d81fbe?auto=format&fit=crop&q=80"
              alt="Social Network"
              class="w-full h-64 object-cover rounded-lg"
            />
            
            <p>
              A feature-rich social networking platform for connecting people.
            </p>

            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Features</h2>
            
            <div class="space-y-4">
              <ul class="list-disc pl-6 space-y-2">
                <li>Instant messaging</li>
                <li>Photo and video sharing</li>
                <li>News feed</li>
                <li>Group creation</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "weather-app",
        slug: "weather-app",
        title: "Weather Application",
        description: "A weather forecasting application with interactive maps and real-time updates",
        thumbnail: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80",
        technologies: ["React", "OpenWeatherMap API", "Mapbox"],
        links: {
          demo: "https://weather-demo.com",
          github: "https://github.com/example/weather-app"
        },
        features: [
          "Real-time weather data",
          "Interactive maps",
          "Location tracking",
          "Weather alerts"
        ],
        content: `
          <div class="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80"
              alt="Weather App"
              class="w-full h-64 object-cover rounded-lg"
            />
            
            <p>
              A comprehensive weather application with detailed forecasts and alerts.
            </p>

            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Features</h2>
            
            <div class="space-y-4">
              <ul class="list-disc pl-6 space-y-2">
                <li>7-day forecast</li>
                <li>Radar maps</li>
                <li>Severe weather alerts</li>
                <li>Location-based updates</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "music-streaming",
        slug: "music-streaming",
        title: "Music Streaming Service",
        description: "A music streaming platform with personalized playlists and social features",
        thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80",
        technologies: ["React", "Node.js", "PostgreSQL"],
        links: {
          demo: "https://music-demo.com",
          github: "https://github.com/example/music-streaming"
        },
        features: [
          "Music playback",
          "Playlist creation",
          "Artist profiles",
          "Social sharing"
        ],
        content: `
          <div class="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
              alt="Music Streaming"
              class="w-full h-64 object-cover rounded-lg"
            />
            
            <p>
              A modern music streaming service with social features.
            </p>

            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Features</h2>
            
            <div class="space-y-4">
              <ul class="list-disc pl-6 space-y-2">
                <li>Music discovery</li>
                <li>Playlist management</li>
                <li>Artist following</li>
                <li>Social sharing</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "video-conferencing",
        slug: "video-conferencing",
        title: "Video Conferencing App",
        description: "A real-time video conferencing solution with screen sharing and chat",
        thumbnail: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80",
        technologies: ["WebRTC", "Socket.io", "React"],
        links: {
          demo: "https://video-demo.com",
          github: "https://github.com/example/video-conferencing"
        },
        features: [
          "Video calls",
          "Screen sharing",
          "Chat functionality",
          "Meeting recording"
        ],
        content: `
          <div class="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80"
              alt="Video Conferencing"
              class="w-full h-64 object-cover rounded-lg"
            />
            
            <p>
              A reliable video conferencing solution for remote teams.
            </p>

            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Features</h2>
            
            <div class="space-y-4">
              <ul class="list-disc pl-6 space-y-2">
                <li>HD video calls</li>
                <li>Screen sharing</li>
                <li>Meeting recording</li>
                <li>Chat features</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "learning-platform",
        slug: "learning-platform",
        title: "Online Learning Platform",
        description: "An e-learning platform with course management and progress tracking",
        thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
        technologies: ["Next.js", "MongoDB", "AWS"],
        links: {
          demo: "https://learning-demo.com",
          github: "https://github.com/example/learning-platform"
        },
        features: [
          "Course creation",
          "Progress tracking",
          "Assessments",
          "Certificates"
        ],
        content: `
          <div class="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
              alt="Learning Platform"
              class="w-full h-64 object-cover rounded-lg"
            />
            
            <p>
              A comprehensive e-learning solution for educators and students.
            </p>

            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Features</h2>
            
            <div class="space-y-4">
              <ul class="list-disc pl-6 space-y-2">
                <li>Course management</li>
                <li>Student progress tracking</li>
                <li>Interactive assessments</li>
                <li>Certificate generation</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "job-board",
        slug: "job-board",
        title: "Job Board Platform",
        description: "A job listing and application platform with advanced search and matching",
        thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
        technologies: ["React", "Node.js", "Elasticsearch"],
        links: {
          demo: "https://jobboard-demo.com",
          github: "https://github.com/example/job-board"
        },
        features: [
          "Job listings",
          "Application tracking",
          "Resume parsing",
          "Company profiles"
        ],
        content: `
          <div class="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
              alt="Job Board"
              class="w-full h-64 object-cover rounded-lg"
            />
            
            <p>
              A modern job board connecting employers with talent.
            </p>

            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Features</h2>
            
            <div class="space-y-4">
              <ul class="list-disc pl-6 space-y-2">
                <li>Advanced job search</li>
                <li>Application management</li>
                <li>Company profiles</li>
                <li>Analytics dashboard</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "real-estate",
        slug: "real-estate",
        title: "Real Estate Platform",
        description: "A real estate listing platform with virtual tours and property management",
        thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
        technologies: ["React", "Node.js", "MongoDB"],
        links: {
          demo: "https://realestate-demo.com",
          github: "https://github.com/example/real-estate"
        },
        features: [
          "Property listings",
          "Virtual tours",
          "Agent profiles",
          "Appointment scheduling"
        ],
        content: `
          <div class="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
              alt="Real Estate Platform"
              class="w-full h-64 object-cover rounded-lg"
            />
            
            <p>
              A comprehensive real estate platform for property listings and management.
            </p>

            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Features</h2>
            
            <div class="space-y-4">
              <ul class="list-disc pl-6 space-y-2">
                <li>Property search</li>
                <li>Virtual tours</li>
                <li>Agent directory</li>
                <li>Scheduling system</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "event-management",
        slug: "event-management",
        title: "Event Management System",
        description: "An event planning and management platform with ticketing and analytics",
        thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80",
        technologies: ["React", "Node.js", "PostgreSQL"],
        links: {
          demo: "https://events-demo.com",
          github: "https://github.com/example/event-management"
        },
        features: [
          "Event creation",
          "Ticket sales",
          "Attendee management",
          "Analytics dashboard"
        ],
        content: `
          <div class="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80"
              alt="Event Management"
              class="w-full h-64 object-cover rounded-lg"
            />
            
            <p>
              A complete event management solution for organizers and attendees.
            </p>

            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Features</h2>
            
            <div class="space-y-4">
              <ul class="list-disc pl-6 space-y-2">
                <li>Event planning tools</li>
                <li>Ticketing system</li>
                <li>Attendee tracking</li>
                <li>Revenue analytics</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "travel-planner",
        slug: "travel-planner",
        title: "Travel Planning App",
        description: "A travel planning application with itinerary management and booking integration",
        thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80",
        technologies: ["React", "Node.js", "MongoDB"],
        links: {
          demo: "https://travel-demo.com",
          github: "https://github.com/example/travel-planner"
        },
        features: [
          "Trip planning",
          "Booking integration",
          "Travel guides",
          "Budget tracking"
        ],
        content: `
          <div class="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80"
              alt="Travel Planner"
              class="w-full h-64 object-cover rounded-lg"
            />
            
            <p>
              A comprehensive travel planning solution for adventurers.
            </p>

            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Features</h2>
            
            <div class="space-y-4">
              <ul class="list-disc pl-6 space-y-2">
                <li>Itinerary creation</li>
                <li>Booking management</li>
                <li>Travel guides</li>
                <li>Expense tracking</li>
              </ul>
            </div>
          </div>
        `
      }
    ]
  }
};