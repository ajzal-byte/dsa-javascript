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

  // O(n)
  append(value){
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    }else{
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
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
list.append(10);
list.print();
list.append(20);
list.append(30);
list.print();
