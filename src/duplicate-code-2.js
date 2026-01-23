// Sample file with DUPLICATE CODE (Part 2)

class OrderService {
    constructor() {
        this.orders = [];
    }

    // Duplicate: Same validation logic as in duplicate-code-1.js
    validateProduct(product) {
        if (!product) {
            return { valid: false, error: 'Product is required' };
        }
        if (!product.name || product.name.trim() == '') {
            return { valid: false, error: 'Product name is required' };
        }
        if (!product.price || product.price <= 0) {
            return { valid: false, error: 'Product price must be greater than 0' };
        }
        if (!product.category || product.category.trim() == '') {
            return { valid: false, error: 'Product category is required' };
        }
        if (!product.stock || product.stock < 0) {
            return { valid: false, error: 'Product stock cannot be negative' };
        }
        return { valid: true };
    }

    // Duplicate: Similar calculation pattern
    calculateTax(amount, taxPercent) {
        if (taxPercent < 0 || taxPercent > 100) {
            throw new Error('Invalid tax percentage');
        }
        const taxAmount = (amount * taxPercent) / 100;
        const totalAmount = amount + taxAmount;
        return {
            baseAmount: amount,
            tax: taxAmount,
            totalAmount: totalAmount
        };
    }

    // Duplicate: Same order processing logic
    processOrder(order) {
        if (!order?.items?.length) {
            return { success: false, error: 'Order has no items' };
        }

        let totalPrice = 0;
        for (const item of order.items) {
            if (!item.price || !item.quantity) {
                return { success: false, error: 'Invalid item in order' };
            }
            totalPrice += item.price * item.quantity;
        }

        return {
            success: true,
            orderId: order.id,
            total: totalPrice
        };
    }

    // Duplicate: Same order processing logic with minor variation
    calculateOrderTotal(order) {
        return this.processOrder(order);
    }
}

module.exports = OrderService;
