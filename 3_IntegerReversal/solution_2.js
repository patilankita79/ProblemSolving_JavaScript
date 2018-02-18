function reverseInt(n) {
    let reversedInteger = n.toString().split('').reverse().join('');

    return parseInt(reversedInteger) * Math.sign(n);
}

console.log(reverseInt(12));