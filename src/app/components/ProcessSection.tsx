import { Card, CardContent } from "./ui/card";
import { Search, Palette, Wrench, Zap, CheckCircle, Rocket, Headphones, TrendingUp } from "lucide-react";

export function ProcessSection() {
  const processes = [
    {
      icon: Search,
      title: "Discovery & Consultation",
      description: "We start with in-depth discussions to understand your business model, target audience, and unique needs. This phase ensures the end product aligns perfectly with your goals.",
      step: "01"
    },
    {
      icon: Palette,
      title: "Tailored Design & Prototyping",
      description: "Our UI/UX designers craft layouts, color schemes, and interactive prototypes that ensure your platform is both visually appealing and user-friendly.",
      step: "02"
    },
    {
      icon: Wrench,
      title: "Technology Stack Selection",
      description: "Based on your requirements—speed, scalability, security—we choose the right tech stack (e.g., React + Node.js, Next.js, Django, Laravel) to power your solution.",
      step: "03"
    },
    {
      icon: Zap,
      title: "Agile Development Process",
      description: "We follow agile methodologies, delivering features in small, testable increments. This allows for flexibility, faster delivery, and continuous improvement.",
      step: "04"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance & Testing",
      description: "Our QA experts conduct manual and automated testing to ensure everything works perfectly—across devices, browsers, and operating systems.",
      step: "05"
    },
    {
      icon: Rocket,
      title: "Deployment & Launch",
      description: "We handle the technical setup, domain configuration, server deployment, and security hardening—ensuring a smooth, zero-downtime launch.",
      step: "06"
    },
    {
      icon: Headphones,
      title: "Post-Launch Support & Maintenance",
      description: "Hirebie doesn't just deliver and disappear. We provide ongoing monitoring, updates, performance optimization, and feature enhancements.",
      step: "07"
    },
    {
      icon: TrendingUp,
      title: "SEO & Performance Optimization",
      description: "We ensure your site or app ranks well on search engines and loads lightning-fast, improving user experience and search visibility.",
      step: "08"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            How Hirebie Delivers Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Hirebie, we take a strategy-first approach to web and web app development. Our process is transparent, 
            collaborative, and results-driven. Here's how we bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {processes.map((process, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <process.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {process.step}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Our proven process ensures your project is delivered on time, within budget, and exceeds your expectations. 
                Let's discuss how we can help transform your digital presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}