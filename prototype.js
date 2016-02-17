'use strict'
console.log(this)
function Car(name){
  this.name = name;
}
var bmw = new Car('bmw')
console.log(new Car('mazda'))
// var mazda = Object.create({}, {this:{ value: 'mazda'}})
var mazda = Object.create({}, {
  this: {
    value: 42,
  }
});


console.log(bmw, Object.keys(bmw) , bmw instanceof Car)
console.log(mazda, Object.keys(mazda) , mazda instanceof Car)
