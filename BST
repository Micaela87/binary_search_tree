class BinarySearchTree {
    
    _root = null;
    
    constructor() {}
    
    get root() {
        return this._root;
    }
    
    insertNode(node) {
        
        const value = node.value;
        
        if (this._root === null) {
            this._root = node;
            this._root.right = node.right ? new Node(right) : node.right;
            this._root.left = node.left ? new Node(left) : node.left;
            return this._root;
        }
    }
    
    insertLeft(value, node) {
        
        while(node) {
            
            if (value > node.value) {
                return this.insertRight(value, node);
            }
            
            if (!node.left) {
                node.left = new Node(value);
                return node.left;
            }
            
            node = node.left;
        }
        
        return null;
    }
    
    insertRight(value, node) {
        
        while(node) {
            
            if (value < node.value) {
                return this.insertLeft(value, node);
            }
            
            if (!node.right) {
                node.right = new Node(value);
                return node.right;
            }
            
            node = node.right;
        }
        
        return null;
    }
    
    countMaxDepth(node) {
        if (!node) {
            return 0;
        }
        return Math.max(1 + this.countMaxDepth(node.left), 1 + this.countMaxDepth(node.right));
    }
}
