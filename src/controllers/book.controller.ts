import { Request, Response } from "express";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(__dirname, "../models/db.json");
interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

export const getBooks = async (req: Request, res: Response) => {
  //   Query tới db.json và trả ra toàn bộ kết quả
  try {
    const content = await fs.readFile(filePath, "utf-8");
    const parseContent = JSON.parse(content);
    res.json({
      message: "Get books success!",
      status: 200,
      data: parseContent,
    });
  } catch (error) {
    res.status(500).json({ messsage: "lỗi đọc file json" });
  }
};

export const getBookByID = async (req: Request, res: Response) => {
  //   Query tới db.json  sau đó tìm book có id trong ddb.json
  try {
    const bookID = req.params.id;
    console.log("bookID: ", bookID);
    const content = await fs.readFile(filePath, "utf-8");
    console.log("content: ", content);
  } catch (error) {
    res.status(500).json({ messsage: "lỗi đọc file json" });
  }
  // fs.readFile(filePath, "utf-8", (err: Error, data: string) => {
  //   if (err) {
  //     console.log("Đang có lỗi:", err);
  //     return res.status(500).json({ messsage: "lỗi đọc file json" });
  //   }
  //   let findBook: Book[] = [];
  //   if (data) {
  //     findBook = JSON.parse(data);
  //   }
  //   const book = findBook.find((item) => item.id === Number(bookID));
  //   fs.writeFile(filePath, JSON.stringify(findBook, null, 2), (err: Error) => {
  //     if (err) {
  //       console.log("Đang có lỗi:", err);
  //       return res.status(500).json({ messsage: "lỗi đọc file json" });
  //     } else {
  //       if (!book) {
  //         return res.status(404).json({ message: "Sách không tồn tại" });
  //       }
  //     }
  //     res.status(201).json({ message: "GETBOOKID successfully" });
  //   });
  // });
};

export const createBook = (req: Request, res: Response) => {
  console.log("createBook");
  //   tạo mới sách trong db
  const newBook: Book = req.body;
  // fs.readFile(filePath, "utf-8", (err: Error, data: string) => {
  //   if (err) {
  //     console.log("Đang có lỗi:", err);
  //     return res.status(500).json({ messsage: "lỗi đọc file json1" });
  //   }
  //   let books: Book[] = [];
  //   if (data) {
  //     books = JSON.parse(data);
  //   }
  //   books.push(newBook);
  //   fs.writeFile(filePath, JSON.stringify(books, null, 2), (err: Error) => {
  //     if (err) {
  //       console.log("error", err);
  //       return res.status(500).json({ message: "Lỗi ghi file JSON" });
  //     }
  //     res
  //       .status(201)
  //       .json({ message: "User created successfully", books: newBook });
  //   });
  // });
};

export const deleteBook = (req: Request, res: Response) => {
  // console.log("deleteBook");
  const bookID = req.query;
  // fs.readFile(filePath, "utf-8", (err: Error, data: string) => {
  //   if (err) {
  //     console.log("Đang có lỗi:", err);
  //     return res.status(500).json({ messsage: "lỗi đọc file json" });
  //   }
  //   let books: Book[] = [];
  //   const findBook = books.findIndex(
  //     (bookItem) => bookItem.id === Number(bookID.id)
  //   );
  //   books = books.filter((bookItemID) => bookItemID.id !== findBook);
  //   fs.writeFile(filePath, JSON.stringify(books, null, 2), (err: Error) => {
  //     if (err) {
  //       console.log("Đang có lỗi:", err);
  //       return res.status(500).json({ messsage: "lỗi đọc file json" });
  //     }
  //     res.status(201).json({ message: "User update successfully" });
  //   });
  // });

  //   Query tới db.json  tim book theo id và xoá nó ra khỏi db.json
};

export const updateBook = (req: Request, res: Response) => {
  // console.log("updateBook");
  //   Query tới db.json  tim book theo id và update nó ra khỏi db.json
  const newBook = req.body;
  // fs.readFile(filePath, "utf-8", (err: Error, data: string) => {
  //   if (err) {
  //     console.log("Đang có lỗi:", err);
  //     return res.status(500).json({ messsage: "lỗi đọc file json" });
  //   }
  //   let updateBook: Book[] = [];
  //   if (data) {
  //     updateBook = JSON.parse(data);
  //   }
  //   const checkUpdate = updateBook.findIndex(
  //     (item) => item.id === Number(newBook.id)
  //   );
  //   if (checkUpdate !== -1) {
  //     updateBook[checkUpdate] = { ...newBook };
  //   }
  //   fs.writeFile(filePath, JSON.stringify(updateBook, null, 2), (err) => {
  //     if (err) {
  //       console.log("error", err);
  //       return res.status(500).json({ message: "Lỗi ghi file JSON" });
  //     }
  //     res.status(201).json({ message: "Book update successfully" });
  //   });
  // });
};
