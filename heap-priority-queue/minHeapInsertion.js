/**
 * Create a MinHeap class & implement insert elements method.
 */

class MinHeap {
  constructor(elements) {
    this.heap = elements ?? [];
  }

  insert(element) {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }

  getParentsIndexByChildIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  heapifyUp(index) {
    while (index > 0) {
      let newElement = this.heap[index];
      let parentIndex = this.getParentsIndexByChildIndex(index)
      let parentElement = this.heap[parentIndex];
      if (parentElement > newElement) {
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        index = parentIndex
      } else break;
    }
  }
}

// const myHeapInstance = new MinHeap([2, 5, 8, 10]);
const myHeapInstance = new MinHeap();
myHeapInstance.insert(2);
myHeapInstance.insert(5);
myHeapInstance.insert(8);
myHeapInstance.insert(10);
myHeapInstance.insert(1);
console.log('DEBUG: myHeapInstance.heap:', myHeapInstance.heap);
