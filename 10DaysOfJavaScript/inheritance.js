// Alternative to defining area method in class Rectangle:
//
// Rectangle.prototype.area = function() {
//   return(this.length * this.height)
// }

class Rectangle {
  constructor(length, width) {
    this.length = length
    this.width = width
  }
  area() {
    return this.length * this.width
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side)
    this.height = side
    this.width = side
  }
}

let shape = new Square(4)
console.log(shape.area())
