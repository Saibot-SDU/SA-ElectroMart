"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dummyData_1 = require("./dummyData");
const app = (0, express_1.default)();
const port = 3001;
const cors = require('cors');
app.use(cors());
app.use(express_1.default.json());
app.get("/get-product-recommendations", (_, res) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
        const shuffledProducts = dummyData_1.recommendedProducts
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        const randomProducts = shuffledProducts.slice(0, 5);
        return res.json(randomProducts);
    }
    return res.status(500).send('Internal Server Error');
});
app.get("/get-products-by-category", (req, res) => {
    const products = dummyData_1.recommendedProducts.filter((product) => {
        if (product.productType == req.query.productType)
            return product;
    });
    return res.json(products);
});
app.get("/unfinished-feature", (_, res) => {
    // Oh no, this feature is not ready for production!
    return res.status(500).send('Internal Server Error');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
