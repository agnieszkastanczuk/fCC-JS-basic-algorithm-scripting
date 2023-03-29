// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    if (str.length > num) {
        //method substing - returns a part of a string (or substring) according to specified indices passed as arguments.
        return str.substring(0, num) + "...";
    } else {
        return str;
    }
}

//test cases   
truncateString("A-tisket a-tasket A green and yellow basket", 8); // A-tisket...
truncateString("Absolutely Longer", 2) //Ab...
