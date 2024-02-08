// Given a binary search tree and a target node K. The task is to find the node with a minimum absolute difference with the given target value K.

function closest(tree, target) {
  let currentNode = tree;
  let closest = Infinity;
  while(currentNode){
    if (Maths.abs(target - currentNode) < Maths.abs(target - closest)) {
      closest = currentNode.value;
    }
    if (currentNode.value > target) {
      currentNode = currentNode.left;
    }else{
      currentNode = currentNode.right;
    }
  }
  return closest;
}