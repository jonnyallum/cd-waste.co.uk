/**
 * CD Waste & Recycling - Single Page Website
 * 
 * DESIGN PHILOSOPHY: Neon Noir
 * - Deep void black backgrounds (#050508)
 * - Neon red CTAs (#FF2D55)
 * - Electric cyber blue accents (#00D4FF)
 * - Glass morphism and atmospheric depth
 * - Smooth, fluid animations
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Hammer,
  Home as HomeIcon,
  Leaf,
  MapPin,
  Menu,
  Phone,
  Recycle,
  Shield,
  Sofa,
  Star,
  Trash2,
  Truck,
  Users,
  X,
  MessageCircle,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

// WhatsApp phone number (UK format without +)
const WHATSAPP_NUMBER = "447849357424";
const WHATSAPP_MESSAGE = "Hi! I'm interested in your waste removal services. Can you provide a quote?";

// WhatsApp URL helper
const getWhatsAppUrl = () => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
};

// Floating WhatsApp Button Component
function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isVisible ? 1 : 0, 
        opacity: isVisible ? 1 : 0 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/50 transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 text-white fill-current"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </motion.a>
  );
}

// Smooth scroll helper function
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center gap-3 group"
        >
          <img
            src="/images/cd-logo.webp"
            alt="CD Waste & Recycling"
            className="w-10 h-10 rounded-full object-cover border-2 border-[#FF2D55]/50"
          />
          <div className="hidden sm:block">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#FF2D55] transition-colors">
              CD
            </span>
            <span className="text-xl font-light text-white/80"> Waste & Recycling</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href.replace('#', ''))}
              className="text-sm font-medium text-white/70 hover:text-white animated-underline transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:07849357424">
            <Button className="bg-[#FF2D55] hover:bg-[#FF2D55]/90 text-white glow-red-hover transition-all">
              <Phone className="w-4 h-4 mr-2" />
              07849 357 424
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass mt-2 mx-4 rounded-xl p-6"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  scrollToSection(e, link.href.replace('#', ''));
                  setIsMobileMenuOpen(false);
                }}
                className="text-white/80 hover:text-white py-2 border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:07849357424" className="mt-2">
              <Button className="w-full bg-[#FF2D55] hover:bg-[#FF2D55]/90 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/80 via-[#050508]/60 to-[#050508]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF2D55]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/80">
              <Star className="w-4 h-4 text-[#FF2D55]" fill="#FF2D55" />
              9.9/10 Rating on Checkatrade
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Professional Waste Management{" "}
            <span className="text-gradient">Made Simple</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl mx-auto"
          >
            Family business with over 10 years of experience. Cleaner than a skip,
            with OAP discounts. Serving Havant, Hampshire and surrounding areas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="tel:07849357424">
              <Button
                size="lg"
                className="bg-[#FF2D55] hover:bg-[#FF2D55]/90 text-white text-lg px-8 py-6 glow-red pulse-glow"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us: 07849 357 424
              </Button>
            </a>
            <a 
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                Our Services
                <ChevronDown className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-wrap justify-center gap-6 text-white/60"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#00D4FF]" />
              <span>Fully Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <Recycle className="w-5 h-5 text-[#00D4FF]" />
              <span>95% Recycled</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#00D4FF]" />
              <span>Same Day Service</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a 
          href="#services" 
          onClick={(e) => scrollToSection(e, 'services')}
          className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs mb-2">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: HomeIcon,
      title: "Household Waste",
      description:
        "Efficient removal of domestic & commercial waste with same-day service available. Perfect for decluttering projects and house clearances.",
    },
    {
      icon: Leaf,
      title: "Garden Clearance",
      description:
        "Complete garden waste removal including soil, rubble, and green waste. We'll leave your outdoor space pristine and ready for your next project.",
    },
    {
      icon: Hammer,
      title: "Rubble & Soil",
      description:
        "Professional removal of construction debris, soil, and hardcore materials. Licensed and insured for commercial and residential projects.",
    },
    {
      icon: Recycle,
      title: "End of Tenancy",
      description:
        "Comprehensive clearance services for rental properties, ensuring you get your deposit back with a spotless handover.",
    },
    {
      icon: Sofa,
      title: "Garage & Shed",
      description:
        "Free up valuable space by clearing out years of accumulated items. We handle everything from old tools to garden equipment.",
    },
    {
      icon: Building2,
      title: "Small Demolitions",
      description:
        "Safe and efficient demolition of sheds, garages, and small structures with complete waste removal included.",
    },
    {
      icon: Truck,
      title: "Builders Waste",
      description:
        "Dedicated service for construction waste removal. We understand building timelines and offer flexible collection schedules.",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#0a0a12] to-[#050508]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/images/services-icon-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-[#00D4FF] text-sm font-semibold tracking-wider uppercase"
          >
            What We Do
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Comprehensive waste management solutions tailored to your needs. No job
            too big or too small.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card className="glass-card p-6 h-full group hover:border-[#FF2D55]/30 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF2D55]/20 to-[#00D4FF]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-[#FF2D55]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const stats = [
    { number: "1000+", label: "Happy Customers" },
    { number: "95%", label: "Recycled Materials" },
    { number: "24/7", label: "Available Service" },
    { number: "10+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/about-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/95 to-[#050508]/80" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="text-[#00D4FF] text-sm font-semibold tracking-wider uppercase"
            >
              About Us
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
            >
              Your Trusted Waste{" "}
              <span className="text-[#FF2D55]">Management Partner</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4 text-white/70">
              <p>
                CD Recycling is a well-established family business with over 10
                years of experience in handling all aspects of domestic and
                commercial waste removal. Based in Havant, Hampshire, we serve the
                local community with professional, reliable waste management
                services.
              </p>
              <p>
                We pride ourselves on being cleaner than traditional skip hire,
                more flexible, and offering exceptional value – including special
                discounts for OAPs. Our commitment to the environment means we
                recycle and responsibly dispose of all materials wherever possible.
              </p>
              <p>
                We're fully licensed and insured, giving you complete peace of mind
                with every job. No job is too big or too small – whether you need a
                single item removed or a complete property clearance, we approach
                every project with the same level of professionalism and care.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                <Button
                  size="lg"
                  className="bg-[#FF2D55] hover:bg-[#FF2D55]/90 text-white glow-red-hover"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
              </a>
              <a
                href="https://www.checkatrade.com/trades/cdrecycling"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#00D4FF]/50 text-[#00D4FF] hover:bg-[#00D4FF]/10"
                >
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  View on Checkatrade
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="glass-card p-6 text-center rounded-2xl"
              >
                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Gallery Section with Checkatrade Integration
function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showCheckatradeModal, setShowCheckatradeModal] = useState(false);

  const galleryImages = [
    { src: "/images/project-1-before.webp", label: "House Clearance", type: "before" },
    { src: "/images/project-2-before.webp", label: "Rubble Removal", type: "before" },
    { src: "/images/project-3-before.webp", label: "Garage Clearance", type: "before" },
    { src: "/images/project-4-after.webp", label: "After Clearance", type: "after" },
    { src: "/images/job-1-garden.webp", label: "Garden Waste", type: "before" },
    { src: "/images/job-2-sofa.webp", label: "Furniture Removal", type: "before" },
    { src: "/images/job-3-rubble.webp", label: "Construction Debris", type: "before" },
    { src: "/images/job-4-bricks.webp", label: "Brick & Rubble", type: "before" },
    { src: "/images/job-5-shed.webp", label: "Shed Clearance", type: "before" },
    { src: "/images/job-6-skip.webp", label: "Skip Bag Service", type: "service" },
    { src: "/images/job-7-debris.webp", label: "Site Clearance", type: "before" },
    { src: "/images/cta-bg.png", label: "Before & After", type: "after" },
  ];

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        setShowCheckatradeModal(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#050508]">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-[#00D4FF] text-sm font-semibold tracking-wider uppercase"
          >
            Our Work
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
          >
            Before & After Gallery
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            See the quality and professionalism we bring to every project. Real
            results from real jobs on Checkatrade.
          </motion.p>
          
          {/* Checkatrade Badge */}
          <motion.div variants={fadeInUp} className="mt-6 flex items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
              <CheckCircle2 className="w-5 h-5 text-[#00D4FF]" />
              <span className="text-white/80 text-sm">Photos from our Checkatrade profile</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              onClick={() => setSelectedImage(index)}
              className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Type Badge */}
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  image.type === "before" ? "bg-[#FF2D55]/80 text-white" :
                  image.type === "after" ? "bg-[#00D4FF]/80 text-white" :
                  "bg-white/20 text-white"
                }`}>
                  {image.type === "before" ? "Before" : image.type === "after" ? "After" : "Service"}
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-medium">{image.label}</span>
              </div>
              
              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More on Checkatrade Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.checkatrade.com/trades/cdrecycling"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#050508] font-semibold glow-blue-hover"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                View All Photos on Checkatrade
              </Button>
            </a>
            <button
              onClick={() => setShowCheckatradeModal(true)}
              className="text-white/60 hover:text-white underline underline-offset-4 transition-colors"
            >
              Or preview Checkatrade profile here
            </button>
          </div>
          <p className="mt-4 text-white/40 text-sm">
            Our gallery updates automatically as we add new projects to Checkatrade
          </p>
        </motion.div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-[#050508]/95 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white p-2"
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1);
            }}
            className="absolute left-4 sm:left-8 text-white/60 hover:text-white p-2 bg-white/10 rounded-full"
          >
            <ChevronDown className="w-8 h-8 rotate-90" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0);
            }}
            className="absolute right-4 sm:right-8 text-white/60 hover:text-white p-2 bg-white/10 rounded-full"
          >
            <ChevronDown className="w-8 h-8 -rotate-90" />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[80vh] relative"
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].label}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#050508] to-transparent rounded-b-xl">
              <div className="flex items-center justify-between">
                <div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full mr-2 ${
                    galleryImages[selectedImage].type === "before" ? "bg-[#FF2D55]/80 text-white" :
                    galleryImages[selectedImage].type === "after" ? "bg-[#00D4FF]/80 text-white" :
                    "bg-white/20 text-white"
                  }`}>
                    {galleryImages[selectedImage].type === "before" ? "Before" : 
                     galleryImages[selectedImage].type === "after" ? "After" : "Service"}
                  </span>
                  <span className="text-white font-medium">{galleryImages[selectedImage].label}</span>
                </div>
                <span className="text-white/60 text-sm">{selectedImage + 1} / {galleryImages.length}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Checkatrade Profile Modal */}
      {showCheckatradeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowCheckatradeModal(false)}
          className="fixed inset-0 z-50 bg-[#050508]/95 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl h-[85vh] bg-white rounded-2xl overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 right-0 h-14 bg-[#050508] flex items-center justify-between px-4 z-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D4FF]" />
                <span className="text-white font-medium">CD Recycling on Checkatrade</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.checkatrade.com/trades/cdrecycling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00D4FF] hover:text-[#00D4FF]/80 text-sm underline"
                >
                  Open in new tab
                </a>
                <button
                  onClick={() => setShowCheckatradeModal(false)}
                  className="text-white/60 hover:text-white p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <iframe
              src="https://www.checkatrade.com/trades/cdrecycling"
              className="w-full h-full pt-14"
              title="CD Recycling Checkatrade Profile"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

// Checkatrade Section
function CheckatradeSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#0D1B2A] to-[#050508]" />

      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="text-[#00D4FF] text-sm font-semibold tracking-wider uppercase"
          >
            Verified & Trusted
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-12"
          >
            Verified on Checkatrade
          </motion.h2>

          <motion.div
            variants={scaleIn}
            className="inline-block glass-card p-8 sm:p-12 rounded-3xl"
          >
            <div className="text-6xl sm:text-8xl font-bold text-gradient mb-4">
              9.9<span className="text-3xl sm:text-4xl text-white/60">/10</span>
            </div>
            <p className="text-white/60 text-lg mb-8">
              Average Customer Rating from 41+ Reviews
            </p>

            {/* Rating Breakdown */}
            <div className="grid grid-cols-3 gap-6 mb-8 text-center">
              <div>
                <div className="text-2xl font-bold text-[#FF2D55]">9.88</div>
                <div className="text-white/50 text-sm">Quality</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#FF2D55]">9.88</div>
                <div className="text-white/50 text-sm">Reliability</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#FF2D55]">9.94</div>
                <div className="text-white/50 text-sm">Communication</div>
              </div>
            </div>

            {/* Checkatrade Button - Using the provided code structure */}
            <a
              href="https://www.checkatrade.com/trades/cdrecycling"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#050508] font-semibold glow-blue"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                View Our Checkatrade Profile
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      text: "Absolutely fantastic service! Showed up the next day and cleared all the rubbish very quickly. Reasonably priced and very nice chaps.",
      author: "Verified Customer",
      location: "PO5",
      rating: 5,
    },
    {
      text: "They contacted me straight away when I posted the job on Checkatrade. Had a phone call to arrange a quote, happy with the price and job done the next morning. Very prompt and reliable, very helpful and friendly. Would definitely use them again and recommend them.",
      author: "Verified Customer",
      location: "Hampshire",
      rating: 5,
    },
    {
      text: "The guys were upfront and honest about costs and worked very quickly. When the job couldn't be completed in the initial timeframe they came back to finish sooner than they initially thought they could. It was spotless when they had finished! They were professional and down to earth. Would highly recommend.",
      author: "Verified Customer",
      location: "Hampshire",
      rating: 5,
    },
    {
      text: "Great service today, turned up on time, no fuss, got on with the house clearance while treating my mum's house with respect. Was the cheapest quote we had, so pleased we found CD waste & recycling on here.",
      author: "Verified Customer",
      location: "Hampshire",
      rating: 5,
    },
    {
      text: "Very impressed with these guys. Had two separate visits from them and both times they were punctual, quick to clear the rubbish and fairly priced. Cheerful Chappies! I have no hesitation in recommending their services to anybody looking for a waste removal team.",
      author: "Ken B",
      location: "PO14",
      rating: 5,
    },
    {
      text: "These guys are top notch, obviously keen to do the job, Dave rang us up when the ad was placed, nobody else showed that much interest, came next morning, price agreed on the spot, all cleared and gone within 45 minutes. Clean as a whistle.",
      author: "Ken B",
      location: "PO14",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#050508]">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-[#00D4FF] text-sm font-semibold tracking-wider uppercase"
          >
            Testimonials
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Real reviews from real customers on Checkatrade
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card className="glass-card p-6 h-full relative">
                {/* Quote Mark */}
                <div className="absolute -top-2 -left-2 text-8xl text-[#FF2D55]/10 font-serif leading-none">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#FFB800]"
                      fill="#FFB800"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-white/80 mb-6 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF2D55] to-[#00D4FF] flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      {testimonial.author}
                    </div>
                    <div className="text-white/50 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Contact/CTA Section
function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/90 to-[#050508]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="text-[#00D4FF] text-sm font-semibold tracking-wider uppercase"
          >
            Get Started
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
          >
            Ready to Clear Your Space?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/60 text-lg mb-10 max-w-2xl mx-auto"
          >
            Get a free, no-obligation quote today. We offer competitive pricing,
            same-day service, and OAP discounts. Call us now or request a quote
            through Checkatrade.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap mb-12"
          >
            <a href="tel:07849357424">
              <Button
                size="lg"
                className="bg-[#FF2D55] hover:bg-[#FF2D55]/90 text-white text-lg px-8 py-7 glow-red pulse-glow"
              >
                <Phone className="w-6 h-6 mr-3" />
                07849 357 424
              </Button>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white text-lg px-8 py-7"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 mr-3 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </Button>
            </a>
            <a
              href="https://www.checkatrade.com/trades/cdrecycling"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-[#00D4FF]/50 text-[#00D4FF] hover:bg-[#00D4FF]/10 text-lg px-8 py-7"
              >
                <CheckCircle2 className="w-6 h-6 mr-3" />
                Checkatrade
              </Button>
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeInUp}
            className="grid sm:grid-cols-3 gap-6"
          >
            <div className="glass-card p-6 rounded-xl">
              <MapPin className="w-8 h-8 text-[#FF2D55] mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">Location</h3>
              <p className="text-white/60">Havant, Hampshire</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Phone className="w-8 h-8 text-[#FF2D55] mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">Phone</h3>
              <a href="tel:07849357424" className="text-white/60 hover:text-[#00D4FF]">
                07849 357 424
              </a>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Clock className="w-8 h-8 text-[#FF2D55] mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">Availability</h3>
              <p className="text-white/60">24/7 Service</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#050508]">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="flex items-center gap-3 mb-4"
            >
              <img
                src="/images/cd-logo.webp"
                alt="CD Waste & Recycling"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#FF2D55]/50"
              />
              <div>
                <span className="text-xl font-bold text-white">CD</span>
                <span className="text-xl font-light text-white/80">
                  {" "}
                  Waste & Recycling
                </span>
              </div>
            </a>
            <p className="text-white/60 max-w-md">
              Family-run waste management business with over 10 years of
              experience. Serving Havant, Hampshire and surrounding areas.
              Fully licensed and insured.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a 
                href="#services" 
                onClick={(e) => scrollToSection(e, 'services')}
                className="text-white/60 hover:text-white"
              >
                Services
              </a>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')}
                className="text-white/60 hover:text-white"
              >
                About Us
              </a>
              <a 
                href="#gallery" 
                onClick={(e) => scrollToSection(e, 'gallery')}
                className="text-white/60 hover:text-white"
              >
                Gallery
              </a>
              <a 
                href="#testimonials" 
                onClick={(e) => scrollToSection(e, 'testimonials')}
                className="text-white/60 hover:text-white"
              >
                Reviews
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-white/60">
              <a href="tel:07849357424" className="hover:text-white flex items-center gap-2">
                <Phone className="w-4 h-4" />
                07849 357 424
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Havant, Hampshire
              </span>
              <a
                href="https://www.checkatrade.com/trades/cdrecycling"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00D4FF] flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                Checkatrade Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} CD Waste & Recycling. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-sm flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Fully Licensed & Insured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Home Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <CheckatradeSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
