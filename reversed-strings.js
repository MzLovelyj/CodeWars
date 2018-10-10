/* 
Directions: Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'
*/

/*Simple way

function solution(str){
  return str.split('').reverse().join('');  
}
solution('Hello')*/

//Explained in more detail Code below is what I submitted.

function solution(str) {

    // Step 1. Use the split() method to return a new array
    var split = str.split(""); // var split = "world".split("");
    // ["w", "o", "r", "l", "d"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverse = split.reverse(); // var reverse = ["h", "e", "l", "l", "o"].reverse();
    // ["d", "l", "r", "o", "w"]

    //Step 3. Return the reversed string
    return reverse.join("");
    // "dlrow"
}

solution('world');