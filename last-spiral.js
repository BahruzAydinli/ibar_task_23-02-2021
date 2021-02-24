let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
const m = arr.length;
const k = m * m;
let result = [];
for (let i = 0; i < k; i++) {
  let z = Math.floor(i / m);
  let t = z % 2 == 0 ? i % m : m - 1 - (i % m);
  result[i] = arr[z][t];
}
console.log(result);
