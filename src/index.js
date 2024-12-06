import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { router as orderRouter } from './routes/orders.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { apiKeyAuth } from './middleware/auth.js';

const app = express();
const PORT = process.env.PORT || 3000;
const swaggerDocument = YAML.load('./api.yaml');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API Key Authentication
app.use('/api', apiKeyAuth);

// Routes
app.use('/api/orders', orderRouter);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
});