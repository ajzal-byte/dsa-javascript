class Queue{
  constructor(){
    this.items = [];
  }

  enqueue(element){
    this.items.push(element);
  }

  dequeue(){
    if (!this.isEmpty()) {
    return this.items.shift();
    }else{
      return "Queue is empty"
    }
  }

  peek(){
    if (!this.isEmpty()) {
    return this.items[0];
    }else{
        return "Queue is empty"
    }
  }

  isEmpty(){
    return this.items.length == 0;
  }

  print(){
    console.log(this.items);
  }
}

//Create new Queue
const myQueue = new Queue();

// Check if the stack is empty
console.log("Is the stack empty?", myQueue.isEmpty());

// Peek the first element
console.log("First element: ", myQueue.peek());

// Push elements onto the stack
myQueue.enqueue(5);
myQueue.enqueue(10);
myQueue.enqueue(15);

// Display the stack's content
console.log("Stack after push operations:");
myQueue.print();

// Peek the first element
console.log("First element: ", myQueue.peek());

// Pop an element
const poppedElement = myQueue.dequeue();
console.log("Popped element:", poppedElement);

// Check if the stack is empty
console.log("Is the stack empty?", myQueue.isEmpty());

// Display the stack's content after pop
console.log("Stack after dequeue operation:");
myQueue.print();