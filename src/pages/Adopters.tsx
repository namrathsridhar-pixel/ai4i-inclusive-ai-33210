import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ecosystemImage from "@/assets/ecosystem.png";

const Adopters = () => {
  const adopters = [
    { name: "NIC", description: "National Informatics Centre" },
    { name: "IIT Madras", description: "Indian Institute of Technology Madras" },
    { name: "Bhashini", description: "National Language Translation Mission" },
    { name: "MyGov", description: "Citizen Engagement Platform" },
    { name: "EkStep Foundation", description: "Digital Learning Infrastructure" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Adopters & Ecosystem
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              AI4Inclusion is powered by a growing global ecosystem of governments, institutions, and organizations committed to inclusive AI innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Image */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <img
              src={ecosystemImage}
              alt="Global ecosystem collaboration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-heading font-bold mb-6 text-center">
              Collaborating for an Inclusive Digital Future
            </h2>
            <p className="text-lg text-muted-foreground text-center">
              AI4Inclusion brings together diverse stakeholders—from national governments and research institutions to NGOs and technology companies—all working toward a common goal: ensuring that AI serves everyone, regardless of language or ability.
            </p>
          </motion.div>

          {/* Adopters List */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {adopters.map((adopter, index) => (
              <motion.div
                key={adopter.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-heading font-bold text-accent-foreground">
                      {adopter.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-1">{adopter.name}</h3>
                    <p className="text-muted-foreground">{adopter.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-accent rounded-lg p-8 text-center"
          >
            <h3 className="text-2xl font-heading font-bold mb-4">
              Join the AI4Inclusion Ecosystem
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Whether you're a government agency, research institution, or technology organization, we welcome your participation in building an inclusive digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-involved">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Become an Adopter
                </button>
              </a>
              <a href="/contact">
                <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors">
                  Contact Us
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Adopters;
