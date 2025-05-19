import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/social-links";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Get In Touch</h2>
          <div className="mt-4 w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out using the form below or through my social media channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send a Message</h3>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                  <a 
                    href="mailto:osahon1224@gmail.com" 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    osahon1224@gmail.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h4>
                  <a 
                    href="tel:+2348105775110" 
                    className="text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-colors"
                  >
                    +234 810 577 5110
                  </a>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Location</h4>
                <div className="flex items-start space-x-3 mb-6">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <p className="text-gray-600 dark:text-gray-400">
                    Egbe, Lagos<br />
                    Nigeria
                  </p>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-48 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center">
              <SocialLinks iconSize="lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
