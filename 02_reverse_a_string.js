// Reverse a String
// Reverse the provided string and return the reversed string.
// For example, "hello" should become "olleh".

function reverseString(str) {

    //method split() - splits a string into an array, 
    //method reverse() - reverse the order of elements in an array 
    //method join()- joins the elements of an array into a string using
    return str.split("").reverse().join("");
}

//test cases   
reverseString("hello"); //olleh
reverseString("Greetings from Earth") //htraE morf sgniteerG
