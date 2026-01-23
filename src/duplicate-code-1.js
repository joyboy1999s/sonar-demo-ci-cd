// Sample file with DUPLICATE CODE (Part 1)

class ProductService {
    constructor() {
        this.products = [];
    }

    // Duplicate: Same logic as in duplicate-code-2.js
    validateProduct(product) {
        if (!product) {
            return { valid: false, error: 'Product is required' };
        }
        if (!product.name || product.name.trim() === '') {
            return { valid: false, error: 'Product name is required' };
        }
        if (!product.price || product.price <= 0) {
            return { valid: false, error: 'Product price must be greater than 0' };
        }
        if (!product.category || product.category.trim() === '') {
            return { valid: false, error: 'Product category is required' };
        }
        if (!product.stock || product.stock < 0) {
            return { valid: false, error: 'Product stock cannot be negative' };
        }
        return { valid: true };
    }

    // Duplicate: Same logic repeated within the same file
    calculateDiscount(price, discountPercent) {
        if (discountPercent < 0 || discountPercent > 100) {
            throw new Error('Invalid discount percentage');
        }
        const discountAmount = (price * discountPercent) / 100;
        const finalPrice = price - discountAmount;
        return {
            originalPrice: price,
            discount: discountAmount,
            finalPrice: finalPrice
        };
    }

    // Duplicate: Same calculation logic
    calculateBulkDiscount(price, discountPercent) {
        if (discountPercent < 0 || discountPercent > 100) {
            throw new Error('Invalid discount percentage');
        }
        const discountAmount = (price * discountPercent) / 100;
        const finalPrice = price - discountAmount;
        return {
            originalPrice: price,
            discount: discountAmount,
            finalPrice: finalPrice
        };
    }

    // Duplicate: Same filtering logic
    getActiveProducts() {
        const result = [];
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].active === true && this.products[i].stock > 0) {
                result.push(this.products[i]);
            }
        }
        return result;
    }

    // Duplicate: Same filtering logic with different condition
    getInStockProducts() {
        const result = [];
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].active === true && this.products[i].stock > 0) {
                result.push(this.products[i]);
            }
        }
        return result;
    }
}

module.exports = ProductService;
