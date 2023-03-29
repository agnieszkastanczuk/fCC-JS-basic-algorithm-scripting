// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    let newStr = "";
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            newStr += str;
        }
        return newStr;
    }
    return "";
}

//test cases   
repeatStringNumTimes("abc", 3); //abcabcabc
repeatStringNumTimes("*", 3)  //***
