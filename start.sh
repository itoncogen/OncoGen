#!/bin/bash
# Quick Start Guide - OncoGen Next.js App

echo "🚀 OncoGen Site - Quick Start Guide"
echo "===================================="
echo ""

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js nu este instalat. Instalează de la https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js detectat: $(node -v)"
echo ""

# Install dependencies
echo "📦 Instalare dependențe..."
npm install
echo "✅ Dependențe instalate"
echo ""

# Check for .env.local
if [ ! -f .env.local ]; then
    echo "⚠️  Fișierul .env.local lipsește!"
    echo ""
    echo "Creează fișierul .env.local cu următoarele variabile:"
    echo ""
    echo "CONTENTFUL_SPACE_ID=your_space_id"
    echo "CONTENTFUL_ACCESS_TOKEN=your_access_token"
    echo ""
    echo "Vezi CONTENTFUL_GUIDE.md pentru instrucțiuni detaliate."
    echo ""
    read -p "Apasă Enter pentru a continua..."
fi

echo ""
echo "🎉 Gata! Pornind serverul..."
echo ""
echo "Acces local: http://localhost:3000"
echo "Apasă Ctrl+C pentru a opri serverul"
echo ""

# Start dev server
npm run dev
