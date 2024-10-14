const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }

    const i = 0;
    let out = '';

    while (num > 0) {
        out += string;
        num--;
    }

    return out;
};

// Do not edit below this line
module.exports = repeatString;
