#!/usr/bin/env node

/**
 * Vercel Deployment Script
 * Automates the deployment process: fetch, build, and deploy
 */

const { execSync } = require('child_process');
const { existsSync } = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function exec(command, options = {}) {
  try {
    return execSync(command, { stdio: 'inherit', ...options });
  } catch (error) {
    log(`❌ Error executing: ${command}`, 'red');
    process.exit(1);
  }
}

async function main() {
  log('\n🚀 Starting Vercel Deployment Process...\n', 'blue');

  // Step 1: Check if we're in a git repository
  try {
    execSync('git rev-parse --git-dir', { stdio: 'ignore' });
  } catch {
    log('❌ Not a git repository. Please run this from the project root.', 'red');
    process.exit(1);
  }

  // Step 2: Fetch latest
  log('📥 Step 1: Fetching latest changes from origin/main...', 'blue');
  exec('git fetch origin main');

  // Step 3: Check for uncommitted changes
  let stashed = false;
  try {
    execSync('git diff-index --quiet HEAD --', { stdio: 'ignore' });
  } catch {
    log('⚠️  Warning: You have uncommitted changes. Stashing them...', 'yellow');
    exec('git stash');
    stashed = true;
  }

  // Step 4: Update to latest main
  log('🔄 Step 2: Updating to latest main...', 'blue');
  const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim();

  if (currentBranch !== 'main') {
    log('Switching to main branch...', 'yellow');
    exec('git checkout main');
  }

  try {
    exec('git merge origin/main --ff-only', { stdio: 'ignore' });
  } catch {
    log('⚠️  Fast-forward merge not possible. Pulling changes...', 'yellow');
    exec('git pull origin main');
  }

  // Step 5: Install dependencies
  log('📦 Step 3: Installing dependencies...', 'blue');
  if (existsSync('package.json')) {
    if (existsSync('yarn.lock')) {
      exec('yarn install --frozen-lockfile');
    } else {
      exec('npm install');
    }
  }

  // Step 6: Test build
  log('🔨 Step 4: Testing build...', 'blue');
  if (existsSync('package.json')) {
    const packageJson = require(path.join(process.cwd(), 'package.json'));
    if (packageJson.scripts && packageJson.scripts.build) {
      if (existsSync('yarn.lock')) {
        exec('yarn build');
      } else {
        exec('npm run build');
      }
    }
  }

  // Step 7: Check Vercel CLI
  log('🚀 Step 5: Deploying to Vercel...', 'blue');
  try {
    execSync('vercel --version', { stdio: 'ignore' });
  } catch {
    log('⚠️  Vercel CLI not found. Installing globally...', 'yellow');
    exec('npm install -g vercel');
  }

  // Step 8: Deploy
  log('Deploying to production...', 'blue');
  exec('vercel --prod');

  // Step 9: Restore stashed changes
  if (stashed) {
    log('📦 Restoring stashed changes...', 'yellow');
    try {
      execSync('git stash pop', { stdio: 'ignore' });
    } catch {
      // Ignore stash conflicts
    }
  }

  log('\n✅ Deployment complete!', 'green');
  log('✨ Check your Vercel dashboard for deployment status.\n', 'green');
}

main().catch((error) => {
  log(`\n❌ Deployment failed: ${error.message}`, 'red');
  process.exit(1);
});

