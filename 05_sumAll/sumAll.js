const sumAll = function(n1, n2) {
    if ((typeof n1 != 'number') || (typeof n2 != 'number')) {
        return 'ERROR';
    };

    if (!(Number.isInteger(n1) && Number.isInteger(n2))) {
        return 'ERROR';
    };

    if (n1 < 0 || n2 < 0) {
        return 'ERROR';
    }

    let start = n1;
    let end = n2;
    if (n1 > n2) {
        start = n2;
        end = n1;
    }

    let count = 0;
    for (let i = start; i <= end; i++) {
        count += i;
    };

    return(count)
};

// Do not edit below this line
module.exports = sumAll;
