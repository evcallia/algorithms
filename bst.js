class Node {
    // constructs Node. Optional param: value for node
    constructor(v = null) {
        this.val = v;
        this.left = null;
        this.right = null;
    }
}

class BindarySearchTree {
    // constructs BST. Optional param: Node object
    constructor(r = null) {
        this.root = r;
    }
    // adds a node to the tree
    // param: a Node object
    add(node){
        if(!this.root){
            this.root = node;
        }else{
            function rAdd(current){
                if(node.val < current.val){
                    if(current.left){
                        return rAdd(current.left);
                    }
                    current.left = node;
                }else{
                    if(current.right){
                        return rAdd(current.right)
                    }
                    current.right = node;
                }
            }
            rAdd(this.root);
        }
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
    // returns height of the BST
    height(node = this.root){
        if(!node){
            return 0;
        }
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }
}

var myBST = new BindarySearchTree();
myBST.add(new Node(4));
myBST.add(new Node(5));
myBST.add(new Node(3));
myBST.add(new Node(2));
myBST.add(new Node(9));
console.log(myBST);
console.log(myBST.find(5));
console.log(myBST.height());





//
