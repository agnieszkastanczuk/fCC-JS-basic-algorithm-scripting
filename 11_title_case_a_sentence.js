// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
    //method split()
    const tableOfWords = str.split(" ");
    for (let i = 0; i < tableOfWords.length; i++) {
        //toUpperCase & to LowerCase
        tableOfWords[i] = tableOfWords[i][0].toUpperCase() + tableOfWords[i].slice(1).toLowerCase();
    }
    //method join
    return tableOfWords.join(" ");
}

//test cases
titleCase("I'm a little tea pot"); //I'm A Little Tea Pot
