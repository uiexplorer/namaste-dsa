/**
 * Create a MaxHeap class & implement insert elements method.
 */

class MaxHeap {
  constructor(elements) {
    this.heap = [];
    if (elements && elements.length) {
      for (let index = 0; index < elements.length; index++) {
        this.insert(elements[index]);
      }
    }
  }

  insert(element) {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }

  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);
  getLeftChildIndex = (parentIndex) => (2 * parentIndex) + 1;
  getRightChildIndex = (parentIndex) => (2 * parentIndex) + 2;

  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[index] > this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      } else break;
    }
  }

  heapifyDown(index, limit) {
    const leftChildIndex = this.heap.length > 0 ? this.getLeftChildIndex(index) : null;
    const rightChildIndex = this.heap.length > 1 ? this.getRightChildIndex(index) : null;
    let largestIndex = index;

    if (leftChildIndex < limit && this.heap[leftChildIndex] > this.heap[largestIndex]) {
      largestIndex = leftChildIndex;
    }

    if (rightChildIndex < limit && this.heap[rightChildIndex] > this.heap[largestIndex]) {
      largestIndex = rightChildIndex;
    }

    if (largestIndex !== index) {
      [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];
      this.heapifyDown(largestIndex, limit);
    }
  }

  sort() {
    for (let index = this.heap.length - 1; index > 0; index--) {
      [this.heap[0], this.heap[index]] = [this.heap[index], this.heap[0]];
      this.heapifyDown(0, index);
    }
  }
}

const myHeapInstance = new MaxHeap();
myHeapInstance.insert(4);
myHeapInstance.insert(10);
myHeapInstance.insert(3);
myHeapInstance.insert(5);
myHeapInstance.insert(1);
console.log('DEBUG: myHeapInstance.heap:', myHeapInstance.heap);
myHeapInstance.sort();
console.log('DEBUG: myHeapInstance.heap:', myHeapInstance.heap);
const myHeapInstance2 = new MaxHeap([1, 4, 10, 5, 3, 7, 9, 2]);
console.log('DEBUG: myHeapInstance2.heap:', myHeapInstance2.heap);
myHeapInstance2.sort();
console.log('DEBUG: myHeapInstance2.heap:', myHeapInstance2.heap);

