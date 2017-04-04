var Stack = require('./stack.js');

// Swap Pairs
function swapPairs(arr, i1, i2){
    if(i1 < 0 || i1 > arr.length-1 || i2 < 0 || i2 > arr.length-1 || i1 == i2){
        return;
    }
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}
// var myArr = [4, -3, 7, 1, 3, 8, 0];
// swapPairs(myArr, 1, 6);
// console.log(myArr);

// Reverse Array
function reverseArray(arr){
    if(Array.isArray(arr)){
        for(var i = 0; i < arr.length / 2; i++){
            var temp = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = arr[i];
            arr[i] = temp;
        }
    }
}
// var myArr = [4, -3, 7, 1, 3, 8, 0];
// reverseArray(myArr, 1, 6);
// console.log(myArr);

// Remove Negatives
function removeNegatives(arr){
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
// removeNegatives(myArr, 1, 6);
// console.log(myArr);

//Rotate Array by number of indexes
function rotate(arr, indexes){
    if(!Array.isArray(arr)) return
    for(var i = 0; i < indexes; i++){
        var temp = arr[arr.length-1];
        for(var j = arr.length-2; j >= 0; j--){
            arr[j+1] = arr[j];
        }
        arr[0] = temp;
    }
}
// var arr = [1,2,3,4,5,6,7];
// rotate(arr, 3);
// console.log(arr);  // [5,6,7,1,2,3,4]

// Evaluate Reverse Polish Notation
// Valid operators are +, -, *, /.
// ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
// ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
function evaluateReversePolis(arr){
    var stack = new Stack();
    var operators = '+-*/';
    for(var i = 0; i < arr.length; i++){
        if(!operators.includes(arr[i])){
            stack.push(arr[i])
        }else{
            var a = parseInt(stack.pop());
            var b = parseInt(stack.pop());
            switch(arr[i]){
                case '+':
                    stack.push(a+b);
                    break;
                case '-':
                    stack.push(a-b);
                    break;
                case '*':
                    stack.push(a*b);
                    break;
                case '/':
                    stack.push(a/b);
                    break;
            }
        }
    }
    return stack.pop();
}
console.log(evaluateReversePolis(["2", "1", "+", "3", "*"]));

















//
