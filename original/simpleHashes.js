/*
Write a function frequencies(arr) that takes in the string:
"lkazjsdfnvapsifdophoidhjsadlkfjgbplak"
and return a hash table containing all the different characters
in it as the keys, and the number of times each character is repeated as the values.
Example:
input: "lkazjsdfnvapsifdophoidhjsadlkfjgbplak"
output:
{"l":3,"k":3,"a":4,"z":1,"j":3,"s":3,"d":4,"f":3,"n":1,"v":1,"p":3,"i":2,"o":2,"h":2,
*/
const input = "lkazjsdfnvapsifdophoidhjsadlkfjgbplak";
function frequencies(arr){
// Answer here
  // function to count each string 
  function count(s){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i].charCodeAt() === s.charCodeAt()){
        sum += 1;
      }
    }
    return sum;
  }
  // hash table for the charcters
  let hash = {};
  for(let i = 0; i < arr.length;i++){
    let key = arr[i];
    hash[key] = count(key);
  }
  return hash;
}
// Test cases. Please don't change this code!
const out1 = JSON.stringify(frequencies(input));
const out2 = JSON.stringify(
{"l":3,"k":3,"a":4,"z":1,"j":3,"s":3,"d":4,"f":3,"n":1,"v":1,"p":3,"i":2,"o":2,"h":2,"g":1,"b":1});
if(out1 == out2){
console.log("SUCCESS!!");
} else {
console.log("Whoops!! Try again :o)")
}
