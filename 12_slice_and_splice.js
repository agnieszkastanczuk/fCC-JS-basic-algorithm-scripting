// Slice and Splice
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    // copy of arr2 so that the original is not modified
    let newArr = arr2.slice();

    // iterate over arr1 and insert each element into newArr at index n
    for (let i = 0; i < arr1.length; i++) {
        newArr.splice(n + i, 0, arr1[i])
    }
    return newArr;
}

//test cases 
frankenSplice([1, 2, 3], [4, 5, 6], 1); //[4, 1, 2, 3, 5]
