class Node{
    constructor(key){
        this.key = key;
        this.data = null;
    }
}

class MinHeap{
    constructor(){
        this.heap = [null];
    }

    add(node){
        this.heap.push(node);
        var idx = this.heap.length - 1;
        var parentIdx = Math.floor(idx / 2);
        while(parentIdx != 0 && this.heap[idx].key < this.heap[parentIdx].key){
            this.swap(idx, parentIdx);
            idx = parentIdx;
            parentIdx = Math.floor(idx/2);
        }
    }

    removeMin(){
        if(this.heap.length == 1){
            return this.heap.pop();
        }
        if(this.heap.length > 2){
            this.swap(1, this.heap.length - 1);
            var min = this.heap.pop();
            var idx = 1;
            var lIdx = 2;
            var rIdx = 3;
            while(lIdx < this.heap.length &&
                (this.heap[lIdx].key < this.heap[idx].key ||
                (this.heap[rIdx] != null && this.heap[rIdx].key < this.heap[idx].key))){

                if(this.heap[rIdx] != null){
                    if(this.heap[lIdx].key < this.heap[rIdx].key){
                        this.swap(idx, lIdx);
                        idx = lIdx;
                    }else{
                        this.swap(idx, rIdx);
                        idx = rIdx;
                    }
                }else{
                    this.swap(lIdx, idx);
                    idx = lIdx
                }
                lIdx = idx * 2;
                rIdx = lIdx + 1;
            }
            return min;
        }
        return null
    }

    swap(idx1, idx2){
        var temp = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2];
        this.heap[idx2] = temp;
    }
}

var heap = new MinHeap();
var node1 = new Node(7);
var node2 = new Node(6);
var node3 = new Node(1);
var node4 = new Node(5);
var node5 = new Node(16);
var node6 = new Node(3);
var node7 = new Node(21);
var node8 = new Node(18);
var node9 = new Node(0);
heap.add(node1);
heap.add(node2);
heap.add(node3);
heap.add(node4);
heap.add(node5);
heap.add(node6);
heap.add(node7);
heap.add(node8);
heap.add(node9);
console.log(heap);
console.log(heap.removeMin());
console.log(heap);
console.log(heap.removeMin());
console.log(heap);
