function anagrams(stringA, stringB) {
    // Build a characterMap out of stringA and stringB and compare the characters inside the two maps
     let aCharMap = characterMapHelper(stringA);
     let bCharMap = characterMapHelper(stringB);

     // Look at the number of keys in the map
   if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
   } else {
        // Iterate over aCharMap
        for(let key in aCharMap) {
            if(aCharMap[key] !== bCharMap[key]) {
                return false;
            }
        }

        return true;
   }
    
}

function characterMapHelper(str) {
    let characterMap = {}
    
    for(char of str.replace(/[^\w]/g, '').toLowerCase()) {
        if(!characterMap[char]) {
            characterMap[char] = 1;
        } else {
            characterMap[char]++;
        }
    }

    return characterMap;
}


console.log(anagrams("rail safety', 'fairy tales"));