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
        res.json(dummyData_1.recommendedProducts);
    }
    return res.status(500).send('Internal Server Error');
});
app.get("/unfinished-feature", (_, res) => {
    // Oh no, this feature is not ready for production!
    return res.status(500).send('Internal Server Error');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
