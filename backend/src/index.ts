import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());

let count: number = 0;

app.get("/counter", (req: Request, res: Response) => {
  res.json({ count });
});

app.post("/counter/increment", (req: Request, res: Response) => {
  count++;
  res.json({ count });
});

app.post("/counter/decrement", (req: Request, res: Response) => {
  count--;
  res.json({ count });
});

app.listen(3000, () => console.log("Server running on port 3000"));
