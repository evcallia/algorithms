//Return lenght of last word in string
function lastWord(str){
    var arr = str.split(" ");
    if(arr.length != 1){
        for(var i = arr.length -1; i >= 0; i--){
            if(arr[i] != ''){
                return arr[i].length
            }
        }
    }
    return arr[arr.length-1].length
}
console.log(lastWord("hello World"));
