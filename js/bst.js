var Stack = require('./stack.js')

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
    // add(node){
    //     if(!this.root){
    //         this.root = node;
    //     }else{
    //         function rAdd(current){
    //             if(node.val < current.val){
    //                 if(current.left){
    //                     return rAdd(current.left);
    //                 }
    //                 current.left = node;
    //             }else{
    //                 if(current.right){
    //                     return rAdd(current.right)
    //                 }
    //                 current.right = node;
    //             }
    //         }
    //         rAdd(this.root);
    //     }
    // }
    // adds a node to the tree non-recursively
    // param: a Node object
    add(node){
        if(!this.root){
            this.root = node;
        }else{
            var current = this.root;
            var flag = true;
            while(flag){
                if(node.val < current.val){
                     if(current.left){
                         current = current.left;
                     }else{
                         flag = false;
                         current.left = node;
                     }
                }else{
                    if(current.right){
                        current = current.right;
                    }else{
                        flag = false;
                        current.right = node;
                    }
                }
            }
        }
    }

    // returns the first node matching the given value
    // params: value of the node to find
    // find(val){
    //     if(this.root){
    //         function rFind(node){
    //             if(val == node.val){
    //                 return node;
    //             }else if(val < node.val && node.left){
    //                 return rFind(node.left);
    //             }else if(node.right){
    //                 return rFind(node.right);
    //             }
    //             return null;
    //         }
    //         return rFind(this.root);
    //     }
    //     return null;
    // }
    // returns the first node matching the given value non-recursively
    // params: value of the node to find
    find(val){
        if(this.root){
            var current = this.root;
            while(current){
                if(current.val == val){
                    return current;
                }
                if(val < current.val){
                    current = current.left;
                }else{
                    current = current.right;
                }
            }
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

    // returns true of false, wheather or not the bst is empty
    isEmpty(){
        return this.root == null;
    }

    // returns the node with the smallest value
    min(){
        if(this.root){
            var current = this.root;
            while(current.left){
                current = current.left;
            }
            return current;
        }
        return null;
    }

    // returns the node with the largest value
    max(){
        if(this.root){
            var current = this.root;
            while(current.right){
                current = current.right;
            }
            return current;
        }
        return null;
    }

    // return the total number of nodes in the bst
    size(){
        var size = 0;
        function rSize(node){
            if(node){
                ++size;
                rSize(node.left);
                rSize(node.right);
            }
        }
        rSize(this.root);
        return size;
    }

    //Prints tree in order recursively -> small to large
    rPrintInOrder(node = this.root){
        if(node){
            this.rPrintInOrder(node.left);
            console.log(node.val);
            this.rPrintInOrder(node.right);
        }
    }

    //Prints tree in order non-recursively -> small to large
    printInOrder(){
        if(this.root){
            var stack = new Stack(),
                current = this.root;
            stack.push(current);
            while(!stack.isEmpty()){
                if(current && current.left){
                    stack.push(current.left);
                    current = current.left;
                }else{
                    current = stack.pop();
                    console.log(current.val);
                    if(current.right){
                        stack.push(current.right);
                    }
                    current = current.right;
                }
            }
        }
    }

    //Prints tree in pre-order recursively
    rPrintPreorder(node = this.root){
        if(node){
            console.log(node.val);
            this.rPrintPreorder(node.left);
            this.rPrintPreorder(node.right);
        }
    }

    printPreorder(){
        if(this.root){
            var stack = new Stack(),
                current = this.root;
            stack.push(current);
            while(!stack.isEmpty()){
                if(current){
                    console.log(current.val);
                    if(current.left){
                        stack.push(current);
                    }
                    current = current.left;
                }else{
                    current = stack.pop().right;
                }
            }
        }
    }

    //Prints tree in post-order recursively
    rPrintPostorder(node = this.root){
        if(node){
            this.rPrintPreorder(node.left);
            this.rPrintPreorder(node.right);
            console.log(node.val);
        }
    }

    printPostorder(){
        if(this.root){
            var stack = new Stack(),
                current = this.root;
            stack.push(current);
            // TODO: Fix while loop
            // while(!stack.isEmpty()){
            //     if(current){
            //         if(current.left){
            //             stack.push(current);
            //         }
            //         current = current.left;
            //     }else{
            //         current = stack.pop();
            //         if(current.right){
            //             // stack.push(current);
            //             stack.push(current.right)
            //             current = current.right;
            //         }else{
            //             console.log(current.val);
            //             current = null;
            //         }
            //     }
            // }
        }
    }
}

var myBST = new BindarySearchTree();
myBST.add(new Node(5));
myBST.add(new Node(3));
myBST.add(new Node(7));
myBST.add(new Node(6));
myBST.add(new Node(8));
myBST.add(new Node(4));
myBST.add(new Node(2));
myBST.add(new Node(1));
// console.log(myBST);
// console.log(myBST.find(5));
// console.log(myBST.height());
// console.log(myBST.isEmpty());
// console.log(myBST.min());
// console.log(myBST.max());
// console.log(myBST.size());
// myBST.rPrintInOrder();
// myBST.printInOrder();
// myBST.rPrintPreorder();
// myBST.printPreorder();
myBST.rPrintPostorder();
console.log("**");
myBST.printPostorder();





//
