import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  quantity: Number
}
);

const Product_Schema = mongoose.model('Product', productSchema);

export default Product_Schema;