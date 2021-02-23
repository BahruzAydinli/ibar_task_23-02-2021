function getmeARandomNumber() {
  return Math.floor(Math.random() * 100);
}

function findTheDifferentNumber(first_array, second_array) {
  let count =
    first_array.length > second_array.length
      ? first_array.length
      : second_array.length;
  let sum_one = 0;
  let sum_two = 0;
  for (let i = 0; i < count; i++) {
    sum_one += first_array[i] ? first_array[i] : 0;
    sum_two += second_array[i] ? second_array[i] : 0;
  }
  let result = Math.abs(sum_one - sum_two);
  console.log("The different number is: " + result);
  console.log("The first array is: " + first_array.join(", "));
  console.log("The second array is: " + second_array.join(", "));
}

let arr_one = [];
let arr_two = [];
let rand_point_in_array = Math.floor(Math.random() * 15);
//just to populate numbers
for (let i = 0; i < 15; i++) {
  let num = getmeARandomNumber();
  arr_one.push(num);
  if (i !== rand_point_in_array) {
    arr_two.push(num);
  }
}

findTheDifferentNumber(arr_one, arr_two);
