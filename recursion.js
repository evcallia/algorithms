// returns the fibonacci sequence up to the number passed in
// 1 1 2 3 5 8 13 21 34 55 89 144...
function Fibonacci(num, prev = 0, current = 1, count = num){
    if(num <= 0){
        return 0;
    }
    if(count == 1){
        return current;
    }
    return Fibonacci(num, current, prev + current, --count);
}
// console.log(Fibonacci(11));

// returns the factorial of the number passed in
function Factorial(num, sum = 1){
    if(num == 1){
        return sum;
    }
    sum = sum * num;
    return Factorial(--num, sum);
}
// console.log(Factorial(5));

// returns the squares of all the numbers from 0 to the number passed in
function SumOfSquares(upToNum, sum = 0){
    if(upToNum <= 0){
        return sum;
    }
    sum += Math.pow(upToNum, 2);
    console.log(sum);
    return SumOfSquares(--upToNum, sum);
}
// console.log(SumOfSquares(5));










//
