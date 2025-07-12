export const projects = [
  {
    title: "Weatherly",
    slug: "weatherly",
    description: "A real-time weather app with animated weather effects, hourly & 5-day forecast, and air quality tracking.",
    fullDescription: "Weatherly is a dynamic, user-friendly weather application built to provide accurate, real-time weather data. Key features include animated weather icons for visual appeal, hourly forecasts for short-term planning, a 5-day extended forecast, air quality index (AQI) monitoring with health recommendations, location-based search powered by geolocation, and customizable units (Celsius/Fahrenheit). The app integrates the OpenWeatherMap API for reliable data fetching. Challenges addressed include handling API rate limits with caching and optimizing performance for mobile devices. Technologies: React for the UI, Tailwind CSS for responsive styling, and API integration for data. Screenshots: Main dashboard shows current weather with animations; forecast tab displays charts for temperature trends.",
    imgUrl: "/img/weatherly.webp",
    liveUrl: "https://vardhan-weather.netlify.app/",
    githubUrl: "https://github.com/vardhan12178/weather",
    technologies: ["React", "Tailwind CSS", "OpenWeatherMap API"],
    isFeatured: true,
  },
  {
    title: "Fitness Tracker Pro",
    slug: "fitness-tracker-pro",
    description: "A full-featured fitness tracker to log workouts, meals, sleep and view progress insights.",
    fullDescription: "Fitness Tracker Pro is a comprehensive web app designed for health enthusiasts to track daily activities. Features include workout logging (with exercise types, duration, and calories burned), meal tracking with nutritional breakdowns, sleep monitoring with quality analysis, progress dashboards with charts (e.g., weight trends, calorie intake vs. burn), goal setting and reminders, and data export to CSV. It uses local storage for persistence and Context API for state management. Challenges included creating intuitive charts for insights and ensuring data privacy. Technologies: React for interactive components, Context API for global state, and pure CSS for custom visualizations. Screenshots: Dashboard overview with progress rings; log entry form with autocomplete suggestions.",
    imgUrl: "/img/fit-tracker-pro.webp",
    liveUrl: "https://vardhan-fittrack.vercel.app/",
    githubUrl: "https://github.com/vardhan12178/Fitness-Tracker",
    technologies: ["React", "Context API", "CSS"],
  },
  {
    title: "Vkart",
    slug: "vkart",
    description: "A stylish ecommerce website with category-wise product listings, cart, wishlist, and user authentication.",
    fullDescription: "Vkart is a full-stack e-commerce platform simulating an online shopping experience. Key features: Product browsing by categories (e.g., electronics, clothing), search functionality with filters, shopping cart with real-time updates, wishlist for saved items, user authentication (login/signup) with JWT, checkout simulation, and admin dashboard for product management. Backend handles CRUD operations for products and users. Challenges: Secure authentication and optimizing database queries for fast loading. Technologies: React for frontend, Node.js and MongoDB for backend/API, Tailwind CSS for styling. Screenshots: Product grid with filters; Cart page with total calculations.",
    imgUrl: "/img/vkart.webp",
    liveUrl: "https://vkartshop.netlify.app/",
    githubUrl: "https://github.com/vardhan12178/vkart",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    isFeatured: true,
  },
  {
    title: "Movie Spot",
    slug: "movie-spot",
    description: "A sleek movie search and discovery app that fetches now playing, top-rated, and upcoming films from TMDB.",
    fullDescription: "Movie Spot is an entertainment app for movie lovers to discover and search films. Features: Real-time search with autocomplete, categorized lists (now playing, top-rated, upcoming), detailed movie pages with trailers, cast, and reviews, watchlist functionality, and pagination for endless scrolling. It pulls data from the TMDB API with error handling for offline modes. Challenges: Managing large API responses and implementing responsive carousels. Technologies: React for the interface, Tailwind CSS for modern layouts, TMDB API for content. Screenshots: Home page with movie carousels; Search results with poster grids.",
    imgUrl: "/img/Movie-spot.webp",
    liveUrl: "https://vardhan-moviespot.vercel.app/",
    githubUrl: "https://github.com/vardhan12178/moviespot",
    technologies: ["React", "Tailwind CSS", "TMDB API"],
  },
  {
    title: "Image Magic Pro",
    slug: "image-magic-pro",
    description: "A fast image conversion tool that supports JPG, PNG, and WebP with a clean UI.",
    fullDescription: "Image Magic Pro is a lightweight tool for quick image format conversions. Features: Upload and convert images between JPG, PNG, and WebP formats, batch processing for multiple files, preview before/after conversion, download options with quality controls, and drag-and-drop support. Built for speed with client-side processing. Challenges: Handling large files without performance drops and ensuring cross-browser compatibility. Technologies: Next.js for server-side rendering, Tailwind CSS for UI. Screenshots: Upload interface with progress bars; Conversion preview modal.",
    imgUrl: "/img/image-magic-pro.webp",
    liveUrl: "https://image-magic-pro.vercel.app/",
    githubUrl: "https://github.com/vardhan12178/image-magic-pro",
    technologies: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Food App",
    slug: "food-app",
    description: "A modern food delivery UI with menu, cart, and authentication powered by Firebase.",
    fullDescription: "Food App is a responsive food delivery interface mimicking popular apps like Uber Eats. Features: Menu browsing with categories and search, cart management with quantity adjustments, user authentication via Firebase (email/Google login), order history, and simulated payment integration. Real-time updates using Firebase Firestore. Challenges: Integrating auth with real-time database sync and mobile responsiveness. Technologies: Next.js for routing, Firebase for auth and storage, CSS for custom themes. Screenshots: Menu list with item cards; Cart checkout flow.",
    imgUrl: "/img/food-app.webp",
    liveUrl: "https://vardhan-food.vercel.app/",
    githubUrl: "https://github.com/vardhan12178/FoodApp",
    technologies: ["Next.js", "Firebase", "CSS"],
  }
];

export const getTechColor = (tech: string) => {
  const key = tech.toLowerCase();
  if (key.includes("react")) return "bg-purple-700";
  if (key.includes("node")) return "bg-green-700";
  if (key.includes("mongo")) return "bg-emerald-700";
  if (key.includes("css")) return "bg-blue-700";
  if (key.includes("next")) return "bg-gray-700";
  if (key.includes("firebase")) return "bg-yellow-600";
  return "bg-gray-600";
};