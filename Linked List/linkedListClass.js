// ======================================LINKED LIST====================================

class Node{
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  isEmpty(){
    return this.size == 0;
  }

  getSize(){
    return this.size;
  }
}

// ==========================TEST CASES==========================

const list = new LinkedList();
console.log('is List Empty: ', list.isEmpty());
console.log('Size of List : ', list.getSize());
