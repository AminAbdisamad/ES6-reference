// classes

// lets start with ES5

function Car(options) {
  return (this.title = options.title);
}

const car = new Car({ title: "toyotota" });
car;

// lets implement a method for the above function Car
Car.prototype.drive = function() {
  return "Driving ..";
};
console.log(car.drive());

// Let's create another function that inherits Car
function Toyota(options) {
  // inherit Car
  Car.call(this, options);
  return (this.color = options.color);
}
// initiate object from the above function
const toyota = new Toyota({ color: "red", title: "Toyota" });
toyota;

// lets implemnt method honk
Toyota.prototype.honk = function() {
  return "Honk ...";
};

console.log(toyota.honk());

// Now, to inherit drive method of Car function/Class we need to create a link between Toyota function/class protype

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

console.log(toyota.drive());
