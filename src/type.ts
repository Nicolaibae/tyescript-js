// hệ thông yêu cầu phải có 2 trạng thái sách
// 0: chưa phát hành
// 1: đã phát hành
enum StatusBook {
  released = 0,
  not_released = 1,
}
enum UserEnum {
  admin = 0,
  user = 1,
}
interface Book {
  id: number;
  author: Author;
  title: string;
  status: StatusBook;
}
interface Book2 {
  author: Author;
}

interface BookTest extends Omit<Book, "title" | "id"> {}
// Pick
interface BookTest2 extends Pick<Book, "title" | "id"> {}
// Partial
interface BookTest3 extends Partial<Book> {}
interface BookTest4 extends Required<Book> {}

type Author = {
  name: string;
  age: number;
};

const data: Book[] = [
  {
    id: 1,
    author: {
      name: "",
      age: 29,
    },
    title: "string",
    status: StatusBook.not_released,
  },
  {
    id: 2,
    author: {
      name: "",
      age: 29,
    },
    title: "string",
    status: StatusBook.released,
  },
];

const data2: BookTest3[] = [{}];

const functionA = (dataBook: Book): Book => {
  // code rỏ ràng hơn
  return dataBook;
};
