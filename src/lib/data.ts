export const navItems = [
  { href: "#workflow", label: "Workflow" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#intelligence", label: "Intelligence" },
  { href: "#reviews", label: "Stories" },
];

export const trustLogos = [
  { id: "brightly", label: "Brightly", color: "text-blue-500" },
  { id: "northstar", label: "Northstar", icon: "compass" },
  { id: "everlane", label: "Everlane Co", color: "text-emerald-600" },
  { id: "solace", label: "Solace", color: "text-orange-500" },
  { id: "aster", label: "Aster Labs", icon: "sparkle" },
];

export const heroBento = {
  routing: {
    title: "Intelligence Routing",
    description: "Every request instantly lands with the right expert, no manual sorting required.",
    customer: {
      name: "MIRA PATEL",
      time: "now",
      message: "Can someone help update our billing seat count before renewal?",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    agent: {
      name: "NOAH REED",
      status: "assigned",
      message: "I’ll handle this and loop in finance if needed.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
    }
  },
  analytics: {
    title: "Service Intelligence",
    description: "Real-time metrics on team load, resolution speed, and customer satisfaction.",
    value: "34.6K",
    label: "resolved chats",
    sublabel: "this quarter",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop"
  },
  timelines: {
    title: "Contextual Timelines",
    description: "Access full customer history, preferences, and previous interactions in one click.",
    tags: ["VIP Account", "Renewal Due"],
    customer: {
      name: "Elliot Warner",
      role: "Head of Ops at Northline Labs",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      cover: "https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=800&auto=format&fit=crop"
    }
  }
};

export const capabilities = [
  {
    title: "Frictionless Handoffs",
    description: "Internal notes and ownership tracking ensure no customer is left waiting between shifts.",
    icon: "Zap",
    color: "bg-violet-100 border-violet-200 text-violet-600"
  },
  {
    title: "Unified Intelligence",
    description: "Sync shared email, live chat, and social channels into a single, high-performance queue.",
    icon: "LayoutGrid",
    color: "bg-purple-100 border-purple-200 text-purple-600"
  },
  {
    title: "Proactive Outreach",
    description: "Trigger follow-ups and education based on customer behavior and sentiment signals.",
    icon: "Bell",
    color: "bg-lavender-100 border-lavender-200 text-lavender-600"
  },
  {
    title: "Operational Clarity",
    description: "Measure what matters. Track SLA compliance and team efficiency with precision.",
    icon: "BarChart3",
    color: "bg-indigo-100 border-indigo-200 text-indigo-600"
  }
];

export const workflowSteps = [
  {
    title: "Connect Inboxes",
    text: "Sync shared email, chat widgets, and social channels in minutes with native integrations.",
    icon: "PlugZap",
    color: "bg-[#eef3e8] border-[#c7d1bd]"
  },
  {
    title: "Prioritize & Route",
    text: "AI-driven rules ensure urgent requests from VIP accounts are always handled first.",
    icon: "Settings2",
    color: "bg-[#fbf0e6] border-[#e4cbb9]"
  },
  {
    title: "Measure Success",
    text: "Review resolution trends and customer satisfaction from a single source of truth.",
    icon: "BadgeCheck",
    color: "bg-[#f5eedc] border-[#d8c7a3]"
  }
];

export const stats = [
  { label: "CSAT Score", value: "96%", change: "+2%" },
  { label: "SLA Adherence", value: "91%", change: "+5%" },
  { label: "Monthly Resolves", value: "18K", change: "+12%" },
];

export const channels = [
  { name: "Email Inbox", count: "4,820", trend: "+18%", type: "success" },
  { name: "Live Chat", count: "3,140", trend: "+27%", type: "success" },
  { name: "Social DMs", count: "1,760", trend: "-6%", type: "danger" },
];

export const reviews = [
  {
    quote: "Shiro cut our first-response time by 42% and finally gave us a clear view of customer health.",
    author: "Clara Bennett",
    role: "VP of CX, Mavenly",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "The calmer inbox changed our team culture almost immediately. No more tab hopping.",
    author: "Nora Patel",
    role: "Founder, Aster Labs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "Finally, a support workspace that feels as fast as our agents think.",
    author: "Malik Chen",
    role: "Support Lead, Northstar",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  }
];
