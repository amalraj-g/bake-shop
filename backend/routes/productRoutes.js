import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";

import checkObjectId from '../middleware/checkObjectId.js';
//import products from './data/products.js';
import Product from '../models/productModel.js';
import { protect, admin } from "../middleware/authMiddleware.js";
/*import {
  getProducts,
  getProductById} from "../controllers/productController.js";*/


const router = express.Router();


router.route("/").get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts)
router
  .route("/:id")
  .get(checkObjectId, getProductById)
  .put(protect, admin, checkObjectId, updateProduct)
  .delete(protect, admin, checkObjectId, deleteProduct);
router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);

export default router;