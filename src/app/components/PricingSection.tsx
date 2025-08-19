import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Globe, ShoppingCart, Laptop, Building } from "lucide-react";

export function PricingSection() {
  const pricingPlans = [
    {
      icon: Globe,
      name: "Basic Business Website",
      description: "Perfect for small businesses and startups",
      timeline: "1–2 Weeks",
      priceUSD: "$500",
      priceINR: "₹40,000",
      features: [
        "5-8 Professional Pages",
        "Responsive Design",
        "Contact Forms",
        "Basic SEO Setup",
        "Social Media Integration",
        "Mobile Optimization",
        "1 Month Free Support"
      ],
      popular: false,
      color: "blue"
    },
    {
      icon: ShoppingCart,
      name: "E-Commerce Website",
      description: "Complete online store solution",
      timeline: "3–5 Weeks",
      priceUSD: "$1,000",
      priceINR: "₹80,000",
      features: [
        "Product Catalog Management",
        "Shopping Cart & Checkout",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Tracking System",
        "Customer Accounts",
        "3 Months Free Support"
      ],
      popular: true,
      color: "green"
    },
    {
      icon: Laptop,
      name: "Custom Web Application",
      description: "Tailored solutions for specific needs",
      timeline: "4–8 Weeks",
      priceUSD: "$2,000",
      priceINR: "₹1,60,000",
      features: [
        "Custom Functionality",
        "User Authentication",
        "Database Integration",
        "API Development",
        "Admin Dashboard",
        "Third-party Integrations",
        "6 Months Free Support"
      ],
      popular: false,
      color: "purple"
    },
    {
      icon: Building,
      name: "Enterprise-Grade Web App",
      description: "Large-scale, high-performance solutions",
      timeline: "8+ Weeks",
      priceUSD: "$5,000+",
      priceINR: "₹4,00,000+",
      features: [
        "Advanced Architecture",
        "Multi-language Support",
        "High Scalability",
        "Security Hardening",
        "Performance Optimization",
        "24/7 Monitoring",
        "12 Months Premium Support"
      ],
      popular: false,
      color: "orange"
    }
  ];

  const colorMap = {
    blue: "border-blue-200 bg-blue-50",
    green: "border-green-200 bg-green-50",
    purple: "border-purple-200 bg-purple-50",
    orange: "border-orange-200 bg-orange-50"
  };

  const iconColorMap = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600"
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pricing for Website & Web App Development varies depending on project complexity, features, and timelines. 
            At Hirebie, we offer transparent pricing tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative border-2 ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : 'border-gray-200'} transition-all duration-300 hover:shadow-lg`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4 ${iconColorMap[plan.color]}`}>
                  <plan.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{plan.name}</CardTitle>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{plan.priceUSD}</div>
                  <div className="text-lg text-gray-600">{plan.priceINR}</div>
                  <div className="text-sm text-gray-500 mt-2">Timeline: {plan.timeline}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'}`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Quote?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are starting estimates. The final cost depends on features (e.g., payment gateways, APIs, dashboards, 
              multi-language support), integrations, and level of customization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Free Consultation</h4>
              <p className="text-gray-600 text-sm">Discuss your project requirements with our experts</p>
            </div>
            
            <div className="p-6">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Detailed Proposal</h4>
              <p className="text-gray-600 text-sm">Receive a comprehensive project timeline and cost breakdown</p>
            </div>
            
            <div className="p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Start Development</h4>
              <p className="text-gray-600 text-sm">Begin your project with our expert development team</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}