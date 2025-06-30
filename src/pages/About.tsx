"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Award, Users, Heart, Leaf, Star, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { ThemeToggle } from "@/components/ThemeToggle"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"

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

export default function About() {
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

  const team = [
    {
      name: "Elena Rodriguez",
      role: "Master Roaster",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c96d5e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "With 15 years of experience, Elena brings artistry to every roast.",
    },
    {
      name: "Marcus Chen",
      role: "Head Barista",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Marcus transforms coffee into liquid poetry with every pour.",
    },
    {
      name: "Sarah Mitchell",
      role: "Café Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Sarah ensures every visit to Divine Brew is a memorable experience.",
    },
  ]

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      "Hi! I'd like to make a reservation at Divine Brew. Could you please help me with availability?",
    )
    const phoneNumber = "1234567890" // Replace with your actual WhatsApp business number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 transition-colors duration-400">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-amber-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/"  className="text-2xl flex justify-center items-center gap-2 text-shadow font-serif font-bold bg-gradient-to-r  dark:from-white/90 dark:to-white from-[#000000]  to-black/60 bg-clip-text text-transparent tracking-wide hover:tracking-[.1em] transition-all duration-500">
            Divine Brew
          </Link>
          <div className="hidden md:flex space-x-8">
            {[
              { name: "About", href: "/about" },
              { name: "Menu", href: "/menu" },
              { name: "Gallery", href: "/gallery" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                  to={item.href}
                  className={`text-stone-600 dark:text-stone-300 hover:text-amber-400 transition-colors relative ${
                    item.href === "/about" ? "text-amber-400" : ""
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-amber-400"
                    initial={{ width: item.href === "/about" ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
          <Link to="/">
            <Button
              variant="outline"
              size="sm"
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-amber-900 bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Home
            </Button>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-[8rem] pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-200 to-amber-100/20 dark:from-stone-900 dark:via-stone-800 dark:to-amber-900/20" />
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Divine Brew Story"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <motion.h1
             className="relative text-5xl md:text-7xl  font-serif font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-700 to-amber-400 dark:from-amber-200 dark:via-amber-400  dark:to-amber-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Our Sacred Story
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Born from a passion for perfection, Divine Brew represents the pinnacle of coffee craftsmanship where every
            bean tells a story of dedication and artistry.
          </motion.p>
        </div>
      </section>

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
                <div className="text-stone-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Story Section */}
      <AnimatedSection className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-amber-400 mb-6">The Divine Beginning</h2>
              <p className="text-lg text-stone-600 dark:text-stone-300 mb-6 leading-relaxed">
                It all started in 2019 when our founder, inspired by a transformative coffee experience in the highlands
                of Ethiopia, envisioned a sanctuary where coffee transcends the ordinary. What began as a dream has
                evolved into a sacred space where every cup is a testament to our unwavering commitment to excellence.
              </p>
              <p className="text-lg text-stone-600 dark:text-stone-300 mb-6 leading-relaxed">
                We believe that coffee is more than a beverage—it's a ritual, a moment of pause in our busy lives, a
                connection to the earth and to each other. Every bean is carefully selected from sustainable farms,
                roasted with precision, and served with reverence.
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
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Coffee Origin Story"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
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

      {/* Team Section */}
      <AnimatedSection className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-400 mb-4">Meet Our Artisans</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
              The passionate individuals who bring Divine Brew to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-stone-100/80 dark:bg-stone-900/80 border-amber-500/20 overflow-hidden group hover:border-amber-400/40 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold text-amber-400 mb-1">{member.name}</h3>
                    <p className="text-amber-300 mb-3">{member.role}</p>
                    <p className="text-stone-600 dark:text-stone-300">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 px-6 bg-stone-200/50 dark:bg-stone-800/50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-amber-400 mb-6">Experience the Divine</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 mb-8 max-w-2xl mx-auto">
              Ready to embark on your own coffee journey? Visit us and discover what makes Divine Brew truly sacred.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsAppBooking}
                className="bg-gradient-to-r from-amber-400 to-amber-600 text-amber-900 hover:from-amber-500 hover:to-amber-700 px-8 py-3 text-lg font-semibold"
              >
                Visit Our Sanctuary
              </Button>
              <Link to="/menu">
                <Button
                  variant="outline"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-amber-900 px-8 py-3 text-lg font-semibold bg-transparent"
                >
                  Explore Our Menu
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <ThemeToggle />
      <ScrollToTopButton />
    </div>
  )
}
