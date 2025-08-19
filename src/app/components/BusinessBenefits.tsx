import { Card, CardContent } from "./ui/card";
import { Clock, Eye, TrendingUp, Globe, Users, BarChart3, DollarSign } from "lucide-react";

export function BusinessBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Online Presence",
      description: "Your customers can learn about your business, explore your services, and even make purchases—anytime, anywhere—without being restricted by store hours or location.",
      color: "blue"
    },
    {
      icon: Eye,
      title: "First Impressions Matter",
      description: "A sleek, fast-loading, and well-designed website builds trust instantly. Studies show that users form an opinion about a site within 0.05 seconds.",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Increased Credibility & Brand Value",
      description: "An outdated or poorly designed site sends the wrong message. A professionally developed platform positions your brand as modern, reliable, and trustworthy.",
      color: "green"
    },
    {
      icon: Globe,
      title: "Wider Reach & Market Expansion",
      description: "Unlike physical stores, a website can reach global audiences without the need for a physical presence—opening up entirely new revenue streams.",
      color: "orange"
    },
    {
      icon: Users,
      title: "Better Customer Engagement",
      description: "Web apps allow for personalized user experiences, chat support, feedback systems, and interactive tools that increase customer satisfaction.",
      color: "pink"
    },
    {
      icon: BarChart3,
      title: "Scalability & Flexibility",
      description: "Custom web development ensures your site/app can evolve as your business grows—adding new features, integrating third-party tools, or handling more users.",
      color: "indigo"
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency in the Long Run",
      description: "While there is an upfront investment, a well-built website or app reduces long-term costs by automating processes, minimizing errors, and increasing sales conversions.",
      color: "emerald"
    }
  ];

  const colorMap = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
    pink: "bg-pink-100 text-pink-600",
    indigo: "bg-indigo-100 text-indigo-600",
    emerald: "bg-emerald-100 text-emerald-600"
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Business Benefits of Professional Web Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A high-quality website or web app can be a game-changer for any business. Here's why investing 
            in professional web development delivers exceptional returns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${colorMap[benefit.color]}`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Don't let your competitors get ahead. A professional web presence is no longer optional—it's essential 
              for business success in today's digital marketplace.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}