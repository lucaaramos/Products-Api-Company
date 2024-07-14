  import express from 'express';
  import morgan from 'morgan'
  import productsRoutes from './routes/products.routes.js'

  const app = express();

  app.use(morgan('dev'))

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.use("/products",productsRoutes)

  export default app;
