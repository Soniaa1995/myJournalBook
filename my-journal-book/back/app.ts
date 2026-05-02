import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import bookRoutes from "./routes/books";

const app = express();
const PORT = 3000;

//enable cors
app.use(cors());
//enable json parser
app.use(express.json());

// use the route
app.use("/api/books", bookRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Journal Book");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is successfuly listening at port", PORT);
  } else {
    console.error("An error occurred: ", error);
  }
});

main().catch((error) => console.error(error));

async function main(): Promise<void> {
  //prepare string
  const conectionString = "mongodb://localhost:27017/book-model";
  await mongoose.connect(conectionString);
  mongoose.set("strictQuery", true);
}
