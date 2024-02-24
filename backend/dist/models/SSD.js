"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSD = void 0;
const ProductType_1 = require("./ProductType");
class SSD {
    constructor(title, imageUrl, basePrice) {
        this.taxRate = 1.25;
        this.discountRate = 0.15;
        this.productType = ProductType_1.ProductType.SSD;
        this.title = title;
        this.imageUrl = imageUrl;
        this.basePrice = basePrice;
    }
    getPrice() {
        return (this.basePrice * (1 - this.discountRate)) * this.taxRate;
    }
}
exports.SSD = SSD;
