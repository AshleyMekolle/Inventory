import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Package, User, Mail, Lock, Briefcase } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import './signup.css'

export default function SignupPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Implement signup logic
    setTimeout(() => setIsSubmitting(false), 2000) // Simulating API call
  }

  return (
    <div className="signup-page">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="signup-card">
          <CardHeader>
            <CardTitle className="signup-title">
              <Package className="icon" />
              Join StockMate
            </CardTitle>
            <CardDescription>Start managing your inventory like a pro!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <Label htmlFor="name">Full Name</Label>
                <div className="input-wrapper">
                  <User className="input-icon" />
                  <Input id="name" placeholder="John Doe" required />
                </div>
              </div>
              <div className="form-group">
                <Label htmlFor="email">Email</Label>
                <div className="input-wrapper">
                  <Mail className="input-icon" />
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <Label htmlFor="password">Password</Label>
                <div className="input-wrapper">
                  <Lock className="input-icon" />
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>
              </div>
              <div className="form-group">
                <Label htmlFor="company">Company Name</Label>
                <div className="input-wrapper">
                  <Briefcase className="input-icon" />
                  <Input id="company" placeholder="Acme Inc." required />
                </div>
              </div>
              <Button className="submit-button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Creating Account...' : 'Sign Up'}
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="login-link">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}