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
// console.log(lastWord("hello World"));


//Reverse words in a string
//ex hello world --> world hello
function reverseWords(str){
    var words = str.split(" ");
    // for(var i = 0; i < words.length/2; i++){
    //     var temp = words[i];
    //     words[i] = words[words.length-1-i];
    //     words[words.length-1-i] = temp;
    // }
    words.reverse();
    return words.join(" ");
}
// console.log(reverseWords("hello world"));


// Given two strings s and t, determine if they are isomorphic.
// Two strings are isomorphic if the characters in s can be replaced to get t.
// For example,"egg" and "add" are isomorphic, "foo" and "bar" are not.
function isIsomorphic(a, b){
    if(a.length != b.length) return false;
    var dict = {};
    for(var i = 0; i < a.length; i++){
        if(dict.hasOwnProperty(a[i])){
            if(dict[a[i]] != b[i]) return false;
        }else{
            var values = Object.keys(dict).map(function(key){
                return dict[key];
            });
            if(values.includes(b[i])) return false;
            dict[a[i]] = b[i];
        }
    }
    return true;
}
// console.log(isIsomorphic('egg', 'add'));
// console.log(isIsomorphic('foo', 'bar'));


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var start = 0,
        max = 0,
        usedChar = {};
    for(var i = 0; i < s.length; i++){
        if(s[i] in usedChar && start <= usedChar[s[i]]){
            start = usedChar[s[i]] + 1;
        }else{
            max = Math.max(max, i - start + 1);
        }
        usedChar[s[i]] = i;
    }
    return max;
};
















//
