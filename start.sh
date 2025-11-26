#!/bin/bash

echo "🚀 Starting Tumblr Clone..."
echo ""
echo "📦 Installing dependencies (if needed)..."
npm install

echo ""
echo "🔧 Starting servers..."
echo "   - Frontend: http://localhost:3000"
echo "   - Backend:  http://localhost:3001"
echo ""
echo "🔑 Demo Credentials:"
echo "   Username: demo"
echo "   Password: demo123"
echo ""
echo "Press Ctrl+C to stop the servers"
echo ""

npm run dev

