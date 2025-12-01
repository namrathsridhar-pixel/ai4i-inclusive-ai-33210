import { motion } from "framer-motion";
import { Heart, Users, Handshake, Shield, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  const values = [
    {
      icon: Heart,
      title: "Inclusivity",
      description: "We believe everyone should access digital services in their own language."
    },
    {
      icon: Users,
      title: "Openness",
      description: "We build open-source software and transparent systems."
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We work with communities, researchers, and institutions."
    },
    {
      icon: Shield,
      title: "Accountability",
      description: "We design trustworthy systems aligned with governance-by-design principles."
    }
  ];

  const teamMembers = Array(9).fill(null).map((_, i) => ({
    id: i + 1,
    name: "Name Here",
    role: "Role Title"
  }));

  const partners = Array(6).fill(null).map((_, i) => ({
    id: i + 1,
    name: `Partner ${i + 1}`
  }));

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Who We Are
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Advancing inclusive Language AI as a Digital Public Good.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-sm">
                <p className="text-white/60 font-medium">Team Placeholder Image</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              AI4Inclusion is building open, sovereign, and inclusive Language AI software that empowers 
              nations, communities, and organizations to deliver digital public services in every spoken language. 
              We are committed to ensuring that language is never a barrier to accessing technology and opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-[#0d1d35]/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Values
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-[#0a1628] border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Story
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-sm">
                <p className="text-white/60 font-medium">Story Image Placeholder</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-white/80 leading-relaxed">
                AI4Inclusion emerged from the collective need for digital systems that understand and support 
                the diverse languages of the world. We build foundational language AI software as Digital Public 
                Goods to support institutions at population scale.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Our journey began with a simple observation: despite the incredible advances in AI technology, 
                billions of people remain digitally excluded because existing systems don't speak their language. 
                We're here to change that.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Through open collaboration, transparent governance, and community-driven development, we're 
                building the infrastructure that will democratize access to AI-powered services for every 
                language community on Earth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-[#0d1d35]/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet the Team
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="bg-[#0a1628] border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <p className="text-white/40 font-medium z-10">Photo Placeholder</p>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-white/60">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="ghost" 
                      className="w-full text-primary hover:text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href="#" className="flex items-center justify-center gap-2">
                        View Profile
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Advisors Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Advisors & Collaborators
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="aspect-square bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <p className="text-white/40 text-sm font-medium text-center">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a1628]/50 backdrop-blur-sm" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us in Building Inclusive Language AI
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Whether you're an adopter, contributor, researcher, or community member—there's a place 
              for you in the AI4Inclusion movement.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us
                <ExternalLink className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
