// String reversal using built-in functions

// Since reverse() is built in method that can be applied on array, string can be converted to array and further manipulation can be done
// 1. split() splits the String object into array of strings (returns a new array)
// 2. reverse() reverses newly created array
// 3. join() joins all the elements of array into string

function reverseString(str) {
    let output = str.split('').reverse().join('');

    return output;
}

let result = reverseString("hello");
console.log(result);