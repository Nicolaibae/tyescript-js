import express from "express";
import {
  createBook,
  deleteBook,
  getBookByID,
  getBooks,
  updateBook,
} from "../controllers/book.controller";

export const router = express.Router();

// lấy toàn bộ sách trong db getAll
router.get("/getBooks", getBooks);
// lấy sách theo ID -> getBookByID
router.get("/getBookByID/:id", getBookByID);
// tạo book -> createBook
router.post("/createBook", createBook);
// xoá books => deleteBook
router.delete("deleteBook/:id", deleteBook);
// update books => updateBook
router.put("updateBook/:id", updateBook);
