// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    //method substring() - is used to extract a portion of a string based on its starting and ending indicates
    //ex  str.length = 10, target.length=4  (10-4)=6 str.substing(6)===target
    return str.substring(str.length - target.length) === target;
}

//test cases   
confirmEnding("Bastian", "n"); //true
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") //false