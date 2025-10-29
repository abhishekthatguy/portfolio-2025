#!/bin/bash

# Vercel Deployment Script
# This script fetches latest from main, builds, and deploys to Vercel

set -e  # Exit on error

echo "🚀 Starting Vercel Deployment Process..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Fetch latest from origin/main
echo -e "${BLUE}📥 Step 1: Fetching latest changes from origin/main...${NC}"
git fetch origin main

# Check if there are local changes
if ! git diff-index --quiet HEAD --; then
    echo -e "${YELLOW}⚠️  Warning: You have uncommitted changes. Stashing them...${NC}"
    git stash
    STASHED=true
else
    STASHED=false
fi

# Step 2: Merge or checkout main
echo -e "${BLUE}🔄 Step 2: Updating to latest main...${NC}"
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ "$CURRENT_BRANCH" != "main" ]; then
    echo -e "${YELLOW}Switching to main branch...${NC}"
    git checkout main
fi

git merge origin/main --ff-only || {
    echo -e "${YELLOW}⚠️  Fast-forward merge not possible. Pulling changes...${NC}"
    git pull origin main
}

# Step 3: Install dependencies
echo -e "${BLUE}📦 Step 3: Installing dependencies...${NC}"
if [ -f "package.json" ]; then
    echo "Installing Node.js dependencies..."
    yarn install --frozen-lockfile || npm install
fi

# Step 4: Build (optional - Vercel does this automatically, but good for testing)
echo -e "${BLUE}🔨 Step 4: Testing build...${NC}"
yarn build || npm run build

# Step 5: Deploy to Vercel
echo -e "${BLUE}🚀 Step 5: Deploying to Vercel...${NC}"

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}⚠️  Vercel CLI not found. Installing globally...${NC}"
    npm install -g vercel
fi

# Deploy to production
vercel --prod

echo ""
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""

# Restore stashed changes if any
if [ "$STASHED" = true ]; then
    echo -e "${YELLOW}📦 Restoring stashed changes...${NC}"
    git stash pop || true
fi

echo -e "${GREEN}✨ All done! Check your Vercel dashboard for deployment status.${NC}"

