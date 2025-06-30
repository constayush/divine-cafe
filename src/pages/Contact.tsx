"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Wifi,
  Users,
  Award,
  Coffee,
  ArrowLeft,
  Send,
  CheckCircle,
} from "lucide-react"
import { ThemeToggle } from "../components/ThemeToggle"
import { ScrollToTopButton } from "../components/ScrollToTopButton"

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Divine Street", "Coffee District, CD 12345"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-BREW", "(555) 123-2739"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@divinebrew.com", "events@divinebrew.com"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 6:00 AM - 10:00 PM", "Sat-Sun: 7:00 AM - 11:00 PM"],
    },
  ]

  const amenities = [
    { icon: Wifi, label: "Free WiFi" },
    { icon: Users, label: "Private Events" },
    { icon: Award, label: "Award Winning" },
    { icon: Coffee, label: "Fresh Roasted" },
  ]

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      "Hi! I'd like to make a reservation at Divine Brew. Could you please help me with availability?",
    )
    const phoneNumber = "1234567890"
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 transition-colors duration-500">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-amber-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl flex justify-center items-center gap-2 text-shadow font-serif font-bold bg-gradient-to-r  dark:from-white/90 dark:to-white from-[#000000]  to-black/60 bg-clip-text text-transparent tracking-wide hover:tracking-[.1em] transition-all duration-500">
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
                    item.href === "/contact" ? "text-amber-400" : ""
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-amber-400"
                    initial={{ width: item.href === "/contact" ? "100%" : "0%" }}
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
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&h=600&fit=crop&q=80"
          alt="Divine Brew Contact"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <motion.h1
           className="relative text-5xl md:text-7xl  font-serif font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-700 to-amber-400 dark:from-amber-200 dark:via-amber-400  dark:to-amber-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Visit Our Sanctuary
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We'd love to welcome you to our divine coffee sanctuary. Reach out to us for reservations, events, or just
            to say hello.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <AnimatedSection className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-stone-100/80 dark:bg-stone-900/80 border-amber-500/20 p-6 text-center h-full hover:border-amber-400/40 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="bg-amber-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-amber-400 mb-3">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-stone-600 dark:text-stone-300 mb-1">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form & Map */}
      <AnimatedSection className="py-20 px-6 bg-stone-200/50 dark:bg-stone-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-amber-400 mb-8">Send Us a Message</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/30 rounded-lg p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-serif font-bold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-stone-600 dark:text-stone-300">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-amber-400 font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-stone-100 dark:bg-stone-800 border-stone-300 dark:border-stone-600 text-stone-900 dark:text-stone-100 focus:border-amber-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-amber-400 font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-stone-100 dark:bg-stone-800 border-stone-300 dark:border-stone-600 text-stone-900 dark:text-stone-100 focus:border-amber-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-amber-400 font-medium mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-stone-100 dark:bg-stone-800 border-stone-300 dark:border-stone-600 text-stone-900 dark:text-stone-100 focus:border-amber-400"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-amber-400 font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-stone-100 dark:bg-stone-800 border-stone-300 dark:border-stone-600 text-stone-900 dark:text-stone-100 focus:border-amber-400"
                        placeholder="What can we help you with?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-amber-400 font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-stone-100 dark:bg-stone-800 border-stone-300 dark:border-stone-600 text-stone-900 dark:text-stone-100 focus:border-amber-400 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-amber-900 hover:from-amber-500 hover:to-amber-700 py-3 text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map & Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-serif font-bold text-amber-400 mb-8">Find Our Sanctuary</h2>
                <div className="bg-stone-800 rounded-lg p-2 mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop&q=80"
                    alt="Divine Brew Location Map"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-amber-400 mb-6">Amenities & Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {amenities.map((amenity, index) => (
                    <motion.div
                      key={amenity.label}
                      className="flex items-center space-x-3 p-4 bg-stone-200/50 dark:bg-stone-900/50 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <amenity.icon className="w-6 h-6 text-amber-400" />
                      <span className="text-stone-600 dark:text-stone-300">{amenity.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-amber-400 mb-6">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, color: "#fbbf24" }}
                    className="bg-stone-200/50 dark:bg-stone-900/50 p-4 rounded-lg text-stone-600 dark:text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, color: "#fbbf24" }}
                    className="bg-stone-200/50 dark:bg-stone-900/50 p-4 rounded-lg text-stone-600 dark:text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, color: "#fbbf24" }}
                    className="bg-stone-200/50 dark:bg-stone-900/50 p-4 rounded-lg text-stone-600 dark:text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Reservation CTA */}
      <AnimatedSection className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-amber-400 mb-6">Ready for a Divine Experience?</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 mb-8 max-w-2xl mx-auto">
              Reserve your table now and step into our sacred coffee sanctuary where every moment is crafted with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsAppBooking}
                className="bg-gradient-to-r from-amber-400 to-amber-600 text-amber-900 hover:from-amber-500 hover:to-amber-700 px-8 py-3 text-lg font-semibold"
              >
                Reserve a Table
              </Button>
              <Link to="/menu">
                <Button
                  variant="outline"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-amber-900 px-8 py-3 text-lg font-semibold bg-transparent"
                >
                  View Our Menu
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
