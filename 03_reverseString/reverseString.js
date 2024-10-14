const reverseString = function(string) {
    const stringArray = string.split("");
    const length = stringArray.length;

    const stringArrayReversed = new Array(length);
    for (let i = 0; i < length; i++) {
        stringArrayReversed[i] = stringArray[length - i - 1];
    }

    let stringReversed = stringArrayReversed.join("");

    return(stringReversed);
};

// Do not edit below this line
module.exports = reverseString;
