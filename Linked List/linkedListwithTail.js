class Node{
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty(){
    return this.size == 0;
  }

  getSize(){
    return this.size;
  }

  print(){
    if (this.isEmpty()) {
      console.log('List is empty');
    }else{
      let curr = this.head;
      let listValues = '';
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }

  prepend(value){
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    }else{
      node.next = this.head;
      this.head = node;
    }
    this.size++
  }

  append(value){
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    }else{
      this.tail.next = node;
      this.tail = node;
    }
    this.size++
  }

  removeFromFront(){
    if (this.isEmpty()) {
      console.log('List is empty');
      return;
    }
    const removedNode = this.head;
    this.head = this.head.next;
    this.size--
    console.log(`${removedNode.value} has been removed`);
  }

  removeFromEnd(){
    if (this.isEmpty()) {
      console.log('List is empty');
      return;
    }
    const removedNode = this.tail;
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    }else{
      let prev = this.head;
      while (prev.next != this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    console.log(`${removedNode.value} has been removed`);
  }
}

const list = new LinkedList();
console.log('is List Empty: ', list.isEmpty());
console.log('Size of List : ', list.getSize()); 
list.print();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print();
list.removeFromFront()
list.print()
list.removeFromEnd()
list.print()
console.log('Size of List : ', list.getSize());

