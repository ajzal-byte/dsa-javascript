// Write a program to Calculate Size of a tree | Recursion

class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor(){
    this.root = null;
  }

  size(node = this.root){
    if(node == null) return 0;
    return this.size(node.left) + this.size(node.right) +1;
  }
}