# add permisions to execute: chmod +x build.sh

echo "Clearing existing build...."
rm -rf build.old
mv build build.old
echo "Removing node_modules..."
rm -rf node_modules
echo "Installing npm modules..."
yarn
echo "Building Frontity..."
yarn build
echo "\nRestarting server..."
pm2 restart all