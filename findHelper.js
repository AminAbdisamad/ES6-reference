// Find user with name of Amin
const users = [{ name: "Amin" }, { name: "Ali" }, { name: "Ahmed" }];

let user = "";
for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Amin") {
    user = users[i];
    break;
  }
}

const findUser = users.find(user => user.name === "Amin");
findUser;
