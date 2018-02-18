function palindrome(str) {

    // 1. Converting the string to lowercase and removing all alphanumneric characters from the string. String may contain a sentence, spaces, ', . etc
    let re = /[^A-Za-z0-9]/g;

    // Converting to lowercase and using regular rexpression to remove unwanted characters from the string
    let lowerCaseString = str.toLowerCase().replace(re, '');
    //console.log(lowerCaseString);
    let reversedString = lowerCaseString.split('').reverse().join('');
    
    if(lowerCaseString === reversedString) {
        return true;
    } else {
        return false;
    }

}

console.log(palindrome("race car"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("abcd"));