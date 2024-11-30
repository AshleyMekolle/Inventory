import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, Mail, Lock, ArrowRight } from 'lucide-react';
import {Button} from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';
import './login.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        navigate('/');
      } else {
        // Handle login error
        setIsSubmitting(false);
        console.error('Login failed');
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-page">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="login-card">
          <CardHeader>
            <CardTitle className="login-title">
              <Package className="icon" />
              Welcome Back!
            </CardTitle>
            <CardDescription>Log in to your StockMate account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <Label htmlFor="email">Email</Label>
                <div className="input-wrapper">
                  <Mail className="input-icon" />
                  <Input id="email" type="email" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <Label htmlFor="password">Password</Label>
                <div className="input-wrapper">
                  <Lock className="input-icon" />
                  <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
                </div>
              </div>
              <Button className="submit-button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Logging In...' : 'Log In'}
                <ArrowRight className="button-icon" />
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <div className="footer-links">
              <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
              <p className="signup-link">
                New to StockMate? <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoginPage;