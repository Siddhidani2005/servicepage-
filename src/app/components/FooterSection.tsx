import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function FooterSection() {
  return (
    <section className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Your Digital Success Starts Here
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            In an era where digital presence = business presence, a professional website or web application 
            is no longer optional—it's essential. Whether you're a startup aiming for your first launch or 
            an enterprise looking to upgrade, Hirebie's Website & Web App Development Services are designed 
            to deliver results that are visually stunning, technically sound, and business-driven.
          </p>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              From Concept to Code, From Launch to Long-term Support
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              We build digital platforms that grow with you. Our comprehensive approach ensures your web solution 
              not only meets today's needs but evolves with your business for years to come.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-blue-100">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Your Project Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Free Consultation
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-left">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Expert Team</h4>
              <p className="text-gray-300 text-sm">
                Skilled developers, designers, and strategists working together to deliver exceptional results.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Modern Technology</h4>
              <p className="text-gray-300 text-sm">
                Latest frameworks and tools to ensure your solution is fast, secure, and future-ready.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Ongoing Support</h4>
              <p className="text-gray-300 text-sm">
                Comprehensive maintenance and support to keep your platform running smoothly.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Proven Results</h4>
              <p className="text-gray-300 text-sm">
                Track record of successful projects that drive real business growth and ROI.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <span className="text-xl font-semibold">Hirebie</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Professional web development services that transform businesses and drive digital success. 
                From concept to code, we're your trusted technology partner.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>contact@hirebie.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Website Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Web App Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">E-commerce Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Hirebie. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}