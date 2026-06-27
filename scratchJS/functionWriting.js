/**
 * Makes a string sentence case
 * @param {string} str - a string
 * @returns {string} The string in sentence case
 */
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Returns the final letter of a string
 * @param {string} str - a string
 * @returns {string} The final character of the string 
 */
const lastLetter = (str) => str[str.length - 1];

console.log(capitalizeString("tiMoThy"));
console.log(lastLetter("Finale"));