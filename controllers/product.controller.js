import Product from "../models/products.model.js";

// Get All Products
const GetAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            message: "Get All Products Successfully",
            data: products
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Create Product
const CreateProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            message: "Create Product Successfully",
            data: product
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Update Single Data by User ID (Patch behavior)
const UpdateSingleData = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        // Update only the fields that are provided in the request body
        if (req.body.name !== undefined) product.name = req.body.name;
        if (req.body.price !== undefined) product.price = req.body.price;
        if (req.body.description !== undefined) product.description = req.body.description;
        if (req.body.quantity !== undefined) product.quantity = req.body.quantity;

        await product.save();

        res.status(200).json({
            success: true,
            message: "Update Product Successfully",
            data: product
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update Multiple Data by User ID (Put behavior / replacing fields)
const UpdateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        product.name = req.body.name ?? product.name;
        product.price = req.body.price ?? product.price;
        product.description = req.body.description ?? product.description;
        product.quantity = req.body.quantity ?? product.quantity;

        await product.save();

        res.status(200).json({
            success: true,
            message: "Update Product Successfully",
            data: product
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// DELETE User Product by ID
const DeleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({
            success: true,
            message: "Delete Product Successfully"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const ProductController = {
    CreateProduct,
    GetAllProducts,
    UpdateSingleData,
    UpdateProduct,
    DeleteProduct
};