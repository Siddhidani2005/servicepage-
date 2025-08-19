import { Button } from "./ui/button";
import { Code, Smartphone, Monitor } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              Website & Web App Development
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Build Your Digital Presence with
              <span className="text-blue-600"> Professional Web Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From responsive websites to custom web applications, we create digital experiences 
              that engage users and drive business growth. Our expert team delivers scalable, 
              secure, and high-performing solutions tailored to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                View Our Work
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                500+ Projects Delivered
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                10+ Years Experience
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1 bg-gray-100 h-6 rounded ml-4"></div>
              </div>
              
              <div className="space-y-4">
                <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <Monitor className="w-6 h-6 text-blue-600 mb-2" />
                    <div className="h-2 bg-blue-200 rounded w-full"></div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <Smartphone className="w-6 h-6 text-purple-600 mb-2" />
                    <div className="h-2 bg-purple-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl shadow-lg">
              <Code className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}