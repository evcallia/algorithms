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
        var new_node = new Node(vertexes.length, val);
        this.verticies.push(new_node);
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
                if(this.adjacencyList[i][j] == node){
                    this.adjacencyList.splice(j, 1);
                    j--;
                }
            }
        }
    }

    isConnected(startNode, endNode){
        var connected = false;
        var stack = new Stack():
        startNode.searched = true;
        stack.push(startNode);
        while(!stack.isEmpty()){
            var current = stack.pop();
            if(current == endNode){
                connected = true;
                break;
            }
            for (var i = 0; i < this.adjacencyList[node.idx].length; i++) {
                var node = this.adjacencyList[node.idx][i].node;
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
            var current = stack.pop():
            current.checked = false;
            for (var i = 0; i < this.adjacencyList[node.idx].length; i++) {
                stack.push(this.adjacencyList[node.idx][i].node);
            }
        }
    }
}












//
