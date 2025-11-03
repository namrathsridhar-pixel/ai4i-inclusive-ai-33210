import { motion } from "framer-motion";
import { Globe, BarChart3, Users, ArrowRight, Shield, Database, MessageSquare, GitBranch, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner-new.png";
import vaultIcon from "@/assets/vault-icon.png";
import feedbackIcon from "@/assets/feedback-icon-new.png";
import abTestingIcon from "@/assets/ab-testing-icon.png";
import JoinForm from "@/components/JoinForm";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const Home = () => {
  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 bg-[#0a1628] overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(216, 100%, 32%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(205, 100%, 38%)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {[...Array(8)].map((_, i) => <motion.line key={i} x1={`${i * 15}%`} y1="0" x2={`${100 - i * 10}%`} y2="100%" stroke="url(#lineGradient)" strokeWidth="1" initial={{
            pathLength: 0,
            opacity: 0
          }} animate={{
            pathLength: 1,
            opacity: [0.1, 0.3, 0.1]
          }} transition={{
            pathLength: {
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 1
            },
            opacity: {
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 1
            }
          }} />)}
          </svg>
        </div>

        {/* Ambient blue glow on left side */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-blue-600/10 to-transparent blur-3xl opacity-60" style={{
          background: 'radial-gradient(ellipse 800px 600px at 30% 50%, hsl(210, 100%, 50%, 0.15), hsl(210, 100%, 45%, 0.08) 40%, transparent 70%)'
        }} />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
          }} className="pl-12 pt-8">
              <motion.h1 className="font-heading font-bold leading-tight text-white" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }}>
                <span className="block text-[4rem] leading-tight">AI4Inclusion</span>
                <span className="block text-[1.25rem] font-medium mt-4 leading-relaxed text-gray-100">Enabling a world where every Voice can Participate, Contribute, and be Heard.</span>
              </motion.h1>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.4
            }} className="mt-8">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScgLYfErsLxkxrZ_iABcX5KKGTf8eDAOY0405u4uz_ww0TRtQ/viewform" target="_blank" rel="noopener noreferrer">
                  <button className="bg-transparent text-white text-[18px] px-8 py-3 rounded-md font-medium border-2 border-white transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,255,255,0.6),inset_0_0_15px_rgba(255,255,255,0.1)]">
                    Join Us
                  </button>
                </a>
              </motion.div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.4, 0, 0.2, 1]
          }} className="hidden md:block absolute inset-y-0 right-0 w-2/5 pointer-events-none select-none">
              <div className="absolute inset-0 bg-no-repeat bg-right-top bg-cover brightness-110 contrast-125 saturate-125" style={{
              backgroundImage: `url(${heroBanner})`,
              imageRendering: 'crisp-edges'
            }} aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a1628]/80" aria-hidden="true" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is AI4Inclusion Section */}
      <section className="py-16 px-4" id="what-is-ai4i">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 className="text-3xl md:text-4xl font-heading font-bold mb-6" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            What is AI4Inclusion?
          </motion.h2>
          <motion.p className="text-lg md:text-xl text-muted-foreground mb-4" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            AI4Inclusion is an initiative that enables nations to build sovereign Language AI Digital Public Infrastructure. It helps countries collect and curate citizen-sourced datasets, and serve native language models through open building blocks — unlocking true digital inclusion, where every citizen can access services and participate in their own spoken language.
          </motion.p>
        </div>
      </section>

      {/* Explore Building Blocks Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-accent to-background" id="building-blocks">
        <div className="container mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.7
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Explore Building Blocks
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} whileHover={{
            y: -8
          }} className="bg-card rounded-lg p-6 shadow-medium hover:shadow-large transition-all duration-500 relative group flex flex-col min-h-[280px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
              
              <motion.div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 shadow-soft relative" whileHover={{
              rotate: [0, -10, 10, 0],
              scale: 1.1
            }} transition={{
              duration: 0.5
            }}>
                <Globe className="text-primary-foreground" size={24} />
              </motion.div>
              <h3 className="text-xl font-heading font-bold mb-3 relative">AI4I-Orchestrate</h3>
              <p className="text-muted-foreground mb-4 relative flex-grow">
                Route models intelligently for domain-aware multilingual inference — with policy-based selection, ensembles, scaling, and SLAs.
              </p>
              <Link to="/building-blocks#ai4i-core" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="default" size="sm" className="gap-2">
                  Learn More
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} whileHover={{
            y: -8
          }} className="bg-card rounded-lg p-6 shadow-medium hover:shadow-large transition-all duration-500 relative group flex flex-col min-h-[280px]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
              
              <motion.div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 shadow-soft relative" whileHover={{
              rotate: [0, -10, 10, 0],
              scale: 1.1
            }} transition={{
              duration: 0.5
            }}>
                <BarChart3 className="text-primary-foreground" size={24} />
              </motion.div>
              <h3 className="text-xl font-heading font-bold mb-3 relative">AI4I-Observe</h3>
              <p className="text-muted-foreground mb-4 relative flex-grow">
                Make Language AI trustworthy through real-world observability across every model and context.
              </p>
              <Link to="/building-blocks#observe" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="default" size="sm" className="gap-2">
                  Learn More
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} whileHover={{
            y: -8
          }} className="bg-card rounded-lg p-6 shadow-medium hover:shadow-large transition-all duration-500 relative group flex flex-col min-h-[280px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
              
              <motion.div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 shadow-soft relative" whileHover={{
              rotate: [0, -10, 10, 0],
              scale: 1.1
            }} transition={{
              duration: 0.5
            }}>
                <Users className="text-primary-foreground" size={24} />
              </motion.div>
              <h3 className="text-xl font-heading font-bold mb-3 relative">AI4I-Contribute</h3>
              <p className="text-muted-foreground mb-4 relative flex-grow">
                Collect multilingual voice and text datasets from citizens.
              </p>
              <Link to="/building-blocks#contribute" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="default" size="sm" className="gap-2">
                  Learn More
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} whileHover={{
            y: -8,
            filter: "brightness(1.05)"
          }} className="bg-card rounded-lg p-6 shadow-medium hover:shadow-large transition-all duration-500 relative group flex flex-col min-h-[280px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
              
              {/* Frosted glass blur overlay */}
              <div className="absolute inset-0 backdrop-blur-[7px] bg-white/25 dark:bg-white/10 rounded-lg pointer-events-none z-10" />
              
              <motion.div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 shadow-soft relative z-20" whileHover={{
              rotate: [0, -10, 10, 0],
              scale: 1.1
            }} transition={{
              duration: 0.5
            }}>
                <Shield className="text-primary-foreground" size={24} />
              </motion.div>
              <h3 className="text-xl font-heading font-bold mb-3 relative z-20">AI4I-Assure</h3>
              <p className="text-muted-foreground mb-4 relative flex-grow z-20">
                Ensure responsible AI use with consent, provenance and policy
              </p>
              <p className="font-medium cursor-default z-20 relative" style={{
              color: '#9CA3AF',
              fontSize: '0.875rem',
              letterSpacing: '0.5px',
              fontWeight: 500
            }}>
                Coming Soon
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} whileHover={{
            y: -8,
            filter: "brightness(1.05)"
          }} className="bg-card rounded-lg p-6 shadow-medium hover:shadow-large transition-all duration-500 relative group flex flex-col min-h-[280px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
              
              {/* Frosted glass blur overlay */}
              <div className="absolute inset-0 backdrop-blur-[7px] bg-white/25 dark:bg-white/10 rounded-lg pointer-events-none z-10" />
              
              <motion.div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 shadow-soft relative z-20" whileHover={{
              rotate: [0, -10, 10, 0],
              scale: 1.1
            }} transition={{
              duration: 0.5
            }}>
                <Database className="text-primary-foreground" size={24} />
              </motion.div>
              <h3 className="text-xl font-heading font-bold mb-3 relative z-20">AI4I-Curate</h3>
              <p className="text-muted-foreground mb-4 relative flex-grow z-20">
                Clean, align, and validate multilingual datasets.
              </p>
              <p className="font-medium cursor-default z-20 relative" style={{
              color: '#9CA3AF',
              fontSize: '0.875rem',
              letterSpacing: '0.5px',
              fontWeight: 500
            }}>
                Coming Soon
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} whileHover={{
            y: -8,
            filter: "brightness(1.05)"
          }} className="bg-card rounded-lg p-6 shadow-medium hover:shadow-large transition-all duration-500 relative group flex flex-col min-h-[280px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
              
              {/* Frosted glass blur overlay */}
              <div className="absolute inset-0 backdrop-blur-[7px] bg-white/25 dark:bg-white/10 rounded-lg pointer-events-none z-10" />
              
              <motion.div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 shadow-soft relative overflow-hidden z-20" whileHover={{
              rotate: [0, -10, 10, 0],
              scale: 1.1
            }} transition={{
              duration: 0.5
            }}>
                <img src={vaultIcon} alt="Vault" className="w-6 h-6 brightness-0 invert" />
              </motion.div>
              <h3 className="text-xl font-heading font-bold mb-3 relative z-20">AI4I-Vault</h3>
              <p className="text-muted-foreground mb-4 relative flex-grow z-20">
                Store, catalog and version language AI models for discovery and reuse.
              </p>
              <p className="font-medium cursor-default z-20 relative" style={{
              color: '#9CA3AF',
              fontSize: '0.875rem',
              letterSpacing: '0.5px',
              fontWeight: 500
            }}>
                Coming Soon
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6,
            delay: 0.7
          }} whileHover={{
            y: -8,
            filter: "brightness(1.05)"
          }} className="bg-card rounded-lg p-6 shadow-medium hover:shadow-large transition-all duration-500 relative group flex flex-col min-h-[280px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
              
              {/* Frosted glass blur overlay */}
              <div className="absolute inset-0 backdrop-blur-[7px] bg-white/25 dark:bg-white/10 rounded-lg pointer-events-none z-10" />
              
              <motion.div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 shadow-soft relative z-20" whileHover={{
              rotate: [0, -10, 10, 0],
              scale: 1.1
            }} transition={{
              duration: 0.5
            }}>
                <MessageSquare className="text-primary-foreground" size={24} />
              </motion.div>
              <h3 className="text-xl font-heading font-bold mb-3 relative z-20">AI4I-Relay</h3>
              <p className="text-muted-foreground mb-4 relative flex-grow z-20">
                Harness real-world feedback to continuously improve language AI models.
              </p>
              <p className="font-medium cursor-default z-20 relative" style={{
              color: '#9CA3AF',
              fontSize: '0.875rem',
              letterSpacing: '0.5px',
              fontWeight: 500
            }}>
                Coming Soon
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} whileHover={{
            y: -8,
            filter: "brightness(1.05)"
          }} className="bg-card rounded-lg p-6 shadow-medium hover:shadow-large transition-all duration-500 relative group flex flex-col min-h-[280px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
              
              {/* Frosted glass blur overlay */}
              <div className="absolute inset-0 backdrop-blur-[7px] bg-white/25 dark:bg-white/10 rounded-lg pointer-events-none z-10" />
              
              <motion.div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 shadow-soft relative z-20" whileHover={{
              rotate: [0, -10, 10, 0],
              scale: 1.1
            }} transition={{
              duration: 0.5
            }}>
                <TrendingUp className="text-primary-foreground" size={24} />
              </motion.div>
              <h3 className="text-xl font-heading font-bold mb-3 relative z-20">AI4I-Sustain</h3>
              <p className="text-muted-foreground mb-4 relative flex-grow z-20">
                Enable metering and value to support smarter budgeting and long-term sustainability.
              </p>
              <p className="font-medium cursor-default z-20 relative" style={{
              color: '#9CA3AF',
              fontSize: '0.875rem',
              letterSpacing: '0.5px',
              fontWeight: 500
            }}>
                Coming Soon
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Watch Our Story
            </h2>
          </motion.div>

          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="bg-card rounded-lg p-8 shadow-medium">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-lg">Video Coming Soon</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-card rounded-lg p-8 shadow-medium">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/i7Tv5sLzic8"
                      title="AI4I Observe Overview"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-card rounded-lg p-8 shadow-medium">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-lg">Video Coming Soon</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>


      <Footer />
    </div>;
};
export default Home;