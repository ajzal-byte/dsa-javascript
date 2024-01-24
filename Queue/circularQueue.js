class CircularQueue{
  constructor(capacity){
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
    this.capacity = capacity;
  }

  isFull(){
    return this.currentLength == this.capacity;
  }

  isEmpty(){
    return this.currentLength === 0; 
  }

  size(){
    return this.currentLength;
  }

  enqueue(item){
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }else{
      console.log('Queue is already full');
    }
  }

  dequeue(){
    if (this.isEmpty()) {
      return 'Queue is empty'
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek(){
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return "Queue is empty"
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

//Create new Queue
const myQueue = new CircularQueue(3);

// Check if the queue is empty
console.log("Is the queue empty?", myQueue.isEmpty());

// Peek the first element
console.log("First element: ", myQueue.peek());

//size of the queue
console.log('Size of queue: ', myQueue.size()); 

// Push elements onto the queue
myQueue.enqueue(5);
myQueue.enqueue(10);
myQueue.enqueue(15);

console.log("First element: ", myQueue.peek());


//size of the queue
console.log('Size of queue: ', myQueue.size());

// Display the queue's content
console.log("Queue after push operations:");
myQueue.print();