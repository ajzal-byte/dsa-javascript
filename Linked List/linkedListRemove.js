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

  insert(value, index){
    if (index < 0 || index > this.size) {
      console.log('Invalid Index');
    }else if(index == 0){
      this.prepend(value)
    }else{
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index -1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++
    }
  }

  removeFrom(index){
    if (index < 0 || index > this.size) {
      console.log('Invlaid Index');
      return;
    }
    let removedNode;
    if (index == 0) {
      removedNode = this.head;
      this.head = this.head.next;
      console.log(removedNode.value);;
    }else{
      let prev = this.head
      for (let i = 0; i < index -1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
      console.log(removedNode.value);;
    }
    this.size--
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
// console.log('is List Empty: ', list.isEmpty());
// console.log('Size of List : ', list.getSize());
// list.print();
list.insert(10, 0);
list.print();
list.insert(20, 0);
list.print()
list.insert(30, 1);
list.print();
list.insert(40, 2);
list.print();


console.log(list.getSize());
list.removeFrom(10);

list.removeFrom(0);
list.print();

list.removeFrom(1);

console.log(list.getSize());
list.print();
