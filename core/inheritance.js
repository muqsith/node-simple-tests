// normal es5 inheritance

function Shape() {}

Shape.prototype.draw = function () {
  console.log("Drawring shape ...");
};

Shape.prototype.move = function () {
  console.log("Moving shape ...");
};

const shape1 = new Shape();

shape1.draw();
shape1.move();

function Circle(c1, c2) {
  this.center = { x: c1, y: c2 };
  this.draw = function () {
    console.log("drawing circle...");
  };
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.move = function () {
  console.log("Moving circle..");
};

const circle1 = new Circle(3, 4);

circle1.draw();
circle1.move();

const shape2 = new Shape();

shape2.draw();
shape2.move();
