"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { ArrowLeft, X, ChevronLeft, ChevronRight, Camera, Coffee, Users, Award } from "lucide-react"
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

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Photos", icon: Camera },
    { id: "interior", name: "Interior", icon: Coffee },
    { id: "coffee", name: "Coffee Art", icon: Coffee },
    { id: "events", name: "Events", icon: Users },
    { id: "awards", name: "Awards", icon: Award },
  ]

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop&q=80",
      alt: "Divine Brew Interior",
      category: "interior",
      title: "Sacred Seating Area",
      description: "Our comfortable seating area with warm lighting",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop&q=80",
      alt: "Latte Art",
      category: "coffee",
      title: "Divine Latte Art",
      description: "Masterful latte art created by our skilled baristas",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=400&fit=crop&q=80",
      alt: "Coffee Tasting Event",
      category: "events",
      title: "Coffee Tasting Evening",
      description: "Monthly coffee tasting events for enthusiasts",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop&q=80",
      alt: "Coffee Bar",
      category: "interior",
      title: "Sacred Coffee Bar",
      description: "Our beautiful coffee bar where magic happens",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop&q=80",
      alt: "Best Coffee Award",
      category: "awards",
      title: "Best Coffee 2023",
      description: "Awarded Best Coffee Shop in the city",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&h=400&fit=crop&q=80",
      alt: "Espresso Shot",
      category: "coffee",
      title: "Perfect Espresso",
      description: "The golden crema of our signature espresso",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop&q=80",
      alt: "Reading Corner",
      category: "interior",
      title: "Quiet Reading Corner",
      description: "Perfect spot for contemplation and reading",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&q=80",
      alt: "Barista Workshop",
      category: "events",
      title: "Barista Workshop",
      description: "Learn the art of coffee making from our experts",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&h=400&fit=crop&q=80",
      alt: "Cold Brew",
      category: "coffee",
      title: "Sacred Cold Brew",
      description: "Our signature cold brew served in style",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop&q=80",
      alt: "Roasting Area",
      category: "interior",
      title: "Roasting Sanctuary",
      description: "Where our beans are transformed into perfection",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&h=400&fit=crop&q=80",
      alt: "Sustainability Award",
      category: "awards",
      title: "Sustainability Champion",
      description: "Recognized for our eco-friendly practices",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop&q=80",
      alt: "Community Gathering",
      category: "events",
      title: "Community Gathering",
      description: "Bringing coffee lovers together",
    },
  ]

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((image) => image.category === activeCategory)

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
      const nextIndex = (currentIndex + 1) % filteredImages.length
      setSelectedImage(filteredImages[nextIndex].id)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
      setSelectedImage(filteredImages[prevIndex].id)
    }
  }

  const selectedImageData = selectedImage ? filteredImages.find((img) => img.id === selectedImage) : null

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
                    item.href === "/gallery" ? "text-amber-400" : ""
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-amber-400"
                    initial={{ width: item.href === "/gallery" ? "100%" : "0%" }}
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
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=600&fit=crop&q=80"
          alt="Divine Brew Gallery"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <motion.h1
            className="relative text-5xl md:text-7xl  font-serif font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-700 to-amber-400 dark:from-amber-200 dark:via-amber-400  dark:to-amber-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Sacred Gallery
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Step into our divine sanctuary through these captured moments of coffee artistry and community
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

      {/* Gallery Grid */}
      <AnimatedSection className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" layout>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openLightbox(image.id)}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-serif font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-stone-200 text-sm">{image.description}</p>
                </div>
                <Badge className="absolute top-4 right-4 bg-amber-400 text-amber-900 capitalize">
                  {image.category}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImageData.src || "/placeholder.svg"}
              alt={selectedImageData.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-stone-900/80 text-white p-2 rounded-full hover:bg-stone-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-stone-900/80 text-white p-2 rounded-full hover:bg-stone-800 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-stone-900/80 text-white p-2 rounded-full hover:bg-stone-800 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-4 right-4 bg-stone-900/80 text-white p-4 rounded-lg">
              <h3 className="font-serif font-bold text-xl mb-2">{selectedImageData.title}</h3>
              <p className="text-stone-200">{selectedImageData.description}</p>
            </div>
          </div>
        </motion.div>
      )}

      <ThemeToggle />
      <ScrollToTopButton />
    </div>
  )
}
