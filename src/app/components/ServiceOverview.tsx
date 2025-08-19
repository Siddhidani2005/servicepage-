import { Card, CardContent } from "./ui/card";
import { Target, Palette, Code2, Server, TestTube, Rocket } from "lucide-react";

export function ServiceOverview() {
  const stages = [
    {
      icon: Target,
      title: "Planning & Strategy",
      description: "Understanding your business objectives, target audience, and goals."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating an intuitive and visually appealing interface that engages users."
    },
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building the client-facing side using modern technologies like React, Vue, or Angular."
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Implementing server-side logic with Node.js, Python, PHP, and database integration."
    },
    {
      icon: TestTube,
      title: "Testing & Optimization",
      description: "Ensuring the website/app works seamlessly on all devices and browsers."
    },
    {
      icon: Rocket,
      title: "Deployment & Maintenance",
      description: "Launching the project and keeping it up-to-date for security and performance."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            What Is Website & Web App Development?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            In today's digital-first world, a business without a strong online presence is like a store without an entrance. 
            Website & Web App Development Services refer to the complete process of designing, developing, and deploying 
            websites and web-based applications that are tailored to meet the specific needs of businesses, organizations, and individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stages.map((stage, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <stage.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{stage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{stage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Complete Web Solutions
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Whether it's a responsive corporate website, a progressive web application, or a custom enterprise solution, 
                professional web development ensures that your digital presence is not only visually impressive but also 
                technically robust and future-ready.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Responsive Design</h4>
                <p className="text-blue-100 text-sm">Works perfectly on all devices</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Custom Solutions</h4>
                <p className="text-blue-100 text-sm">Tailored to your business needs</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Modern Tech Stack</h4>
                <p className="text-blue-100 text-sm">Latest technologies and frameworks</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Future-Ready</h4>
                <p className="text-blue-100 text-sm">Scalable and maintainable code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}