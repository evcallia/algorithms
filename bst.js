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
                        rAdd(current.left);
                    }else{
                        current.left = node;
                    }
                }else{
                    if(current.right){
                        rAdd(current.right)
                    }else{
                        current.right = node;
                    }
                }
            }
            rAdd(this.root);
        }
    }

    find(val){
        if(this.root){
            function rFind(val, node){
                if(val == node.val){
                    console.log('return', node);
                    return node;
                }else if(val < node.val && node.left){
                    return rFind(val, node.left);
                }else if(node.right){
                    return rFind(val, node.right);
                }
                // return null;
            }
            return rFind(val, this.root);
        }
        return null;
    }

    height(node = this.root){
        if(!node){
            return 0;
        }
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }
}

var myBST = new BindarySearchTree();
myBST.add(new Node(4))
myBST.add(new Node(4))
console.log(myBST);





//
