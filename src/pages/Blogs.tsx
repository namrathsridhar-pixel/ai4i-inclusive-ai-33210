import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Blogs = () => {
  const blogPlaceholders = [
    { id: 1, title: "Coming Soon", description: "Stay tuned for insights and updates from the AI4Inclusion community." },
    { id: 2, title: "Coming Soon", description: "Stay tuned for insights and updates from the AI4Inclusion community." },
    { id: 3, title: "Coming Soon", description: "Stay tuned for insights and updates from the AI4Inclusion community." },
    { id: 4, title: "Coming Soon", description: "Stay tuned for insights and updates from the AI4Inclusion community." },
    { id: 5, title: "Coming Soon", description: "Stay tuned for insights and updates from the AI4Inclusion community." },
    { id: 6, title: "Coming Soon", description: "Stay tuned for insights and updates from the AI4Inclusion community." },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blogs
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Insights, updates, and stories from AI4Inclusion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPlaceholders.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 12px 40px -12px hsl(216, 100%, 32%, 0.25)"
                }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300">
                  {/* Placeholder Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                    <span className="text-white/60 text-2xl font-semibold">
                      Coming Soon
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-white/70 text-base mb-4 leading-relaxed">
                      {blog.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium link-underline"
                    >
                      Read More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
