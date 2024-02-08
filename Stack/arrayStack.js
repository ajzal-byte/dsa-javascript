// ======================================STACK====================================
class Stack {
  constructor() {
      this.items = []
  }

  push(element) {
      this.items.push(element)
  }

  pop() {
      if (this.items.length === 0) {
          return 'Underflow - The stack is empty.'
      }
      return this.items.pop()
  }

  peek(){
    if (!this.isEmpty()) {
    return this.items[0];
    }else{
        return "Stack is empty"
    }
  }

  isEmpty() {
      return this.items.length === 0
  }

  print() {
      console.log(this.items)
  }
}

  // ==========================TEST CASES==========================

// Create a new stack
const myStack = new Stack();

// Check if the stack is empty
console.log("Is the stack empty?", myStack.isEmpty());

// Push elements onto the stack
myStack.push(5);
myStack.push(10);
myStack.push(15);

// Display the stack's content
console.log("Stack after push operations:");
myStack.print();

// Peek the first element
console.log("First element: ", myStack.peek());

// Pop an element
const poppedElement = myStack.pop();
console.log("Popped element:", poppedElement);

// Check if the stack is empty
console.log("Is the stack empty?", myStack.isEmpty());

// Display the stack's content after pop
console.log("Stack after pop operation:");
myStack.print();