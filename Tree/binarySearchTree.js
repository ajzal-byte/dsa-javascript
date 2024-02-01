class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  isEmpty(){
    return this.root == null;
  }

  insert(value){
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    }else{
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node){
    if (node.value < root.value) {
      if (root.left == null) {
        root.left = node;
      }else{
        this.insertNode(root.left, node);
      }
    }else{
      if (root.right == null) {
        root.right = node;
      }else{
        this.insertNode(root.right, node);
      }
    }
  }

  search(root, value){
    if(!root) return false;
    if (root.value == value) return true;
    if (value < root.value) return this.search(root.left, value);
    if (value > root.value) return this.search(root.right, value);
  }

  preOrder(root){
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root){
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root){
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder(){
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root){
    if (!root.left) return root.value;
    return this.min(root.left);
  }

  max(root){
    if(!root.right) return root.value;
    return this.max(root.right);
  }

  delete(value){
    this.root = this.deleteNode(this.root, value); 
  }

  deleteNode(root, value){
    if (root == null) return root;
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if(value > root.value) {
      root.right = this.deleteNode(root.right, value);
    }else{
      if (!root.left && !root.rigt) return null;
      if(!root.left) return root.right;
      if(!root.right) return root.left;
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  isBST(node, min = -Infinity, max = Infinity){
    if(!node) return true;
    if(node.value < min || node.value > max) return false;
    return (this.isBST(node.left, min, node.value) && this.isBST(node.right, node.value, max));
  }
}



const bst = new BinarySearchTree();
console.log('is Empty: ', bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log('is Empty: ', bst.isEmpty());

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 4));

console.log("Preorder Traversal:");
bst.preOrder(bst.root);
console.log('----------------------');
console.log("Inorder Traversal:");
bst.inOrder(bst.root);
console.log('----------------------');
console.log("Postorder Traversal:");
bst.postOrder(bst.root);
console.log('------------------------');
console.log("LevelOrder Traversal");
bst.levelOrder();


console.log('----------------------');
bst.delete(10);
console.log("Preorder Traversal:");


bst.preOrder(bst.root);
console.log('Smallest value in the tree: ', bst.min(bst.root));
console.log('Largest value in the tree: ', bst.max(bst.root));

console.log("Is BST: ", bst.isBST(bst.root));