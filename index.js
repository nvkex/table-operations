const express = require('express');
const cors = require('cors');

// Route files
const tableRouter = require('./routes/table');
const dbRouter = require('./routes/db');

const app = express();

// Let the system decide port or set it to 3001
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/table', tableRouter);
app.use('/db',dbRouter);


// Listen to PORT
app.listen(PORT, () => {
    console.log('Listening to '+PORT);
})
