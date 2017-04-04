class Stack{
    constructor(){
        this.stack = [];
    }

    push(val){
        this.stack.push(val);
    }

    pop(){
        return this.stack.pop();
    }

    isEmpty(){
        return this.stack.length == 0;
    }
}


// var stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack);
// console.log(stack.isEmpty());
// stack.pop();
// stack.pop();
// console.log(stack);
// stack.pop();
// console.log(stack.isEmpty());

module.exports = Stack;


//
