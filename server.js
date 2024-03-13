import express from 'express';
import routes from './routes/index';

const app = express();
app.use(express.json());

// Use environment variable for port or default to 5000
const port = process.env.PORT || 5000;

// Mount all routes from index.js
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});