// Every and some helpers

// every returns true if only all conditions are true
//  some returns true if some of the condition is true

// lets assume we're validating login form
function Login(value) {
  return (this.value = value);
}

const username = new Login("alex");
const password = new Login("aminux");
const fields = [username, password];
Login.prototype.validate = function() {
  return this.value.length > 3;
};
console.log(username.validate());
console.log(password.validate());

// if we want to check validation for all we can use every

const formIsValid = fields.every(field => field.validate());

if (formIsValid) {
  // allow user to login
} else {
  // display errors
}
