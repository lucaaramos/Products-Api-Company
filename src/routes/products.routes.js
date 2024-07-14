// products.routes.js

import { Router } from 'express';
import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  getProductsByPriceRange,
  getProductsByRating,
  getProductsByBrand,
  getProductsBySearchTerm,
  getProductBySlug,
  getRelatedProducts
} from '../controllers/products.controller.js';

const router = Router();

router.get('/', getProduct);
router.post('/', createProduct);
router.put('/:productId', updateProduct);
router.delete('/:productId', deleteProduct);
router.get('/category/:category', getProductsByCategory);
router.get('/price-range/:minPrice/:maxPrice', getProductsByPriceRange);
router.get('/rating/:minRating/:maxRating', getProductsByRating);
router.get('/brand/:brand', getProductsByBrand);
router.get('/search/:searchTerm', getProductsBySearchTerm);
router.get('/slug/:slug', getProductBySlug);
router.get('/related/:productId', getRelatedProducts);

export default router;
