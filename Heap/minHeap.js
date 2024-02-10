// ======================================MIN HEAP====================================

class MinHeap{
  constructor(){
    this.heap = [];
  }

  //function to get parent index
  getParentIndex(i){
    return Math.floor((i -1)/2);
  }

  //function to get left child index
  getLeftChildIndex(i){
    return 2 * i +1;
  }

  //function to get right child index
  getRightChildIndex(i){
    return 2 * i +2;
  }

  //function to swap two elements in the heap
  swap(i1, i2){
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  //function to heapify up
  heapifyUp(i){
    const parentIndex = this.getParentIndex[i];
    if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[i]) {
      this.swap(i, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  //function to heapify down
  heapifyDown(i){
    const leftChildIndex = this.getLeftChildIndex(i);
    const rightChildIndex = this.getRightChildIndex(i);
    let minIndex = i;

    if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]){
      minIndex = leftChildIndex;
    }

    if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]){
      minIndex = rightChildIndex;
    }

    if (minIndex != i) {
      this.swap(i, minIndex);
      this.heapifyDown(minIndex);
    }

  }

  //function to insert a value to the heap
  insert(value){
    this.heap.push(value);
    this.heapifyUp(this.heap.length -1);
  }

  //function to remove the minimum element in the heap
  remove(){
    if (this.heap.length == 0) return null;
    if (this.heap.length == 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min; 
  }

  //funciton to perform heap sort
  heapSort(){
    const sortedArray = [];
    while (this.heap.length > 0) {
      sortedArray.push(this.remove());
    }
    return sortedArray;
  }

  //funciton to build heap from array
  buildHeapFromArray(arr){
    this.heap = arr;
    for (let i = Math.floor(arr.length/2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }
}

// ==================TEST CASES==================

const minHeap = new MinHeap();

minHeap.buildHeapFromArray([3, 7, 2, 1, 9, 8]);

console.log(minHeap.heap); // [1, 3, 2, 7, 9, 8]

console.log(minHeap.remove()); // 1

console.log(minHeap.heap); // [2, 3, 8, 7, 9]

console.log(minHeap.heapSort()); // [2, 3, 7, 8, 9]