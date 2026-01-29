alert("Hello js");
let name = "Summan";
let age = 20;
console.log(name);
function sayHello() {
  console.log("Hello from function");
}
sayHello();
function Guessage() {
  let text = document.getElementById("message");
  text.innerText = "ABCDs!";
}

console.log(document.getElementById("message"));

if (age >= 18) {
  console.log("You are adult");
} else {
  console.log("You are not adult");
}
