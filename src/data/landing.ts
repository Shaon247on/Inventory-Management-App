import { Feature, PricingPlan, Testimonial } from "@/types/landing";
import { 
  Package,
  Globe,
  Smartphone,
} from 'lucide-react';

export const features: Feature[] = [
  {
    icon: Package,
    title: "Real-Time Stock Updates",
    description: "Keep track of your stock levels as they change in real-time.",
  },
  {
    icon: Globe,
    title: "Multi-Location Support",
    description: "Manage inventory across multiple warehouses or stores.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Access your dashboard from any device, anywhere.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "CEO",
    company: "RetailCo",
    content: "InventoryPro revolutionized how we manage our stock.",
    rating: 5,
    avatar: "JD",
  },
  {
    name: "Sarah Smith",
    role: "COO",
    company: "ShopMax",
    content: "This tool saved us hours every week on inventory tracking.",
    rating: 4,
    avatar: "SS",
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    company: "WarehousePro",
    content: "Intuitive and powerful. Highly recommended.",
    rating: 5,
    avatar: "MC",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    period: "month",
    description: "Perfect for startups and small businesses.",
    features: ["Basic Reports", "1 Warehouse", "Email Support"],
  },
  {
    name: "Growth",
    price: "$49",
    period: "month",
    description: "Advanced tools for growing operations.",
    features: ["All Starter features", "Multiple Warehouses", "Priority Support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "month",
    description: "Everything you need at scale.",
    features: ["All Growth features", "API Access", "Dedicated Support"],
  },
];


