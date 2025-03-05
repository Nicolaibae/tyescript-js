import { Request, Response } from "express";
import fs from "fs/promises";
import path from "path";
import { json } from "stream/consumers";

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
    let parseBook: Book[] = []
    if(content){
      parseBook= JSON.parse(content)
    }
    let getId = parseBook.find((item)=> item.id === Number(bookID))
    console.log(getId)
    if(getId){
      res.status(200).json({message: "Lấy thành công id sách là : ",getId})
    }
    else{
      res.status(500).json({ messsage: "Không tìm thấy id sách" });
    }
  } catch (error) {
    res.status(500).json({ messsage: "lỗi đọc file json" });
  }
};

export const createBook = async(req: Request, res: Response) => {
  try {
    const newBook = req.body
    console.log(newBook)
    const getBooks = await fs.readFile(filePath,'utf-8');
    let parseBook: Book[] = []
    if(getBooks){
     parseBook = JSON.parse(getBooks)
    }
    let dataNew = [...parseBook,newBook]    
    await fs.writeFile(filePath,JSON.stringify(dataNew,null,2),'utf-8')
    res.status(200).json({message:"Tạo sách thành công", newBook})
  } catch (error) {
    res.status(500).json({ messsage: "lỗi đọc file json" });
  }
};

export const deleteBook = async(req: Request, res: Response) => {
  
  try {
    const deleteBookID = req.params.id;
    console.log(deleteBookID)
    const findId = await fs.readFile(filePath,'utf-8')
    let listBook: Book[] = []
    if(findId){
      listBook = JSON.parse(findId)
    }
    let checkBook = listBook.filter((book)=>book.id !== Number(deleteBookID))
    await fs.writeFile(filePath,JSON.stringify(checkBook,null,2),'utf-8')
    res.status(200).json({message: "xóa thành công book "})
  } catch (error) {
    res.status(500).json({ messsage: "lỗi đọc file json" });
  }
  
};

export const updateBook = async(req: Request, res: Response) => {
  try {
    const UpdateBook = req.body;
    console.log(UpdateBook)
    const readData = await fs.readFile(filePath,'utf-8')
    let listBook: Book[]= []
    if(readData){
      listBook = JSON.parse(readData)
    }
    let bookIndex = listBook.findIndex((bookId)=>bookId.id === Number(UpdateBook.id))
    listBook[bookIndex]=UpdateBook
    await fs.writeFile(filePath,JSON.stringify(listBook,null,2),'utf-8')
    res.status(200).json({message: "cập nhập thành công book ", listBook})
  } catch (error) {
    res.status(500).json({ messsage: "lỗi đọc file json" });
  }
 
  
};
