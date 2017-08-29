// Hello World
var message = "Hello World"
console.log(message)

// Scoping
var num = 10
function test() {
   var num = 100
   console.log("value of num in test() "+num)
}
console.log("value of num outside test() "+num)
test()

// functions
function test1() {
  console.log("I was called")
}
test1()

// Anonymous functions (lambdas)
var test3 = function(a, b) { return (a + b)}
console.log(test3(1,2))

// generators
function* rainbow() {
   // the asterisk marks this as a generator
   yield 'red';
   yield 'orange';
   yield 'yellow';
   yield 'green';
   yield 'blue';
   yield 'indigo';
   yield 'violet';
}
for(let color of rainbow()) {
   console.log(color);
}
