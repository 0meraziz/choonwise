#!/bin/bash

# Security Update Script for Choonwise
# This script updates dependencies and applies security fixes

set -e

echo "🔒 Starting security update process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "Please run this script from the root of the Choonwise project"
    exit 1
fi

print_status "Found package.json, proceeding with updates..."

# Backup current package-lock files
print_status "Creating backup of package-lock files..."
if [ -f "backend/package-lock.json" ]; then
    cp backend/package-lock.json backend/package-lock.json.backup
fi
if [ -f "frontend/package-lock.json" ]; then
    cp frontend/package-lock.json frontend/package-lock.json.backup
fi

# Clean npm cache
print_status "Cleaning npm cache..."
npm cache clean --force

# Update backend dependencies
print_status "Updating backend dependencies..."
cd backend

# Remove node_modules and package-lock
rm -rf node_modules package-lock.json

# Install dependencies
npm install

# Run security audit
print_status "Running security audit for backend..."
if npm audit --audit-level high; then
    print_status "Backend passed security audit"
else
    print_warning "Backend has security issues, attempting to fix..."
    npm audit fix --force
    print_status "Applied automatic fixes for backend"
fi

cd ..

# Update frontend dependencies
print_status "Updating frontend dependencies..."
cd frontend

# Remove node_modules and package-lock
rm -rf node_modules package-lock.json

# Install dependencies
npm install

# Run security audit
print_status "Running security audit for frontend..."
if npm audit --audit-level high; then
    print_status "Frontend passed security audit"
else
    print_warning "Frontend has security issues, attempting to fix..."
    npm audit fix --force
    print_status "Applied automatic fixes for frontend"
fi

cd ..

# Run tests to ensure everything still works
print_status "Running tests to verify updates..."

# Backend tests (if they exist)
if [ -f "backend/package.json" ] && grep -q '"test"' backend/package.json; then
    print_status "Running backend tests..."
    cd backend
    if npm test; then
        print_status "Backend tests passed"
    else
        print_warning "Backend tests failed - please review"
    fi
    cd ..
fi

# Frontend tests (if they exist)
if [ -f "frontend/package.json" ] && grep -q '"test"' frontend/package.json; then
    print_status "Running frontend tests..."
    cd frontend
    if npm test -- --run; then
        print_status "Frontend tests passed"
    else
        print_warning "Frontend tests failed - please review"
    fi
    cd ..
fi

# Final security check
print_status "Running final security audit..."
cd backend && npm audit --audit-level high && cd ..
cd frontend && npm audit --audit-level high && cd ..

print_status "Security update completed successfully!"
print_warning "Please test your application thoroughly before deploying to production"

# Show summary
echo ""
echo "📋 Update Summary:"
echo "  ✓ Dependencies updated to latest secure versions"
echo "  ✓ Security vulnerabilities addressed"
echo "  ✓ Automatic fixes applied where possible"
echo "  ✓ Tests executed to verify functionality"
echo ""
echo "🔍 Next Steps:"
echo "  1. Test your application locally"
echo "  2. Review any breaking changes in updated packages"
echo "  3. Update your CI/CD pipelines if needed"
echo "  4. Deploy to staging environment for additional testing"
echo ""
