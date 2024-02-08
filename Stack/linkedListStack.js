// ======================================STACK====================================

const LinkedList = require('../Linked List/linkedListwithTail');

class LinkedListStack {
  constructor(){
    this.list = new LinkedList();
  }

  push(value){
    return this.list.prepend(value);
  }

  pop(){
    return this.list.removeFromFront();
  }

  peek(){
    return this.list.head.value;
  }

  isEmpty(){
    return this.list.isEmpty();
  }

  getSize(){
    return this.list.getSize();
  }

  display(){
    return this.list.print();
  }
}

// ==========================TEST CASES==========================

const stack = new LinkedListStack();
console.log(`is stack empty:` + stack.isEmpty());
console.log('size: ' + stack.getSize());
stack.push(20)
stack.push(40)
stack.push(60)
console.log('size: ' + stack.getSize());
stack.display()
stack.pop()
console.log('size: ' + stack.getSize());
stack.display()
console.log(stack.peek());