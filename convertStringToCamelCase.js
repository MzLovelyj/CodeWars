/*Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
Don't forget to rate this kata! Thanks :)..*/
function toCamelCase(str) {
    //your code here
    let strArray;

    if (str === "") {
        return "";
    }

    if (str.indexOf("-") !== -1) {
        strArray = str.split("-")
    } else {
        strArray = str.split("_")
    }

    let cString = strArray[0];

    for (let i = 1; i < strArray.length; i++) {
        cString += capitalize(strArray[i]);
    }
    return cString;
}
let capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
};


console.log(toCamelCase("A-B-C"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("the_stealth_warrior"));