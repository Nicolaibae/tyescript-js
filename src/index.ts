import express from "express";
import { router as routerBook } from "./routers/books.route";
const app = express();
const POST = 3000;
// Chức năng: Parse (phân tích) dữ liệu JSON trong phần body của request
app.use(express.json());
app.use("/api/book", routerBook);
app.listen(POST, () => {
  console.log("Server is running on port 3000");
});
