function SelectionSort(arr){
    for(var i = 0; i < arr.length - 1; i++){
        var minIndex = i;
        for(var j = i; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        // console.log(arr);
    }
}
// var myArray = [4, 5, 17, 6 ,-1, -6, 3];
// SelectionSort(myArray);
// console.log(myArray);

function BubbleSort(arr){
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        // console.log(arr);
    }
}
// var myArray = [4, 5, 17, 6 ,-1, -6, 3];
// BubbleSort(myArray);
// console.log(myArray);


function InsertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var val = arr[i];
        for(var j = i - 1; j >= 0; j--){
            if(val < arr[j]){
                arr[j+1] = arr[j];
                arr[j] = val;
            }
        }
        // console.log(arr);
    }
}
// var myArray = [17, 5, 4, 6 ,-1, -6, 3];
// InsertionSort(myArray);
// console.log(myArray);










//
