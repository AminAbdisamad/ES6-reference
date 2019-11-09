const users = [
  {
    name: "Hassan",
    category: "Student"
  },
  {
    name: "Ali",
    category: "Engineer"
  },
  {
    name: "Omar",
    category: "Student"
  },
  {
    name: "Abdi",
    category: "Engineer"
  }
];
const products = [
  { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
  { name: "banana", type: "fruit", quantity: 10, price: 15 },
  { name: "onion", type: "vegetable", quantity: 30, price: 13 },
  { name: "orange", type: "fruit", quantity: 3, price: 5 }
];

// const students = []
// for (let index = 0; index<users.length; index++){
//     if(users[index].profession === "Student"){
//         students.push(users[index])
//     }
// }

const students = users.filter(user => user.category == "Student");
students;

// only keep vegetable that quantity > 0 and price < 10
const filteredProducts = products.filter(
  product =>
    product.type === "vegetable" && product.quantity > 0 && product.price < 15
);

filteredProducts;

const posts = {
  id: 5,
  title: "This is my first post"
};

const comments = [
  { id: 5, conent: "this is awesome!" },
  { id: 2, conent: "this is amazing!" },
  { id: 5, conent: "That's absolutely true" },
  { id: 5, conent: "You must be kidding!" },
  { id: 4, conent: "this is another amazing post!" },
  { id: 4, conent: "this is another great post!" }
];

const commentsToPosts = (posts, commens) => {
  return commens.filter(comment => comment.id === posts.id);
};

commentsToPosts(posts, comments);
