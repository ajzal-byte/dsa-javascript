class Node{
  constructor(value, next = null){
    this.value = value;
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

  // O(1)
  prepend(value){
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    }else{
      node.next = this.head;
      this.head = node;
    }
    this.size++
  }

  print(){
    if (this.isEmpty()) {
      console.log("List is empty");
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
}

const list = new LinkedList();
console.log('is List Empty: ', list.isEmpty());
console.log('Size of List : ', list.getSize());
list.print();
list.prepend(10);
list.print();
list.prepend(20);
list.prepend(30);
list.print();
