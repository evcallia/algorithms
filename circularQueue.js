class CircularQueue{
    constructor(capacity){
        this.queue = [];
        this.capacity = capacity;
        this.start = 0;
        this.end = -1;
        this.size = 0;
    }

    enqueue(val){
        if(this.size != this.capacity){
            this.end = (this.end + 1) % this.capacity
            this.queue[this.end] = val;
            this.size++;
            return true
        }
        return false
    }

    dequeue(){
        if(this.size != 0){
            var temp = this.queue[this.start]
            this.queue[this.start] = null
            this.start = (this.start + 1) % this.capacity
            this.size--;
            return temp
        }
        return null
    }

    isFull(){
        return this.size == this.capacity
    }
}

var queue = new CircularQueue(5)
queue.enqueue(1);
console.log('full?', queue.isFull());
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log(queue.dequeue());
queue.enqueue(7);
console.log('full?', queue.isFull());
console.log(queue.queue);
