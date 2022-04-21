/*
Write a function squareWave(arr) that takes in the following array:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
and starts replacing the numbers, one by one, with zeroes, until it
reaches a multiple of 5.
From that point onwards, start replacing the numbers with 1s, until
you reach the next multiple of 5.
Then, from that point onwards, start replacing with 0s again, then
1s again,and so on until you reach the end of the array.
HINT: You should use the flag pattern to switch between 0s and 1s in the loop.
Example:
Input:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
Output:
[0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1]
*/
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
function squareWave(arr){
// Answer here
  let zeros = true;
  // loop to check the conditions
  for(let i = 0; i < arr.length; i++){
      if(arr[i] % 5 === 0){
        if(zeros == true){
          zeros = false;
        }else{
          zeros = true;
        }
      }
    // give the flag a value
    if(zeros == true){
      arr[i] = 0;
    }else{
      arr[i] = 1;
    }
  }
  return arr;
}
// Test cases. Don't change this code!
const out1 = JSON.stringify(squareWave(input));
const out2 = JSON.stringify([0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1])
if(out1 == out2){
console.log("SUCCESS!");
} else {
console.log("Whoops, try again!")
}
