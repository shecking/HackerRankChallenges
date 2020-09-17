class Polygon {
    constructor(array) {
        this.array = array
    }
    perimeter() {
        let sum = 0
        for (let i = 0; i < this.array.length; i ++) {
            sum = sum + this.array[i]
        }
        return sum
    }
}

let triangle = new Polygon ([3, 4, 5])

console.log(triangle.perimeter())
