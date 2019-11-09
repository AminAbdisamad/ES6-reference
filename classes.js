// ES6 classes

class Car {
  constructor({ title }) {
    return (this.title = title);
  }

  drive() {
    return "driving ..";
  }
}

const car = new Car({ title: "Focus" });
car;
console.log(car.drive());

// lets create another class and inherit Car class

class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  honk() {
    return "beeb";
  }
}

const toyo = new Toyota({ title: "Toyo", color: "blue" });
toyo;
