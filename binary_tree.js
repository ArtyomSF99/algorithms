const res = []

class BinaryTree {
    constructor() {
        this.root = null
    }

    add(value) {
        if (!this.root) {
            this.root = new TreeNode(value)
        } else {
            let node = this.root
            let newNode = new TreeNode(value)
            while (node) {
                if (value >= node.value) {
                    if (!node.right) {
                        break
                    }
                    node = node.right
                } else {
                    if (!node.left) {
                        break
                    }
                    node = node.left
                }
            }
            if (value >= node.value) {
                node.right = newNode
            } else {
                node.left = newNode
            }
        }

       
    }

    preOrder(node, callback){
        if(!node){
            return;
        }
        if(callback){
            callback(node)
        }
        this.preOrder(node.left, callback)
        this.preOrder(node.right, callback)
    }
    inOrder(node, callback){
        if(!node){
            return;
        }
        
        this.preOrder(node.left, callback)
        if(callback){
            callback(node)
        }
        this.preOrder(node.right, callback)
    }
    postOrder(node, callback){
        if(!node){
            return;
        }
        
        this.preOrder(node.left, callback)
    
        this.preOrder(node.right, callback)
        if(callback){
            callback(node)
        }
    }

    traverseDFS(callback, method) {
            if(method === 'preOrder'){
                return this.preOrder(this.root, callback)
            }

            if(method === 'inOrder'){
                return this.inOrder(this.root, callback)
            }
            return this.postOrder(this.root, callback)
    }

    traverseBFS(callback){                  
        const queue = [this.root]

        while(queue.length){
            const node = queue.shift();
            callback(node);
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
    }
    print(root = this.root) {
        if (!root) {
            return true;
        }
        res.push(root.value)
        this.print(root.left)
        this.print(root.right)
    }
}

class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


const tree = new BinaryTree()
tree.add(5)
tree.add(2)
tree.add(6)
tree.add(1)
tree.add(7)
tree.add(8)
tree.add(4)
tree.add(3)

tree.print()

//console.log(tree)

tree.traverseDFS((node) => {
    console.log(node.value)
}, 'postOrder')
