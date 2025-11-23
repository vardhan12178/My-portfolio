export const projects = [
  {
    id: "vkart",
    title: "VKart Enterprise Engine", // Renamed for impact
    tagline: "A production-grade MERN e-commerce architecture with RBAC and Payments.",
    // The "Cover" image should be your most impressive one (usually the Admin Dashboard or Main Store)
    coverImage: "/img/vkart3.webp", 
    
    // We categorize the images so we can display them with context
    gallery: [
      {
        url: "/img/vkart3.webp",
        title: "Admin Analytics",
        description: "Real-time dashboard visualization for sales data and order status tracking."
      },
      {
        url: "/img/vkart1.webp",
        title: "Secure Auth & 2FA",
        description: "Multi-layer security using JWT and Google OAuth with cross-device session management."
      },
      {
        url: "/img/vkart5.webp",
        title: "Order Management",
        description: "Complex order state machine handling Razorpay webhook updates (Pending → Paid → Shipped)."
      },
      {
        url: "/img/vkart4.webp",
        title: "CMS / Inventory",
        description: "Dynamic product management interface with Cloudinary image upload integration."
      },
      {
        url: "/img/vkart2.webp",
        title: "Consumer Storefront",
        description: "Responsive React UI with optimistic UI updates for cart and wishlist actions."
      }
    ],

    // Technical "Chips" to show high-value skills
    technologies: [
      "React",
      "Node.js", 
      "MongoDB (Aggregations)", 
      "Express", 
      "Redux Toolkit", 
      "Razorpay", 
      "Google OAuth", 
      "Cloudinary"
    ],
    
    // Links
    liveUrl: "https://vkart.balavardhan.dev/",
    githubUrl: "https://github.com/vardhan12178/vkart",
    
    // Key Engineering Challenges (for the "Details" view or Modal)
    features: [
      "Architected a Role-Based Access Control (RBAC) system to secure Admin API routes.",
      "Implemented optimistic UI updates to ensure the cart feels instant even on slow networks.",
      "Solved payment synchronization issues using Webhooks to listen for server-side Razorpay success events."
    ]
  },

  {
    id: "image-magic",
    title: "Next.js Media Optimizer", // Rebranded
    tagline: "High-performance server-side image processing utility.",
    coverImage: "/img/image-magic-pro.webp",
    gallery: [], // Single image project, so gallery is empty or just the cover
    technologies: ["Next.js 14", "Server Actions", "Sharp.js", "Tailwind CSS"],
    liveUrl: "https://image-magic-pro.vercel.app/",
    githubUrl: "https://github.com/vardhan12178/image-magic-pro",
    features: [
      "Leveraged Next.js Server Components to reduce client-side bundle size.",
      "Implemented drag-and-drop file parsing with real-time client-side preview."
    ]
  }
];