import { motion } from "framer-motion";
import { Mail, MessageSquare, Github, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const Contact = () => {
  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about AI4Inclusion? We'd love to hear from you. Reach out to our team through any of these channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                For general inquiries, partnerships, or technical support
              </p>
              <a href="mailto:contact@ai4inclusion.org" className="text-primary hover:underline font-medium">
                contact@ai4inclusion.org
              </a>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="text-secondary-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">Community Forum</h3>
              <p className="text-muted-foreground mb-4">
                Join discussions with other adopters and contributors
              </p>
              <a href="https://community.ai4inclusion.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                Visit Forum →
              </a>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Github className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">GitHub</h3>
              <p className="text-muted-foreground mb-4">
                Report issues, contribute code, or browse our repositories
              </p>
              <a href="https://github.com/ai4inclusion" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                View Repositories →
              </a>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Linkedin className="text-secondary-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">LinkedIn</h3>
              <p className="text-muted-foreground mb-4">
                Follow us for updates and news about AI4Inclusion
              </p>
              <a href="https://linkedin.com/company/ai4inclusion" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                Follow Us →
              </a>
            </motion.div>
          </div>

          {/* Additional Info */}
          
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;