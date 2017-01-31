var Stack = require('./stack.js');

class Node{
    constructor(i,v){
        this.idx = i;
        this.val = v;
        this.searched = false;
    }
}

class EdgeNode{
    constructor(n, w){
        this.node = n;
        this.weight = w;
    }
}

class AdjacencyListGraph{
    constructor(){
        this.vertexes = [];
        this.adjacencyList = [];
    }

    addVertex(val){
        var new_node = new Node(this.vertexes.length, val);
        this.vertexes.push(new_node);
        this.adjacencyList.push([]);
        return new_node;
    }

    addEdge(startNode, endNode, weight){
        var arr = this.adjacencyList[startNode.idx];
        for(var i = 0; i < arr.length; i++){
            if(arr[i].node == endNode){
                return false;
            }
        }
        arr.push(new EdgeNode(endNode, weight));
        return true;
    }

    removeVertex(node){
        this.vertexes.splice(node.idx, 1);
        this.adjacencyList.splice(node.idx, 1);
        for (var i = node.idx; i < this.vertexes.length; i++) {
            this.vertexes[i].idx -= 1;
        }
        for (var i = 0; i < this.adjacencyList.length; i++) {
            for (var j = 0; j < this.adjacencyList[i].length; j++) {
                if(this.adjacencyList[i][j].node == node){
                    this.adjacencyList[i].splice(j, 1);
                    j--;
                }
            }
        }
    }

    isConnected(startNode, endNode){
        var connected = false;
        var stack = new Stack();
        startNode.searched = true;
        stack.push(startNode);
        while(!stack.isEmpty()){
            var current = stack.pop();
            if(current == endNode){
                connected = true;
                break;
            }
            for (var i = 0; i < this.adjacencyList[current.idx].length; i++) {
                var node = this.adjacencyList[current.idx][i].node;
                if(!node.checked){
                    node.checked = true;
                    stack.push(node);
                }
            }
        }
        this.resetChecked(startNode);
        return connected;
    }

    resetChecked(node){
        var stack = new Stack();
        stack.push(node);
        while(!stack.isEmpty()){
            var current = stack.pop();
            current.checked = false;
            for (var i = 0; i < this.adjacencyList[node.idx].length; i++) {
                var tempNode = this.adjacencyList[node.idx][i].node;
                if(node.checked){
                    node.checked = false;
                    stack.push(tempNode);
                }
            }
        }
    }
}


// var graph = new AdjacencyListGraph();
// var node1 = graph.addVertex(1);
// var node2 = graph.addVertex(2);
// var node3 = graph.addVertex(3);
// graph.addEdge(node1, node2);
// graph.addEdge(node2, node3);
// // graph.removeVertex(node3);
// console.log(graph);
// console.log(graph.isConnected(node1, node3));


/*
INTERVIEW QUESTION
Suppose we have some input data describing relationships between parents and children. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.
parentChildPairs =
    [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7],[4, 5], [4, 8], [8, 9]]
For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

 1   2     4
  \ /     / \
   3     5   8
    \   / \   \
     \ /   \   9
      6     7
Write a function that takes this data as input and outputs two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.
Sample output:
Zero parents: 1, 2, 4
One parent: 5, 7, 8, 9
Below is some sample data in JavaScript. Feel free to solve this problem in any language of your choice.
var parentChildPairs =
    [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [8, 9]];
*/

function parentChildren(arr){
    var dict = {};
    for(var i = 0; i < arr.length; i++){
        if(arr[i][0] in dict){
            // do nothing
        }else{
            dict[arr[i][0]] = 0;
        }
        arr[i][1] in dict ? dict[arr[i][1]] += 1 : dict[arr[i][1]] = 1;
    }
    var parent0 = [];
    var parent1 = [];
    for(key in dict){
        if(dict[key] == 0){
            parent0.push(key);
        }
        if(dict[key] == 1){
            parent1.push(key);
        }
    }
    return [parent0, parent1];
}


var Queue = require('./queue.js');
function CommonAncestor(arr, v1, v2){
    var q = new Queue();
    var dict = {};
    q.enqueue(v1);
    while(!q.isEmpty()){
        var child = q.dequeue();
        for(var i = 0; i < arr.length; i++) {
            if(arr[i][1] == child){
                if(!(arr[i][0] in dict)){
                    dict[arr[i][0]] = 0;
                }
                q.enqueue(arr[i][0]);
            }
        }
    }
    q.enqueue(v2);
    while(!q.isEmpty()){
        var child = q.dequeue();
        for (var i = 0; i < arr.length; i++) {
            if(arr[i][1] == child){
                if(arr[i][0] in dict){
                    return true;
                }
                q.enqueue(arr[i][0]);
            }
        }
    }
    return false;
}

// var arr = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7],[4, 5], [4, 8], [8, 9]]
// console.log(parentChildren(arr));
// console.log(CommonAncestor(arr, 5, 7));






//
