export const projects = [
  {
    "title": "Vkart (E-Commerce Platform)",
    "slug": "vkart",
    "description": "A full-stack MERN e-commerce app with Google OAuth (2FA) and real-time Razorpay payment integration.",
    "fullDescription": "Vkart is a full-featured, production-ready e-commerce platform built from the ground up. The primary goal was to implement secure, complex, and real-world features. \n\nKey Features Include:\n\n* **Secure Authentication:** Implemented robust user authentication with JWT and **Google OAuth (2FA)**, including **cross-device login notifications** to enhance account security.\n\n* **Live Payment Gateway:** Integrated the **Razorpay Payment Gateway** for secure, real-time transaction processing and webhook verification.\n\n* **Admin Dashboard:** Developed a secure, **role-based Admin Dashboard (RBAC)** using protected routes for comprehensive product, user, and order management (CRUD operations).\n\n* **Core E-commerce Logic:** Features include dynamic product filtering, a persistent shopping cart, and wishlist functionality managed with React Context API and Mongoose schemas.\n\nTechnologies: Built on the **MERN stack (MongoDB, Express.js, React, Node.js)** with a focus on API scalability and a clean, responsive UI (Tailwind CSS). Key challenges included ensuring secure payment handoffs and architecting the protected routes for the admin panel.",
    "imgUrl": "/img/vkart.webp",
    "liveUrl": "https://vkart.balavardhan.dev/",
    "githubUrl": "https://github.com/vardhan12178/vkart",
    "technologies": ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Google OAuth", "Razorpay API"],
    "isFeatured": true
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
    title: "Image Magic Pro",
    slug: "image-magic-pro",
    description: "A fast image conversion tool that supports JPG, PNG, and WebP with a clean UI.",
    fullDescription: "Image Magic Pro is a lightweight tool for quick image format conversions. Features: Upload and convert images between JPG, PNG, and WebP formats, batch processing for multiple files, preview before/after conversion, download options with quality controls, and drag-and-drop support. Built for speed with client-side processing. Challenges: Handling large files without performance drops and ensuring cross-browser compatibility. Technologies: Next.js for server-side rendering, Tailwind CSS for UI. Screenshots: Upload interface with progress bars; Conversion preview modal.",
    imgUrl: "/img/image-magic-pro.webp",
    liveUrl: "https://image-magic-pro.vercel.app/",
    githubUrl: "https://github.com/vardhan12178/image-magic-pro",
    technologies: ["Next.js", "Tailwind CSS"],
  },
  
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