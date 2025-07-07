#!/bin/bash

# Development setup script for Choonwise

echo "🚀 Setting up Choonwise development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL is not installed. Please install PostgreSQL first."
    exit 1
fi

echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

echo "🗄️ Setting up database..."
cd backend

# Copy environment file if it doesn't exist
if [ ! -f .env ]; then
    cp .env.example .env
    echo "⚠️  Please update the .env file with your database credentials"
fi

# Generate Prisma client
npm run db:generate

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update backend/.env with your database credentials"
echo "2. Run 'npm run db:migrate' in the backend directory"
echo "3. Start the development servers:"
echo "   - Backend: cd backend && npm run dev"
echo "   - Frontend: cd frontend && npm start"
