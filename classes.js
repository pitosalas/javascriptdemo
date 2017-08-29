var Polygon = class {
   constructor(height, width) {
      this.height = height;
      this.width = width;
   }
  square() {
    return (this.height == this.width)
  }
}
var x = new Polygon(100,200)
console.log(x)
console.log(x.square())
