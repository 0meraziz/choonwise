#!/bin/bash

# Start both frontend and backend development servers

echo "🚀 Starting Choonwise development servers..."

# Start backend in background
echo "Starting backend server..."
cd backend && npm run dev &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 2

# Start frontend in background
echo "Starting frontend server..."
cd ../frontend && npm start &
FRONTEND_PID=$!

echo "✅ Servers started!"
echo "Frontend: http://localhost:3000"
echo "Backend: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for either process to exit
wait $BACKEND_PID $FRONTEND_PID
