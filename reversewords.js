/**Complete the function that accepts a string parameter, 
 * and reverses each word in the string. 
 * All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double spaces"  ==> "elbuod  secaps" */

// Example:

function reverseWords(string) {
    return string.split(' ').map(function(word) {
        return word.split('').reverse().join('');
    }).join(' ');
}

console.log(reverseWords("This is an example!"));
// returns  "sihT si na !elpmaxe"
console.log(reverseWords("double  spaces"));
// "elbuod  secaps"
console.log(reverseWords("Jessica"));
//acisseJ