import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John M.",
    company: "Basketball Ethusiast",
    image: user1,
    text: "Goatbl has completely transformed my fantasy sports experience. The blockchain technology ensures everything is fair and transparent, and I love the gamified rewards system!",
  },
  {
    user: "Sarah Yetunde",
    company: "Tech-Savvy Sports Fan",
    image: user2,
    text: "The VR integration is mind-blowing! It feels like I'm right there in the stadium, cheering for my team. Goatbl is a game-changer.",
  },
  {
    user: "Mike T",
    company: "Fantasy League Veteran",
    image: user3,
    text: "I've been playing fantasy sports for years, and Goatbl is by far the best platform I've used. The player tokens add a whole new level of strategy and excitement.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Blockchain Security:",
    description:
      "Experience unparalleled transparency and security with our Solana-based platform. Say goodbye to unfair play and tampering.",
  },
  {
    icon: <Fingerprint />,
    text: "Fantasy Leagues:",
    description:
      "Create or join fantasy basketball leagues, draft your favorite players, and compete with friends and fans globally.",
  },
  {
    icon: <ShieldHalf />,
    text: "Player Tokens:",
    description:
      "Own unique player tokens that you can trade, sell, or hold. Build the ultimate team and show off your collection.",
  },
  {
    icon: <BatteryCharging />,
    text: "Staking and Rewards:",
    description:
      "Stake your tokens and earn rewards based on your team’s performance. Win exclusive perks and experiences.",
  },
  {
    icon: <PlugZap />,
    text: "Immersive VR Experience:",
    description:
      "Dive into the game with our VR integration. Experience live events and interact with other fans in a virtual arena.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Sign Up:",
    description:
      "Find a league that fits your style or create your own and invite friends.",
  },
  {
    title: "Join a League:",
    description:
      "Find a league that fits your style or create your own and invite friends.",
  },
  {
    title: "Draft Your Team:",
    description:
      "Select your players from the available tokens and build your dream team.",
  },
  {
    title: "Compete and Win:",
    description:
      "Manage your team, participate in matches, and earn points and rewards based on real-life performances.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
