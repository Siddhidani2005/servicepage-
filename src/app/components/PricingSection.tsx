"use client";

import { CheckCircle2 } from "lucide-react";

type PlanColor = "blue" | "purple" | "green" | "orange" | "pink" | "indigo" | "emerald";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  color: PlanColor;
}

// Strongly typed color map
const colorMap: Record<PlanColor, string> = {
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  green: "bg-green-100 text-green-600",
  orange: "bg-orange-100 text-orange-600",
  pink: "bg-pink-100 text-pink-600",
  indigo: "bg-indigo-100 text-indigo-600",
  emerald: "bg-emerald-100 text-emerald-600",
};

export function PricingSection() {
  const plans: Plan[] = [
    {
      name: "Starter",
      price: "$19/mo",
      description: "Perfect for small businesses starting online.",
      features: ["Basic Website", "Email Support", "SEO Optimization"],
      color: "blue",
    },
    {
      name: "Growth",
      price: "$49/mo",
      description: "For growing businesses that need more features.",
      features: ["Custom Website", "Priority Support", "Advanced SEO"],
      color: "purple",
    },
    {
      name: "Enterprise",
      price: "$99/mo",
      description: "Best for large companies needing advanced solutions.",
      features: [
        "Full Custom Website",
        "Dedicated Manager",
        "Premium SEO & Marketing",
      ],
      color: "green",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Pricing Plans
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Choose a plan that fits your needs and scale your business with ease.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {plan.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{plan.description}</p>
            <p className="text-4xl font-bold text-gray-800 dark:text-white mt-4">
              {plan.price}
            </p>
            <ul className="mt-6 space-y-3 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className={`h-5 w-5 ${colorMap[plan.color]}`} />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 w-full py-3 px-6 rounded-xl font-semibold text-white transition ${plan.color === "blue"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : plan.color === "purple"
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-green-600 hover:bg-green-700"
                }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
