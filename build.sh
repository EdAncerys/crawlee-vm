# add permisions to execute: chmod +x build.sh

echo "✨ Starting new build..."
echo "🚫 Clearing existing build..."
rm -rf dist
echo "🚫 Removing lock & build files..."
rm -rf yarn.lock && rm -rf package-lock.json && rm -rf bun.lockb && rm -rf tsconfig.tsbuildinfo
echo "🚫 Removing node_modules..."
rm -rf node_modules
echo "Checking for git updates..."
git pull
echo "Installing modules..."
bun install
echo "Building app..."
bun run build:tsc
echo "Restarting server..."
pm2 restart all