"use client";

import { Card, CardContent } from "./ui/card";
import {
  Clock,
  Eye,
  TrendingUp,
  Globe,
  Users,
  BarChart3,
  DollarSign,
} from "lucide-react";
import React from "react";

// 🎨 Allowed colors
type BenefitColor =
  | "blue"
  | "purple"
  | "green"
  | "orange"
  | "pink"
  | "indigo"
  | "emerald";

// ✅ Benefit type
interface Benefit {
  title: string;
  description: string;
  icon: React.ElementType;
  color: BenefitColor;
}

// 🎨 Color map with strict typing
const colorMap: Record<BenefitColor, string> = {
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  green: "bg-green-100 text-green-600",
  orange: "bg-orange-100 text-orange-600",
  pink: "bg-pink-100 text-pink-600",
  indigo: "bg-indigo-100 text-indigo-600",
  emerald: "bg-emerald-100 text-emerald-600",
};

export function BusinessBenefits() {
  const benefits: Benefit[] = [
    {
      icon: Clock,
      title: "24/7 Online Presence",
      description:
        "Your customers can learn about your business, explore your services, and even make purchases anytime, anywhere.",
      color: "blue",
    },
    {
      icon: Eye,
      title: "Increased Visibility",
      description:
        "Appear in search engines and attract new customers actively looking for what you offer.",
      color: "purple",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description:
        "Reach new markets, expand your audience, and grow faster with an online presence.",
      color: "green",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Break geographical barriers and connect with potential clients worldwide.",
      color: "orange",
    },
    {
      icon: Users,
      title: "Customer Engagement",
      description:
        "Offer better support, collect feedback, and engage directly with your audience.",
      color: "pink",
    },
    {
      icon: BarChart3,
      title: "Data & Insights",
      description:
        "Track customer behavior, analyze performance, and make informed business decisions.",
      color: "indigo",
    },
    {
      icon: DollarSign,
      title: "Boost Sales",
      description:
        "Offer online ordering, booking, or product sales to increase revenue streams.",
      color: "emerald",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Why Your Business Needs a Website
        </h2>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${colorMap[benefit.color]}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
