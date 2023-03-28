// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
    //method split() - splits a string into an array
    const words = str.split(" ");
    let theLongestWord = "";
    //loop for
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > theLongestWord.length) {
            theLongestWord = words[i];
        }
    }
    return theLongestWord.length;
}

//test cases   
findLongestWordLength("The quick brown fox jumped over the lazy dog"); //6
findLongestWordLength("May the force be with you")  //5
