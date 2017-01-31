class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// A queue calss implimented with a linked list
class Queue{
    constructor(){
        this.head = null;
    }

    enqueue(val){
        if(this.head){
            var current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = new Node(val);
        }else{
            this.head = new Node(val);
        }
        return this;
    }

    dequeue(){
        if(this.head){
            var temp = this.head;
            this.head = this.head.next;
            return temp.val;
        }
        return null
    }

    isEmpty(){
        return this.head == null;
    }

    //prints a formated queue
    toString(){
        var str = '';
        var current
        if(this.head){
            str += this.head.val;
            current = this.head.next;
        }else{
            current = this.head;
        }
        while(current){
            str += ' -> ' + current.val;
            current = current.next;
        }
        return str;
    }
}

// var q = new Queue();
// q.enqueue(5).enqueue(6).enqueue(7).enqueue(0);
// console.log(q.toString());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.isEmpty());
// console.log(q.dequeue());
// console.log(q.toString());
// console.log(q.isEmpty());

module.exports = Queue, Node;






//
