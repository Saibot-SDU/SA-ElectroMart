import express, { Request, Response } from 'express';
import { recommendedProducts } from './dummyData';

const app = express();
const port = 3000;

app.use(express.json());

app.get("/get-product-recommendations", (_: Request, res: Response) => {
    const randomNumber = Math.random();

    if (randomNumber > 0.5) {
        res.json(recommendedProducts);
    }

    return res.status(500).send('Internal Server Error');
});

app.get("/unfinished-feature", (_: Request, res: Response) => {
    // Oh no, this feature is not ready for production!
    return res.status(500).send('Internal Server Error');
});
  
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
