/* 
Filename: sophisticated_code.js
Content: Complex Code Example
*/

// Object Constructor: Shape
function Shape(color) {
  this.color = color;
}

// Circle Object Constructor
function Circle(radius, color) {
  Shape.call(this, color);

  this.radius = radius;
}

// Inheritance: Circle inherits from Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Get Area of Circle
Circle.prototype.getArea = function() {
  return Math.PI * Math.pow(this.radius, 2);
};

// Rectangle Object Constructor
function Rectangle(width, height, color) {
  Shape.call(this, color);

  this.width = width;
  this.height = height;
}

// Inheritance: Rectangle inherits from Shape
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// Get Area of Rectangle
Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};

// Create Shapes
var circle1 = new Circle(5, "red");
var circle2 = new Circle(3, "blue");
var rectangle = new Rectangle(4, 6, "green");

// Print Areas
console.log("Circle 1 Area: " + circle1.getArea());
console.log("Circle 2 Area: " + circle2.getArea());
console.log("Rectangle Area: " + rectangle.getArea());