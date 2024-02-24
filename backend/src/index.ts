import express, { Request, Response } from 'express';
import { PlayStation } from './models/PlayStation';
import { Laptop } from './models/Laptop';
import { Phone } from './models/Phone';
import { SSD } from './models/SSD';

const app = express();
const port = 3000;

const recommendedProducts: (Laptop | Phone | SSD | PlayStation)[] = [
    
];

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});
  
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});