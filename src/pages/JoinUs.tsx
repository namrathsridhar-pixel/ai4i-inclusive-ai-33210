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
              Connect with AI4Inclusion Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's collaborate and co-create the future of inclusive Language AI. Explore, connect, and grow with us. 
              Become a member today and join our exciting community working towards digital inclusion for all languages.
            </p>
          </motion.div>

          {/* Hero Image with Embedded Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full rounded-xl overflow-hidden border border-border/30 bg-card/50"
          >
            {/* Hero Image */}
            <div className="px-4 md:px-8 pt-6">
              <img 
                src={joinUsHeroImage}
                alt="AI4Inclusion Community - Multilingual Language Technology"
                className="w-full h-auto object-cover rounded-lg max-h-[300px] md:max-h-[400px]"
                loading="eager"
                decoding="async"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            
            {/* Form Container */}
            <div className="px-4 md:px-8 py-8 bg-background/80 backdrop-blur-sm">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScgLYfErsLxkxrZ_iABcX5KKGTf8eDAOY0405u4uz_ww0TRtQ/viewform?embedded=true"
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="AI4Inclusion Join Us Form"
                className="w-full rounded-lg"
              >
                Loading form...
              </iframe>
              
              <p className="text-sm text-muted-foreground text-center mt-6">
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
