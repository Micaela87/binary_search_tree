class BinarySearchTree {
    
    _root = null;
    values = [];
    
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

    search(value, node) {
        
        if (node) {
            
            if (node.value === value) {
                this.values.push(value);
            }
            
            return this.search(value, node.left) && this.search(value, node.right);
            
        }
        
        return this.values;
    }
    
    compareStructure(node1, node2) {
        
        if (!node1 && !node2) {
            return true;
        }
        
        if (!node1 || !node2) {
            return false;
        }
        
        if (node1.value !== node2.value) {
            return false;
        }
            
        return this.compareStructure(node1.left, node2.left) && this.compareStructure(node1.right, node2.right);

    }
    
    countMaxDepth(node) {
        if (!node) {
            return 0;
        }
        return Math.max(1 + this.countMaxDepth(node.left), 1 + this.countMaxDepth(node.right));
    }
}
