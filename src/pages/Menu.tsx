"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Coffee, Milk, Snowflake, Cookie, Sandwich, ArrowLeft, Filter, Star } from "lucide-react"
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

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Items", icon: Filter },
    { id: "espresso", name: "Espresso", icon: Coffee },
    { id: "specialty", name: "Specialty", icon: Milk },
    { id: "cold", name: "Cold Brews", icon: Snowflake },
    { id: "pastries", name: "Pastries", icon: Cookie },
    { id: "food", name: "Light Bites", icon: Sandwich },
  ]

  const menuItems = [
    {
      id: 1,
      name: "Divine Espresso",
      category: "espresso",
      price: "$4.50",
      description: "A heavenly blend of Ethiopian and Colombian beans, roasted to perfection",
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=300&fit=crop&q=80",
      popular: true,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Sacred Latte",
      category: "specialty",
      price: "$5.25",
      description: "Silky steamed milk meets our signature espresso in perfect harmony",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop&q=80",
      popular: true,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Blessed Cold Brew",
      category: "cold",
      price: "$4.75",
      description: "Slow-steeped for 18 hours, delivering smooth, rich flavors",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=300&fit=crop&q=80",
      popular: false,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Heavenly Cappuccino",
      category: "espresso",
      price: "$4.75",
      description: "Perfect balance of espresso, steamed milk, and velvety foam",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop&q=80",
      popular: false,
      rating: 4.8,
    },
    {
      id: 5,
      name: "Miracle Mocha",
      category: "specialty",
      price: "$5.75",
      description: "Rich chocolate meets divine espresso with whipped cream",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80",
      popular: true,
      rating: 4.9,
    },
    {
      id: 6,
      name: "Iced Divine",
      category: "cold",
      price: "$5.00",
      description: "Our signature espresso served over ice with a touch of cream",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop&q=80",
      popular: false,
      rating: 4.6,
    },
    {
      id: 7,
      name: "Sacred Croissant",
      category: "pastries",
      price: "$3.50",
      description: "Buttery, flaky pastry baked fresh daily",
      image: "https://images.unsplash.com/photo-1555507036-ab794f4afe5a?w=300&h=300&fit=crop&q=80",
      popular: false,
      rating: 4.5,
    },
    {
      id: 8,
      name: "Divine Muffin",
      category: "pastries",
      price: "$4.25",
      description: "Blueberry or chocolate chip, made with organic ingredients",
      image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300&h=300&fit=crop&q=80",
      popular: true,
      rating: 4.7,
    },
    {
      id: 9,
      name: "Blessed Bagel",
      category: "food",
      price: "$6.50",
      description: "Everything bagel with cream cheese and smoked salmon",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop&q=80",
      popular: false,
      rating: 4.6,
    },
    {
      id: 10,
      name: "Sacred Sandwich",
      category: "food",
      price: "$8.75",
      description: "Grilled chicken, avocado, and fresh greens on artisan bread",
      image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=300&fit=crop&q=80",
      popular: true,
      rating: 4.8,
    },
  ]

  const filteredItems =
    activeCategory === "all" ? menuItems : menuItems.filter((item) => item.category === activeCategory)

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
                    item.href === "/menu" ? "text-amber-400" : ""
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-amber-400"
                    initial={{ width: item.href === "/menu" ? "100%" : "0%" }}
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
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=600&fit=crop&q=80"
          alt="Divine Brew Menu"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
         
        <motion.h1
            className="relative text-5xl md:text-7xl  font-serif font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-700 to-amber-400 dark:from-amber-200 dark:via-amber-400  dark:to-amber-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Divine Menu
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Discover our carefully curated collection of divine coffee experiences and artisanal treats
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <AnimatedSection className="py-8 px-6 bg-stone-200/50 dark:bg-stone-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-amber-400 text-amber-900"
                    : "bg-stone-300/50 text-stone-700 hover:bg-stone-200/50 dark:bg-stone-700/50 dark:text-stone-300 dark:hover:bg-stone-600/50"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Menu Items */}
      <AnimatedSection className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-stone-100/80 dark:bg-stone-900/80 border-amber-500/20 overflow-hidden group hover:border-amber-400/40 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Badge className="bg-amber-400 text-amber-900 font-bold">{item.price}</Badge>
                      {item.popular && <Badge className="bg-red-500 text-white">Popular</Badge>}
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <span className="text-amber-400 font-medium">{item.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col">
                    <h3 className="text-xl font-serif font-bold text-amber-400 mb-2">{item.name}</h3>
                    <p className="text-stone-600 dark:text-stone-300 mb-4">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Special Offers */}
      <AnimatedSection className="py-20 px-6 bg-stone-200/50 dark:bg-stone-800/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-amber-400 mb-4">Divine Offers</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300">Special deals blessed just for you</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-amber-400/10 to-amber-600/10 border-amber-400/30 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-serif font-bold text-amber-400 mb-4">Morning Blessing</h3>
                <p className="text-stone-600 dark:text-stone-300 mb-4">
                  Get any espresso drink + pastry for just $7.50 before 10 AM
                </p>
                <Badge className="bg-amber-400 text-amber-900">Save $2.25</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-amber-400/10 to-amber-600/10 border-amber-400/30 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-serif font-bold text-amber-400 mb-4">Sacred Loyalty</h3>
                <p className="text-stone-600 dark:text-stone-300 mb-4">
                  Buy 9 drinks, get the 10th free with our Divine Rewards program
                </p>
                <Badge className="bg-amber-400 text-amber-900">Free Drink</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      <ThemeToggle />
      <ScrollToTopButton />
    </div>
  )
}
