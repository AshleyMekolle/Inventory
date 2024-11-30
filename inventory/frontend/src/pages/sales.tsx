import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import '../styles/sales.css'

const sampleSales = [
  { id: 1, product: "Laptop Pro", quantity: 2, total: 2599.98, date: "2023-06-01" },
  { id: 2, product: "Wireless Mouse", quantity: 5, total: 149.95, date: "2023-06-02" },
  { id: 3, product: "4K Monitor", quantity: 1, total: 499.99, date: "2023-06-03" },
  { id: 4, product: "Ergonomic Keyboard", quantity: 3, total: 239.97, date: "2023-06-04" },
  { id: 5, product: "Noise-Canceling Headphones", quantity: 2, total: 399.98, date: "2023-06-05" },
]

export default function SalesPage() {
  const [sales, setSales] = useState(sampleSales)
  const [newSale, setNewSale] = useState({ product: '', quantity: 1, total: 0 })

  const handleAddSale = (e: React.FormEvent) => {
    e.preventDefault()
    setSales([...sales, { id: sales.length + 1, ...newSale, date: new Date().toISOString().split('T')[0] }])
    setNewSale({ product: '', quantity: 1, total: 0 })
  }

  return (
    <div className="sales-page">
      <motion.h1 
        className="sales-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Sales Management
      </motion.h1>

      <Card className="add-sale-card">
        <CardHeader>
          <CardTitle>Add New Sale</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddSale} className="add-sale-form">
            <div className="form-group">
              <Label htmlFor="product">Product</Label>
              <Select 
                onValueChange={(value) => setNewSale({...newSale, product: value})}
                value={newSale.product}
              >
                <SelectTrigger id="product">
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Laptop Pro">Laptop Pro</SelectItem>
                  <SelectItem value="Wireless Mouse">Wireless Mouse</SelectItem>
                  <SelectItem value="4K Monitor">4K Monitor</SelectItem>
                  <SelectItem value="Ergonomic Keyboard">Ergonomic Keyboard</SelectItem>
                  <SelectItem value="Noise-Canceling Headphones">Noise-Canceling Headphones</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="form-group">
              <Label htmlFor="quantity">Quantity</Label>
              <Input 
                type="number" 
                id="quantity" 
                value={newSale.quantity} 
                onChange={(e) => setNewSale({...newSale, quantity: parseInt(e.target.value)})}
                min="1"
              />
            </div>
            <div className="form-group">
              <Label htmlFor="total">Total</Label>
              <Input 
                type="number" 
                id="total" 
                value={newSale.total} 
                onChange={(e) => setNewSale({...newSale, total: parseFloat(e.target.value)})}
                min="0"
                step="0.01"
              />
            </div>
            <Button type="submit">Add Sale</Button>
          </form>
        </CardContent>
      </Card>

      <Card className="sales-list-card">
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sales.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell>{sale.product}</TableCell>
                  <TableCell>{sale.quantity}</TableCell>
                  <TableCell>${sale.total.toFixed(2)}</TableCell>
                  <TableCell>{sale.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}