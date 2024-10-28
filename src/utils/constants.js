const logos = [
  new URL("../assets/LogoBanner/logo1.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo2.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo6.png", import.meta.url).href,
  new URL("../assets/LogoBanner/logo1.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo8.png", import.meta.url).href,
  new URL("../assets/LogoBanner/logo3.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo4.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo5.png", import.meta.url).href,
  new URL("../assets/LogoBanner/logo2.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo6.png", import.meta.url).href,
  new URL("../assets/LogoBanner/logo4.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo3.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo7.png", import.meta.url).href,
  new URL("../assets/LogoBanner/logo9.png", import.meta.url).href,
  new URL("../assets/LogoBanner/logo10.png", import.meta.url).href,
];

const features = [
  {
    gridArea: "tl",
    image: new URL("../assets/features/thumbs-up.svg", import.meta.url).href,
    heading: "Warranty Service Administration ",
    description: `Streamlined processes to manage warranty claims and offer
extended coverage options.
`,
  },
  {
    gridArea: "tr",
    image: new URL("../assets/features/globe.svg", import.meta.url).href,
    heading: "Installation & Commissioning",
    description: `Expert technicians to handle seamless delivery, setup, and
integration of your products.
.`,
  },
  {
    gridArea: "bl",
    image: new URL("../assets/features/flag.svg", import.meta.url).href,
    heading: "Conference Room Solutions",
    description: `Cutting-edge video walls, interactive displays, and podiums to
elevate your business spaces.`,
  },
  {
    gridArea: "blm",
    image: new URL("../assets/features/graphic-circle.svg", import.meta.url)
      .href,
    heading: "Real-Time Collaboration",
    description: `Collaborate seamlessly with your team members or classmates 
                  in real-time on shared notes and projects.`,
  },
  {
    gridArea: "brm",
    image: new URL("../assets/features/hash.svg", import.meta.url).href,
    heading: "AI-Powered Organization",
    description: `Our AI-powered organization feature categorizes and prioritizes your notes, 
       making it easy to find what you need when you need it.`,
  },
  {
    gridArea: "br",
    image: new URL("../assets/features/branch.svg", import.meta.url).href,
    heading: "Post-Warranty Services",
    description: `Continued support and value-added services even after the initial
warranty period.`,
  },
];

const pricingData = [
  {
    darkMode: false,
    plan: "Individual Plan",
    planIcon: new URL("../assets/pricing/individual-plan.svg", import.meta.url)
      .href,
    planPrice: 9.99,
    bullets: [
      "Real-time collaboration",
      "AI-powered organization",
      "Customizable templates",
      "5GB cloud storage",
      "Basic integrations",
    ],
    CallToAction: "Start Free Trial",
  },
  {
    darkMode: true,
    plan: "Team Plan",
    planIcon: new URL("../assets/pricing/team-plan.svg", import.meta.url).href,
    planPrice: 19.99,
    bullets: [
      "Everything in the Individual Plan",
      "Unlimited cloud storage",
      "Advanced integrations",
      "Team management and permissions",
      "Shared templates and note libraries",
    ],
    CallToAction: "Start Free Trial",
  },
  {
    darkMode: false,
    plan: "Enterprise Plan",
    planIcon: new URL("../assets/pricing/enterprise-plan.svg", import.meta.url)
      .href,
    bullets: [
      "Everything in the Team Plan",
      "Dedicated account manager",
      "Enterprise-grade security",
      "Customized onboarding",
      "Advanced analytics",
    ],
    CallToAction: "Contact support",
  },
];

const faqItems = [
  {
    id: 1,
    question: "What is IGNISCORE SOLUTION?",
    answerHeading: "How do I get started with IGNISCORE SOLUTION?",
    answer: `Getting started with IGNISCORE SOLUTION is easy! Simply visit
             our website, sign up for a free trial, and start exploring 
             the features. Our intuitive interface and comprehensive onboarding 
             materials will guide you through the process.`,
  },
  {
    id: 2,
    question: "What are the key features of IGNISCORE SOLUTION?",
    answerHeading: "How do I get started with IGNISCORE SOLUTION?",
    answer: `Getting started with IGNISCORE SOLUTION is easy! Simply visit
             our website, sign up for a free trial, and start exploring 
             the features. Our intuitive interface and comprehensive onboarding 
             materials will guide you through the process.`,
  },
  {
    id: 3,
    question: "How much does IGNISCORE SOLUTION cost?",
    answerHeading: "How do I get started with IGNISCORE SOLUTION?",
    answer: `Getting started with IGNISCORE SOLUTION is easy! Simply visit
             our website, sign up for a free trial, and start exploring 
             the features. Our intuitive interface and comprehensive onboarding 
             materials will guide you through the process.`,
  },
  {
    id: 4,
    question: "Who is IGNISCORE SOLUTION for?",
    answerHeading: "How do I get started with IGNISCORE SOLUTION?",
    answer: `Getting started with IGNISCORE SOLUTION is easy! Simply visit
             our website, sign up for a free trial, and start exploring 
             the features. Our intuitive interface and comprehensive onboarding 
             materials will guide you through the process.`,
  },
  {
    id: 5,
    question: "What is IGNISCORE SOLUTION?",
    answerHeading: "How do I get started with IGNISCORE SOLUTION?",
    answer: `Getting started with IGNISCORE SOLUTION is easy! Simply visit
             our website, sign up for a free trial, and start exploring 
             the features. Our intuitive interface and comprehensive onboarding 
             materials will guide you through the process.`,
  },
];

export { logos, features, pricingData, faqItems };
