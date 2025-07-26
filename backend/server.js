const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const chatRoutes = require('./routes/chatRoutes');
const faqRoutes = require('./routes/faqRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const errorHandler = require('./middleware/errorHandler');

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

const app = express();
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('TibaChat backend is running!');
});

// API routes
app.use('/api', chatRoutes);
app.use('/api', faqRoutes);
app.use('/api', categoryRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 