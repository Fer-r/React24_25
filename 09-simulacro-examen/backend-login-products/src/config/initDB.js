import { Product } from "../models/Product.js";
import { User } from "../models/User.js";
import { initialProducts } from "./initialProducts.js";

export const initializeDB = async () => {
  try {
    // Check and initialize default user
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      const defaultUser = new User({
        name: "Admin User",
        email: "admin@example.com",
        password: "admin123"
      });
      await defaultUser.save();
      console.log("Default user created:");
      console.log("Email: admin@example.com");
      console.log("Password: admin123");
    }
    
    // Check and initialize products
    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      await Product.insertMany(initialProducts);
      console.log("Database initialized with sample products");
    } else {
      console.log("Database already contains products, skipping initialization");
    }
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};