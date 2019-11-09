// Object literals

// lets create a functin that creates a bookshop

function bookshop(books) {
  return {
    books,
    totalBookValue() {
      return books.reduce((total, book) => total + book.price, 0);
    },
    bookTitle(id) {
      return books.find(book => book.id === id).name;
    }
  };
}

const books = [
  {
    id: 1,
    name: "You Don't know JS",
    price: 15
  },
  {
    id: 2,
    name: "Fluent Python",
    price: 19
  },
  {
    id: 3,
    name: "Lean startup",
    price: 29
  }
];

const book1 = new bookshop(books);
console.log(book1.totalBookValue());
console.log(book1.bookTitle(2));
