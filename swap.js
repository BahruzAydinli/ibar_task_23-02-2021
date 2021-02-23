function swapNumbers(first, second) {
  console.log(`A initially is: ${first}`);
  console.log(`B initially is: ${second}`);
  first = first + second;
  second = first - second;
  first = first - second;

  console.log(`A is: ${first}`);
  console.log(`B is: ${second}`);
}
let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);

swapNumbers(a, b);
