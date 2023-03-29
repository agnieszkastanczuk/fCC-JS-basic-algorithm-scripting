// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    let theLargest = [];
    for (let i = 0; i < arr.length; i++) {
        //asign the first element in the array as the largest
        let theLargestInSubarray = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            //update the largest element in the array
            if (arr[i][j] > theLargestInSubarray) {
                theLargestInSubarray = arr[i][j];
            }
        }
        //add the largest element to the 'theLargest' array 
        theLargest.push(theLargestInSubarray);
    }
    return theLargest;
}

//test cases   
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) //[9, 35, 97, 1000000]
