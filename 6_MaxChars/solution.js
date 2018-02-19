function maxChar(str){
    // Converting string to object, so keys of the object are characters from string and values are the number of times the character has been found

    // Create empty object
    let characterMap = {};
    let max = 0;
    let maxChar = '';

    // Iterate through string
    for(char of str) {
        // Check if entry of a character already exists in the character map, if exists increment the counter for character otherwise set the counter to 1
        if(!characterMap[char]) {
            characterMap[char] = 1;
        } else {
            characterMap[char]++;
        }

    }

    // Iterate through characterMap (object) and find the character that was used most frequently.
    // The key with maximum value will be the expected output

    for(key in characterMap) {
        if(characterMap[key] > max) {
            max = characterMap[key];
            maxChar = key;
        }  
    }

    return maxChar;
}

console.log(maxChar("aaaab"));