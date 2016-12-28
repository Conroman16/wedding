# Change permissions on logs
chmod 777 /tmp/pm2* -R

# Install npm packages
echo "Installing npm packages"
npm install

# Start the app
pm2 startOrRestart ecosystem.json --env production
