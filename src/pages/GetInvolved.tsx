import { motion } from "framer-motion";
import { Code, Database, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GetInvolved = () => {
  const pathways = [
    {
      icon: <Building2 size={32} />,
      title: "Become an Adopter",
      description: "Implement AI4Inclusion in your organization or government initiative to enable inclusive language services.",
      actions: [
        "Access implementation guides",
        "Connect with technical support",
        "Join adopter community",
      ],
    },
    {
      icon: <Code size={32} />,
      title: "Contribute as a Developer",
      description: "Help build and improve the platform by contributing code, fixing bugs, or adding new features.",
      actions: [
        "Explore GitHub repositories",
        "Review contribution guidelines",
        "Join developer discussions",
      ],
    },
    {
      icon: <Database size={32} />,
      title: "Share Data & Models",
      description: "Contribute datasets, trained models, or language resources to strengthen the AI4I ecosystem.",
      actions: [
        "Submit language datasets",
        "Share trained models",
        "Validate community contributions",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Join the AI4Inclusion Movement
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              AI4Inclusion thrives on collaboration. Whether you're an organization, developer, or researcher, there's a place for you in our ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pathways.map((pathway, index) => (
              <motion.div
                key={pathway.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <div className="text-primary-foreground">{pathway.icon}</div>
                    </div>
                    <CardTitle className="text-xl font-heading">{pathway.title}</CardTitle>
                    <CardDescription className="text-base">{pathway.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {pathway.actions.map((action) => (
                        <li key={action} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-muted rounded-lg p-8 mb-16"
          >
            <h2 className="text-3xl font-heading font-bold mb-6 text-center">
              Why Contribute?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-heading font-bold mb-3">Make an Impact</h3>
                <p className="text-muted-foreground">
                  Your contributions directly improve language accessibility for millions of users worldwide, especially those in underserved language communities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-3">Collaborate & Learn</h3>
                <p className="text-muted-foreground">
                  Work alongside experts from leading institutions and organizations, gaining insights into cutting-edge AI and open-source development.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-3">Open Innovation</h3>
                <p className="text-muted-foreground">
                  Benefit from shared resources, models, and datasets while contributing to a thriving ecosystem of inclusive AI tools.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-3">Recognition</h3>
                <p className="text-muted-foreground">
                  Gain visibility in the global open-source community and be recognized for your contributions to digital public good.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our documentation to learn more about how you can contribute, or reach out to our team to discuss partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://docs.ai4inclusion.org" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="font-medium">
                  View Documentation <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <a href="/contact">
                <Button size="lg" variant="outline" className="font-medium">
                  Contact Us
                </Button>
              </a>
              <a href="https://github.com/ai4inclusion" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="font-medium">
                  View on GitHub
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
