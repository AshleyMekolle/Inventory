import React from 'react'
import { motion } from 'framer-motion'
import ProductCard from './productCard'
import '../styles/products.css'

const products = [
  { id: 1, name: "Laptop Pro", category: "Electronics", price: 1299.99, stock: 50, image: "/placeholder.svg?height=200&width=300" },
  { id: 2, name: "Wireless Mouse", category: "Accessories", price: 29.99, stock: 100, image: "/placeholder.svg?height=200&width=300" },
  { id: 3, name: "4K Monitor", category: "Electronics", price: 499.99, stock: 30, image: "/placeholder.svg?height=200&width=300" },
  { id: 4, name: "Ergonomic Keyboard", category: "Accessories", price: 79.99, stock: 75, image: "/placeholder.svg?height=200&width=300" },
  { id: 5, name: "Noise-Canceling Headphones", category: "Audio", price: 199.99, stock: 40, image: "/placeholder.svg?height=200&width=300" },
  { id: 6, name: "Wireless Charger", category: "Accessories", price: 39.99, stock: 60, image: "/placeholder.svg?height=200&width=300" },
]

export default function ProductsPage() {
  return (
    <div className="products-page">
      <motion.h1 
        className="products-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Our Amazing Products
      </motion.h1>
      <motion.div 
        className="products-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, staggerChildren: 0.1 }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}