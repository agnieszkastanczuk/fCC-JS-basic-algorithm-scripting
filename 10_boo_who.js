// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
    //typeof - an operator that returns the type of a value passed as an argument
    if (typeof bool === 'boolean') {
        return true;
    } else {
        return false;
    }
}

//test cases   
booWho(null); //false
booWho({ "a": 1 }) //false
booWho(false) //true
