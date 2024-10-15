const removeFromArray = function(arr, ...remove) {
    
    for (const elem1 in remove) {
        for (let i = 0; i < arr.length; i++) {
            if (elem1 == arr[i]) {
                arr.splice(i, 1);
            }
        }
     }

     return(arr)
};

// Do not edit below this line
module.exports = removeFromArray;
