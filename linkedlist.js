class Node{
    constructor(v = null){
        this.val = v;
        this.next = null;
    }
}

class LinkedList{
    constructor(h = null){
        this.head = h;
    }
    // adds a node to the end of a linked list
    // params: Node object to be added
    push(newNode){
        if(this.head){
            var current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }else{
            this.head = newNode
        }
    }
    // removes and returns the last element of the list or null if no elements
    pop(){
        if(this.head){
            var temp;
            if(this.head.next){
                var current = this.head;
                while(current.next.next){
                    current = current.next
                }
                temp = current.next;
                current.next = null;
            }else{
                temp = this.head;
                this.head = null;
            }
            return temp;
        }
        return null;
    }
    // inserts node into specified position. Return true if successful
    // params: number value references the position, Node object to be inserted
    insert(pos, node){
        if(this.head && pos >= 0){
            --pos;
            var current = this.head;
            while(pos > 0 && current.next){
                current = current.next;
                --pos;
            }
            if(pos != 0){
                return false;
            }
            node.next = current.next;
            current.next = node;
        }else{
            if(pos === 0){
                node.next = this.head;
                this.head = node;
            }else{
                return false;
            }
        }
        return true;
    }
    // removes and returns value from the front of the list else returns null
    shift(){
        var temp = null;
        if(this.head){
            temp = this.head;
            this.head = this.head.next;
        }
        return temp;
    }
    // adds node to the front of the list (value = null)
    unshift(){
        var node = new Node();
        node.next = this.head;
        this.head = node;
    }
    toString(){
        var str = '';
        var current
        if(this.head){
            current = this.head.next;
            str += this.head.val;
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

//testing
var myList = new LinkedList();
myList.push(new Node(5));
myList.push(new Node(6));
myList.push(new Node(3));
console.log(myList.toString());  // 5 -> 6 -> 3

myList.pop();
console.log(myList.toString());  // 5 -> 6

myList.insert(1, new Node(9));
console.log(myList.toString()); // 5 -> 9 -> 6

myList.unshift();
console.log(myList.toString()); // null -> 5 -> 9 -> 6

var m = myList.shift();
console.log(myList.toString()); // 5 -> 9 -> 6









//
