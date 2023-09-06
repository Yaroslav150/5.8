let n = 10;
let x = Math.floor(Math.random() * n);
console.log(x);
while (true) {
  let n = prompt("Input a number from 1 to 10 to exit !");
  if (n == x ) {
    alert("You win!");
    break;
  }
  if (n > x ) {
    alert("Many");
  }
  if (n < x ) {
    alert("Few");
  }
  if (n == "!" || isNaN(n)) {
    alert("Bye! Game over!");
    break;
  }
}
