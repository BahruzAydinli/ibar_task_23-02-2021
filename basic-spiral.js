var arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
function showSpiral(array) {
  let dir = true;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (dir) {
        console.log("  ".repeat(j) + array[i][j]);
      } else {
        console.log("  ".repeat(5 - j) + array[i][j]);
      }
    }
    dir = !dir;
  }
}
showSpiral(arr);
