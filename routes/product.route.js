import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";

const router = Router();

// GET ALL PRODUCTS
router.get("/products", ProductController.GetAllProducts);

// CREATE PRODUCT
router.post("/product/create", ProductController.CreateProduct);

// Update Single Data by User ID
router.put("/product/:id", ProductController.UpdateSingleData);

// Update Multiple Data by User ID
router.put("/products/:id", ProductController.UpdateProduct);

// DELETE User Product by ID
router.delete("/product/:id", ProductController.DeleteProduct);

export default router;