import { motion } from "framer-motion";
import joinUsHeroImage from "@/assets/join-us-hero.png";

const JoinUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 bg-gradient-to-b from-[#0a1628] to-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Join the AI4Inclusion Community
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's collaborate and co-create the future of inclusive Language AI. Explore, connect, and grow with us. 
              Become a member today and join our exciting community working towards digital inclusion for all languages.
            </p>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full rounded-xl mb-16 overflow-hidden"
          >
            <img 
              src={joinUsHeroImage}
              alt="AI4Inclusion Community - Multilingual Language Technology"
              className="w-full h-auto object-cover rounded-xl"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Join Form Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Join us!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join AI4Inclusion in revolutionizing language technology through digital innovation. Together, we can build 
              inclusive AI infrastructure, bridge language gaps, and empower communities with tools for growth and participation.
            </p>
            <p className="text-base text-muted-foreground mt-6">
              We're looking forward to building AI4Inclusion with you and connecting you with all the wonderful stakeholders 
              in our community. Stay connected with us through the form below.
            </p>
          </motion.div>

          {/* Embedded Google Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full bg-card rounded-xl shadow-large overflow-hidden border border-border/50"
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScgLYfErsLxkxrZ_iABcX5KKGTf8eDAOY0405u4uz_ww0TRtQ/viewform?embedded=true"
              width="100%"
              height="1200"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="AI4Inclusion Join Us Form"
              className="w-full"
            >
              Loading form...
            </iframe>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              If the form doesn't load, you can{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScgLYfErsLxkxrZ_iABcX5KKGTf8eDAOY0405u4uz_ww0TRtQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                open it in a new tab
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
