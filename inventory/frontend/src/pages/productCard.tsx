import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import '../styles/productCard.css'

interface ProductCardProps {
  name: string
  category: string
  price: number
  stock: number
  image: string
}

export default function ProductCard({ name, category, price, stock, image }: ProductCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="product-card">
        <motion.div
          className="product-image"
          style={{ backgroundImage: `url(${image})` }}
          whileHover={{ scale: 1.1 }}
        />
        <CardContent className="product-content">
          <h3 className="product-name">{name}</h3>
          <Badge variant="secondary" className="product-category">{category}</Badge>
          <p className="product-price">${price.toFixed(2)}</p>
          <p className="product-stock">Stock: {stock}</p>
        </CardContent>
        <CardFooter className="product-footer">
          <Button className="add-to-cart-button">Add to Cart</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}