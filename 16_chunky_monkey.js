// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let temp = [];
    const result = [];

    for (let a = 0; a < arr.length; a++) {
        //push() x1
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
            //push() x2
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0) result.push(temp);
    return result;
}

// test cases
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); //[[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups(["a", "b", "c", "d"], 2)  //[["a", "b"], ["c", "d"]]
