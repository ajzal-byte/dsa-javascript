const LinkedList = require('../Linked List/linkedListwithTail');

class LinkedListQueue {
  constructor(){
    this.list = new LinkedList();
  }

  enqueue(value){
    return this.list.append(value);
  }

  dequeue(){
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


const queue = new LinkedListQueue();
console.log('size: ' + queue.getSize());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display()
console.log('size: ' + queue.getSize());
queue.dequeue();
console.log('size: ' + queue.getSize());
queue.display();
