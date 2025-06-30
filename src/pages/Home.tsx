"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Coffee,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Star,
  Clock,
  Wifi,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  Heart,
  Leaf,
  Menu,
  X,
} from "lucide-react"
import { Link } from "react-router-dom"
import { ThemeToggle } from "@/components/ThemeToggle"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import { AnimatePresence } from "framer-motion"

// WhatsApp booking function
const handleWhatsAppBooking = () => {
  const message = encodeURIComponent(
    "Hi! I'd like to make a reservation at Divine Brew. Could you please help me with availability?",
  )
  const phoneNumber = "1234567890" // Replace with your actual WhatsApp business number
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
}

// Enhanced Hero Animation Component
const HeroAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Coffee Beans */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`bean-${i}`}
          className="absolute w-2 h-3 bg-amber-600 rounded-full opacity-20"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Swirling Steam Enhanced */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`steam-${i}`}
          className="absolute w-1 h-16 bg-gradient-to-t from-transparent via-amber-100/30 to-transparent rounded-full"
          style={{
            left: `${15 + i * 8}%`,
            bottom: "15%",
          }}
          animate={{
            y: [-20, -120],
            opacity: [0, 0.8, 0],
            scale: [1, 2, 0.5],
            x: [0, Math.sin(i) * 20, Math.cos(i) * 15],
          }}
          transition={{
            duration: 3.5 + i * 0.3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.6,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Glowing Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-amber-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            y: [-50, -100],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Rotating Coffee Cup Silhouette */}
      <motion.div
        className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-5"
        animate={{
          rotate: [0, 360],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <Coffee className="w-32 h-32 text-amber-400" />
      </motion.div>
    </div>
  )
}

// Floating CTA Button
const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.button
        className="bg-gradient-to-r from-amber-400 to-amber-600 text-amber-900 px-6 py-3 rounded-full font-semibold shadow-2xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(251, 191, 36, 0.3)",
            "0 0 40px rgba(251, 191, 36, 0.5)",
            "0 0 20px rgba(251, 191, 36, 0.3)",
          ],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        onClick={handleWhatsAppBooking}
      >
        Book Now
      </motion.button>
    </motion.div>
  )
}

// Section wrapper with scroll animations
const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Coffee Enthusiast",
      content: "Divine Brew isn't just a café, it's an experience. Every cup tells a story of perfection.",
      rating: 5,
    },
    {
      name: "Marcus Chen",
      role: "Business Executive",
      content: "The ambiance is unmatched. Perfect for both business meetings and quiet contemplation.",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "Food Blogger",
      content: "Their signature blends are absolutely divine. A true sanctuary for coffee lovers.",
      rating: 5,
    },
  ]

  const stats = [
    { icon: Coffee, label: "Premium Blends", value: "15+" },
    { icon: Award, label: "Awards Won", value: "8" },
    { icon: Users, label: "Happy Customers", value: "10K+" },
    { icon: Star, label: "Average Rating", value: "4.9" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Every cup is crafted with love and dedication to perfection.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We source ethically and support sustainable farming practices.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Only the finest beans make it into our sacred blends.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building connections one conversation at a time.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const MobileNavigation = () => {
    const navItems = [
      { name: "Home", href: "/", delay: 0.1 },
      { name: "About", href: "/about", delay: 0.2 },
      { name: "Menu", href: "/menu", delay: 0.3 },
      { name: "Gallery", href: "/gallery", delay: 0.4 },
      { name: "Contact", href: "/contact", delay: 0.5 },
    ]

    return (
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.4,
              }}
              className="fixed top-0 right-0 h-full w-80 bg-stone-50/95 dark:bg-stone-900/95 backdrop-blur-md border-l border-amber-500/20 z-50 md:hidden"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-amber-400/20 hover:bg-amber-400/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 text-amber-400" />
                </motion.button>
              </div>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="px-6 mb-8"
              >
                <h2 className="text-3xl font-serif font-bold text-amber-400">Divine Brew</h2>
                <p className="text-stone-600 dark:text-stone-300 text-sm mt-2">Sip the Sacred</p>
              </motion.div>

              {/* Navigation Links */}
              <nav className="px-6">
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: item.delay,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 px-4 rounded-lg text-lg font-medium text-stone-700 dark:text-stone-300 hover:text-amber-400 hover:bg-amber-400/10 transition-all duration-300 relative overflow-hidden group"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10">{item.name}</span>
                        <motion.div
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-400"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="px-6 mt-8"
              >
                <Button
                  onClick={() => {
                    handleWhatsAppBooking()
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-amber-900 hover:from-amber-500 hover:to-amber-700 py-3 text-lg font-semibold"
                >
                  Reserve a Table
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="px-6 mt-8"
              >
                <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  {[Instagram, Facebook, Twitter].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="p-2 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-amber-400 hover:text-amber-900 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    )
  }

  return (
    <div className="h-fit md:min-h-screen bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 overflow-x-hidden transition-colors duration-500">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-amber-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div className="text-2xl flex justify-center items-center gap-2 text-shadow font-serif font-bold bg-gradient-to-r  dark:from-white/90 dark:to-white from-[#000000]  to-black/60 bg-clip-text text-transparent tracking-wide hover:tracking-[.1em] transition-all duration-500">
            Divine Brew
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["About", "Menu", "Gallery", "Contact"].map((item) => (
              <motion.div key={item} whileHover={{ y: -2 }}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-stone-600/90 dark:text-stone-300 font-semibold hover:text-amber-400 transition-colors relative"
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Menu className="w-6 h-6 text-amber-400" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Component */}
      <MobileNavigation />

      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-200 to-amber-100/20 dark:from-stone-900 dark:via-stone-800 dark:to-amber-900/20" />
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Divine Brew Interior"
          className="absolute inset-0 w-full h-full object-cover opacity-80 dark:opacity-30"
        />
        <HeroAnimation />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="absolute top-0 left-0 w-full h-full z-[-1] blur-[150px] bg-black"></span>
          <motion.h1
            className="text-6xl md:text-8xl font-serif font-bold mb-6 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Divine Brew
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl font-serif text-stone-200 dark:text-stone-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Sip the Sacred. Taste Divine.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-gradient-to-r from-amber-400 to-amber-600 text-amber-900 hover:from-amber-500 hover:to-amber-700 px-8 py-3 text-lg font-semibold"
                onClick={handleWhatsAppBooking}
              >
                Reserve a Table
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/menu">
                <Button
                  variant="outline"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-amber-900 px-8 py-3 text-lg font-semibold bg-transparent"
                >
                  Explore Menu
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <AnimatedSection className="py-16 px-6 bg-stone-200/50 dark:bg-stone-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-amber-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-amber-400" />
                </div>
                <div className="text-3xl font-bold text-amber-400 mb-2">{stat.value}</div>
                <div className="text-stone-600 dark:text-stone-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-400 mb-6">Our Sacred Story</h2>
              <p className="text-lg text-stone-600 dark:text-stone-300 mb-6 leading-relaxed">
                Born from a passion for perfection, Divine Brew represents the pinnacle of coffee craftsmanship. Each
                bean is carefully selected, roasted to divine perfection, and brewed with the reverence it deserves.
              </p>
              <p className="text-lg text-stone-600 dark:text-stone-300 mb-8 leading-relaxed">
                Our sanctuary welcomes those who seek more than just coffee – we offer an experience that transcends the
                ordinary, where every sip is a moment of pure bliss.
              </p>
              <div className="flex items-center space-x-4">
                <Badge className="bg-amber-400 text-amber-900">Est. 2019</Badge>
                <Badge className="bg-amber-400 text-amber-900">Ethically Sourced</Badge>
                <Badge className="bg-amber-400 text-amber-900">Award Winning</Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Coffee brewing process"
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent rounded-lg" />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="py-20 px-6 bg-stone-200/50 dark:bg-stone-800/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-400 mb-4">Our Sacred Values</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
              The principles that guide every decision and every cup we serve
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-stone-100/80 dark:bg-stone-900/80 border-amber-500/20 p-6 h-full hover:border-amber-400/40 transition-all duration-300">
                  <CardContent className="p-0 text-center">
                    <div className="bg-amber-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-amber-400 mb-3">{value.title}</h3>
                    <p className="text-stone-600 dark:text-stone-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Signature Brews Section */}
      <AnimatedSection className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-400 mb-4">Signature Brews</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
              Discover our carefully curated collection of divine coffee experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Divine Espresso",
                description: "A heavenly blend of Ethiopian and Colombian beans, roasted to perfection",
                price: "$4.50",
                image:
                  "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
              {
                name: "Sacred Latte",
                description: "Silky steamed milk meets our signature espresso in perfect harmony",
                price: "$5.25",
                image:
                  "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
              {
                name: "Blessed Cold Brew",
                description: "Slow-steeped for 18 hours, delivering smooth, rich flavors",
                price: "$4.75",
                image:
                  "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
            ].map((brew, index) => (
              <motion.div
                key={brew.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-stone-100/80 dark:bg-stone-900/80 border-amber-500/20 overflow-hidden group hover:border-amber-400/40 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={brew.image || "/placeholder.svg"}
                      alt={brew.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                    <Badge className="absolute top-4 right-4 bg-amber-400 text-amber-900">{brew.price}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold text-amber-400 mb-2">{brew.name}</h3>
                    <p className="text-stone-600 dark:text-stone-300">{brew.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection className="py-20 px-6 bg-stone-200/50 dark:bg-stone-800/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-400 mb-4">Sacred Spaces</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300">Step into our divine sanctuary</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            ].map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-400 mb-4">Divine Reviews</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300">What our blessed customers say</p>
          </motion.div>

          <div className="relative">
            <Card className="bg-stone-100/80 dark:bg-stone-900/80 border-amber-500/20 p-8">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl text-stone-600 dark:text-stone-300 mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <div>
                  <p className="font-semibold text-amber-400">{testimonials[currentTestimonial].name}</p>
                  <p className="text-stone-500 dark:text-stone-400">{testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </Card>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-amber-400 text-amber-900 p-2 rounded-full hover:bg-amber-500 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-amber-400 text-amber-900 p-2 rounded-full hover:bg-amber-500 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-amber-400" : "bg-stone-600"
                }`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Location & Contact Section */}
      <AnimatedSection className="py-20 px-6 bg-stone-200/50 dark:bg-stone-800/50" >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-400 mb-8">Visit Our Sanctuary</h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-amber-400" />
                  <div>
                    <p className="font-semibold">123 Divine Street</p>
                    <p className="text-stone-500 dark:text-stone-400">Coffee District, CD 12345</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-amber-400" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-stone-500 dark:text-stone-400">Mon-Sun: 6:00 AM - 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-amber-400" />
                  <div>
                    <p className="font-semibold">(555) 123-BREW</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-amber-400" />
                  <div>
                    <p className="font-semibold">hello@divinebrew.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-amber-400 mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-5 h-5 text-amber-400" />
                    <span>Free WiFi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-amber-400" />
                    <span>Private Events</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-amber-400" />
                    <span>Award Winning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="w-5 h-5 text-amber-400" />
                    <span>Fresh Roasted</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-stone-800 rounded-lg p-2">
                <img
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Divine Brew Location"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-stone-100 dark:bg-stone-950 py-12 px-6 border-t border-amber-500/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-amber-400 mb-4">Divine Brew</h3>
              <p className="text-stone-600 dark:text-stone-400 mb-4">Where every cup is a sacred experience.</p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, color: "#fbbf24" }}
                  className="text-stone-600 dark:text-stone-400 hover:text-amber-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, color: "#fbbf24" }}
                  className="text-stone-600 dark:text-stone-400 hover:text-amber-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, color: "#fbbf24" }}
                  className="text-stone-600 dark:text-stone-400 hover:text-amber-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-amber-400 mb-4">Menu</h4>
              <ul className="space-y-2 text-stone-600 dark:text-stone-400">
                <li>
                  <Link to="/menu" className="hover:text-amber-400 transition-colors">
                    Espresso
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="hover:text-amber-400 transition-colors">
                    Specialty Drinks
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="hover:text-amber-400 transition-colors">
                    Pastries
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="hover:text-amber-400 transition-colors">
                    Light Bites
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-amber-400 mb-4">Services</h4>
              <ul className="space-y-2 text-stone-600 dark:text-stone-400">
                <li>
                  <Link to="/contact" className="hover:text-amber-400 transition-colors">
                    Catering
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-amber-400 transition-colors">
                    Private Events
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-amber-400 transition-colors">
                    Coffee Subscriptions
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-amber-400 transition-colors">
                    Barista Training
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-amber-400 mb-4">Newsletter</h4>
              <p className="text-stone-600 dark:text-stone-400 mb-4">
                Subscribe for divine updates and exclusive offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-l-md text-stone-900 dark:text-stone-100 focus:outline-none focus:border-amber-400"
                />
                <Button className="bg-amber-400 text-amber-900 hover:bg-amber-500 rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-300 dark:border-stone-800 mt-8 pt-8 text-center text-stone-600 dark:text-stone-400">
            <p>&copy; 2025 Divine Brew. All rights reserved. Crafted with ❤️ and ☕ by <a target="_blank" href="https://constayush.vercel.app">Ayush</a></p>
          </div>
        </div>
      </footer>

      <FloatingCTA />
      <ThemeToggle />
      <ScrollToTopButton />
    </div>
  )
}
