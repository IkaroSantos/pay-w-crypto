const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Start the Server
app.listen(port, () => {
  console.log(`
    _____                         __   _____                  _        
   |  __ \\                       / /  / ____|                | |       
   | |__) __ _ _   _  __      __/ /  | |     _ __ _   _ _ __ | |_ ___  
   |  ___/ _\` | | | | \\ \\ /\\ / / /   | |    | '__| | | | '_ \\| __/ _ \\ 
   | |  | (_| | |_| |  \\ V  V / /    | |____| |  | |_| | |_) | || (_) |
   |_|   \\__,_|\\__, |   \\_/\\_/_/      \\_____|_|   \\__, | .__/ \\__\\___/ 
                __/ |                              __/ | |             
               |___/                              |___/|_|             
   developed by: Ikaro Sales
   2025
  `);
  console.log(`Server running on http://localhost:${port}`);
});
