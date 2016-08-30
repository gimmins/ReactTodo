function add (a, b) {
  return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5];
// Spread operator
console.log(add(...toAdd));

var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];
var final_1 = [3, ...groupA, ...groupB];
var final_2 = [3, groupA, groupB];

console.log(final_1);
console.log(final_2);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];
// Hi Andrew

final.forEach((name) => {
  console.log('Hi ' + name);
});
