class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inorder(node) {
        if (node !== null || node.left !== undefined || node.right !== undefined) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    maxDepth(root) {
        if (root === null || root === undefined) {
            return 0;
        }
        let lHeight = maxDepth(root.left);
        let rHeight = maxDepth(root.right);
        if (lHeight < rHeight) {
            return rHeight + 1;
        } else {
            return lHeight + 1;
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const maxDepth = (root) => {
    if (root === null) {
        return 0;
    }
    let lHeight = maxDepth(root.left);
    let rHeight = maxDepth(root.right);
    if (lHeight < rHeight) {
        return rHeight + 1;
    } else {
        return lHeight + 1;
    }
}

module.exports = BST;