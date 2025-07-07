// Security configuration for Express.js backend
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { Request, Response, NextFunction } from 'express'

// Rate limiting configuration
export const createRateLimit = (windowMs: number = 15 * 60 * 1000, max: number = 100) => {
  return rateLimit({
    windowMs, // 15 minutes by default
    max, // limit each IP to 100 requests per windowMs
    message: {
      error: 'Too many requests from this IP, please try again later.',
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
}

// API-specific rate limits
export const authRateLimit = createRateLimit(15 * 60 * 1000, 5) // 5 attempts per 15 minutes for auth
export const apiRateLimit = createRateLimit(15 * 60 * 1000, 100) // 100 requests per 15 minutes for API
export const bandcampRateLimit = createRateLimit(60 * 1000, 10) // 10 requests per minute for Bandcamp scraping

// Helmet security configuration
export const helmetConfig = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      scriptSrc: ["'self'"],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'https:'],
      connectSrc: ["'self'", 'https://bandcamp.com'],
    },
  },
  crossOriginEmbedderPolicy: false, // Disable for development, enable in production
})

// Request validation middleware
export const validateJsonPayload = (req: Request, res: Response, next: NextFunction) => {
  if (req.is('application/json')) {
    try {
      // Check if body was parsed correctly
      if (req.body === undefined) {
        return res.status(400).json({ error: 'Invalid JSON payload' })
      }
    } catch (error) {
      return res.status(400).json({ error: 'Invalid JSON payload' })
    }
  }
  next()
}

// Security headers middleware
export const securityHeaders = (req: Request, res: Response, next: NextFunction) => {
  // Remove Express signature
  res.removeHeader('X-Powered-By')

  // Add additional security headers
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('X-XSS-Protection', '1; mode=block')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')

  next()
}
