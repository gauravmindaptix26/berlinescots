export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  cover: string;
  tags: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "discreet-escort-service-berlin",
    title: "Discreet Escort Service in Berlin: What Clients Expect",
    excerpt:
      "A short guide to privacy-first coordination, verified profiles, and a refined booking journey in Berlin.",
    date: "2025-01-18",
    readingTime: "5 min read",
    cover: "/images/Frau im schwarzen Kleid.jpg",
    tags: ["Discretion", "Berlin", "Service"],
    content: [
      "Discretion is the core of premium companionship. Clients expect privacy, polite communication, and clear boundaries throughout the process.",
      "A curated agency focuses on verified profiles, consistent etiquette, and respectful coordination from first inquiry to follow-up.",
      "In Berlin, many clients value a calm, refined experience that blends effortlessly with upscale dinners, events, and city nights.",
      "If you are booking, share your preferences clearly and allow the concierge team to recommend the best match.",
    ],
  },
  {
    slug: "high-class-escort-experience",
    title: "High Class Escort Experience: The Premium Difference",
    excerpt:
      "What makes high-class companionship distinct, and how premium coordination supports a seamless evening.",
    date: "2025-01-28",
    readingTime: "4 min read",
    cover: "/images/Frau in Body.jpg",
    tags: ["High Class", "VIP", "Premium"],
    content: [
      "High-class experiences are defined by presentation, etiquette, and reliable coordination.",
      "Clients expect refined communication, elegant arrivals, and a discreet, professional environment.",
      "Premium concierge support ensures smooth scheduling and tailored recommendations based on the occasion.",
    ],
  },
  {
    slug: "booking-guidelines-berlin",
    title: "Booking Guidelines for Berlin: A Clear, Respectful Process",
    excerpt:
      "A quick overview of how to book respectfully, what details help the concierge team, and why clarity matters.",
    date: "2025-02-04",
    readingTime: "6 min read",
    cover: "/images/Dame am Pool.jpg",
    tags: ["Booking", "Concierge", "Etiquette"],
    content: [
      "Clear communication leads to better matches. Share your date, time, location preference, and the style of experience you want.",
      "Avoid last-minute uncertainty by being upfront about expectations and scheduling needs.",
      "Respect and discretion are mutual. A professional approach supports a refined experience for everyone involved.",
    ],
  },
];
