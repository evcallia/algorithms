
class Node {
    // constructs Node. Optional param: value for node
    constructor(v = null) {
        this.val = v;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    // constructs BST. Optional param: Node object
    constructor(r = null) {
        this.root = r;
    }

    // adds a node to the tree and balances
    // param: a Node object
    add(node, current = this.root){
        if(!this.root){
            return this.root = node;
        }
        if(!current){
            return node;
        }
        if(node.val < current.val){
            current.left = this.add(node, current.left);
        }else{
            current.right = this.add(node, current.right);
        }
        // Node has been added. Update height
        current.height = 1 + Math.max(this.height(current.left), this.height(current.right));
        // Check for balance
        var bal = this.height(current.left) - this.height(current.right);
        if(bal < -1 && node.val > current.right.val){
            if(current === this.root){
                return this.root = this.rotateLeft(current);
            }
            return this.rotateLeft(current);
        }
        if(bal < -1 && node.val < current.right.val){
            current.right = this.rotateRight(current.right);
            if(current === this.root){
                return this.root = this.rotateLeft(current);
            }
            return this.rotateLeft(current);
        }
        if(bal > 1 && node.val < current.left.val){
            if(current === this.root){
                return this.root = this.rotateRight(current);
            }
            return this.rotateRight(current);
            // return this.rotateRight(current);
        }
        if(bal > 1 && node.val > current.left.val){
            current.left = this.rotateLeft(current.left);
            if(current === this.root){
                return this.root = this.rotateRight(current);
            }
            return this.rotateRight(current);
        }
        // If balanced return unchanged node
        return current;
    }

    // returns the first node matching the given value
    // params: value of the node to find
    find(val){
        if(this.root){
            function rFind(node){
                if(val == node.val){
                    return node;
                }else if(val < node.val && node.left){
                    return rFind(node.left);
                }else if(node.right){
                    return rFind(node.right);
                }
                return null;
            }
            return rFind(this.root);
        }
        return null;
    }

    // returns height of the BST or node passed in
    height(node = this.root){
        if(!node){
            return 0;
        }
        return node.height;
    }

    // balances node by rotating nodes to the right
    rotateRight(node){
        var nodeL = node.left;
        node.left = nodeL.right;
        nodeL.right = node;

        //update heights
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
        nodeL.height = 1 + Math.max(this.height(nodeL.left), this.height(nodeL.right));

        return nodeL;
    }

    // balances node by rotating nodes to the left
    rotateLeft(node){
        var nodeR = node.right;
        node.right = nodeR.left;
        nodeR.left = node;

        //update heights
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
        nodeR.height = 1 + Math.max(this.height(nodeR.left), this.height(nodeR.right));

        return nodeR;
    }
}

var myAVL = new AVLTree();
myAVL.add(new Node(3));
myAVL.add(new Node(2));
myAVL.add(new Node(1));
myAVL.add(new Node(-1));
myAVL.add(new Node(-.5));
console.log(myAVL);
console.log(myAVL.find(-.5));
console.log(myAVL.height());





//
