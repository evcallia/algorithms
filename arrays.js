// Swap Pairs
function SwapPairs(arr, i1, i2){
    if(i1 < 0 || i1 > arr.length-1 || i2 < 0 || i2 > arr.length-1 || i1 == i2){
        return;
    }
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}
// var myArr = [4, -3, 7, 1, 3, 8, 0];
// SwapPairs(myArr, 1, 6);
// console.log(myArr);

// Reverse Array
function ReverseArray(arr){
    if(Array.isArray(arr)){
        for(var i = 0; i < arr.length / 2; i++){
            var temp = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = arr[i];
            arr[i] = temp;
        }
    }
}
// var myArr = [4, -3, 7, 1, 3, 8, 0];
// ReverseArray(myArr, 1, 6);
// console.log(myArr);

// Remove Negatives
function RemoveNegatives(arr){
    if(Array.isArray(arr)){
        for(var i = 0; i < arr.length; i++){
            if(arr[i] < 0){
                arr.splice(i,1);
                --i;
            }
        }
    }
}
// var myArr = [4, -3, 7, -1, 3, 8, 0];
// RemoveNegatives(myArr, 1, 6);
// console.log(myArr);


/*
Suppose we have some input data describing relationships between parents and children. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.
parentChildPairs =
    [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7],[4, 5], [4, 8], [8, 9]]
For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

 1   2     4
  \ /     / \
   3     5   8
    \   / \   \
     \ /   \   9
      6     7
Write a function that takes this data as input and outputs two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.
Sample output:
Zero parents: 1, 2, 4
One parent: 5, 7, 8, 9
Below is some sample data in JavaScript. Feel free to solve this problem in any language of your choice.
var parentChildPairs =
    [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [8, 9]];
*/

function parentChildren(arr){
    var dict = {};
    for(var i = 0; i < arr.length; i++){
        if(arr[i][0] in dict){
            // do nothing
        }else{
            dict[arr[i][0]] = 0;
        }
        arr[i][1] in dict ? dict[arr[i][1]] += 1 : dict[arr[i][1]] = 1;
    }
    var parent0 = [];
    var parent1 = [];
    for(key in dict){
        if(dict[key] == 0){
            parent0.push(key);
        }
        if(dict[key] == 1){
            parent1.push(key);
        }
    }
    return [parent0, parent1];
}

// var test = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7],[4, 5], [4, 8], [8, 9]]
// console.log(parentChildren(test));





//
