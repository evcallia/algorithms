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








//
