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


var graph = new AdjacencyListGraph();
var node1 = graph.addVertex(1);
var node2 = graph.addVertex(2);
var node3 = graph.addVertex(3);
graph.addEdge(node1, node2);
graph.addEdge(node2, node3);
// graph.removeVertex(node3);
console.log(graph);
console.log(graph.isConnected(node1, node3));









//
