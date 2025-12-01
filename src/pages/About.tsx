import { motion } from "framer-motion";
import { Globe, Shield, Users, Code, Database, Eye, GitBranch, Target, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About AI4Inclusion
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 font-medium">
              Building inclusive language AI infrastructure for the world.
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              AI4Inclusion (AI4I) is an open-source initiative dedicated to creating modular, 
              scalable language AI infrastructure that empowers communities and nations to build 
              inclusive digital services. We believe that every language—major or minor—deserves 
              equal access to AI-powered solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 px-4 bg-[#0d1d35]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why AI4Inclusion?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-destructive" />
                  </div>
                  <CardTitle className="text-white text-2xl">Problem Statement</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70 text-base leading-relaxed">
                    Digital exclusion due to language barriers affects billions worldwide. 
                    Communities speaking minority languages are left behind in the digital revolution, 
                    unable to access essential services and information in their native tongues.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Database className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-white text-2xl">Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70 text-base leading-relaxed">
                    Lack of language-agnostic AI infrastructure at scale prevents governments 
                    and organizations from deploying inclusive AI solutions. Traditional approaches 
                    are fragmented, proprietary, and fail to serve diverse linguistic communities.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-white text-2xl">Opportunity & Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70 text-base leading-relaxed">
                    Every citizen, in every language, connected to digital services. 
                    Through open-source, modular infrastructure, we can democratize AI and 
                    ensure no community is left behind in the digital age.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-gradient-to-br from-primary/20 to-transparent border-primary/30">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-10 h-10 text-primary" />
                    <CardTitle className="text-white text-3xl">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Provide modular, open-source language AI software and tools so communities 
                    and nations can build inclusive AI infrastructure. We empower governments, 
                    organizations, and developers with the building blocks needed to create 
                    AI solutions that serve every language and community.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-gradient-to-br from-secondary/20 to-transparent border-secondary/30">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-10 h-10 text-secondary" />
                    <CardTitle className="text-white text-3xl">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 text-lg leading-relaxed">
                    A world where every language—major or minor—enjoys equal access to 
                    AI-powered digital services. We envision a future where linguistic diversity 
                    is celebrated and supported through technology, ensuring digital equity 
                    for all communities globally.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-[#0d1d35]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Approach
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Built on principles of openness, inclusivity, and scalability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Code,
                title: "Open-Source & Transparency",
                description: "All our code is open-source and publicly accessible. We believe in transparent development, community collaboration, and shared ownership of the infrastructure that powers inclusive AI.",
                delay: 0.1
              },
              {
                icon: Users,
                title: "Citizen Participation & Inclusivity",
                description: "We actively involve communities in the development process, ensuring that solutions are built by and for the people they serve. Every voice matters in shaping inclusive AI.",
                delay: 0.2
              },
              {
                icon: Shield,
                title: "Governance & Accountability",
                description: "Clear governance structures and accountability mechanisms ensure responsible AI development. We maintain high standards for ethical AI practices and data stewardship.",
                delay: 0.3
              },
              {
                icon: GitBranch,
                title: "Modular & Scalable Architecture",
                description: "Our building-block approach allows organizations to adopt components independently, scaling from small pilots to nationwide deployments without vendor lock-in.",
                delay: 0.4
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <Card className="h-full bg-white/5 border-white/10 hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl mb-2">{item.title}</CardTitle>
                        <CardDescription className="text-white/70 leading-relaxed">
                          {item.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Blocks Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We Offer
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Modular building blocks for comprehensive language AI infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Globe,
                title: "AI4I-Orchestrate",
                description: "Core orchestration layer for seamless integration of language AI services across platforms.",
                link: "/building-blocks#ai4i-core",
                color: "primary"
              },
              {
                icon: Eye,
                title: "AI4I-Observe",
                description: "Comprehensive monitoring and observability tools for AI systems at scale.",
                link: "/building-blocks#observe",
                color: "secondary"
              },
              {
                icon: Users,
                title: "AI4I-Contribute",
                description: "Community-powered data contribution platform for building inclusive datasets.",
                link: "/building-blocks#contribute",
                color: "primary"
              }
            ].map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <Link to={block.link}>
                  <Card className="h-full bg-white/5 border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <block.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-white text-xl mb-2">{block.title}</CardTitle>
                      <CardDescription className="text-white/70">
                        {block.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link to="/building-blocks">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Explore All Building Blocks
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 via-[#0d1d35] to-[#0a1628]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Involved
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Join us in building inclusive language AI infrastructure. Whether you're an adopter, 
              contributor, researcher, or community member—there's a place for you in the AI4I movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScgLYfErsLxkxrZ_iABcX5KKGTf8eDAOY0405u4uz_ww0TRtQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white min-w-[200px]">
                  Join the Movement
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 min-w-[200px]">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Bar */}
      <section className="py-12 px-4 bg-[#0d1d35] border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <span className="text-white/90 font-medium text-lg">Open Digital Public Good</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <span className="text-white/90 font-medium text-lg">Open-Source</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <span className="text-white/90 font-medium text-lg">Inclusive</span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
