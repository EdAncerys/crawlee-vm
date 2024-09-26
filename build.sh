# add permisions to execute: chmod +x build.sh

echo "✨ Starting new build..."
echo "🚫 Clearing existing build..."
rm -rf dist
echo "🚫 Removing node_modules..."
rm -rf node_modules
echo "Checking for git updates..."
git pull
echo "Installing yarn modules..."
yarn install
echo "Building app..."
yarn run build:tsc
echo "Restarting server..."
pm2 restart all