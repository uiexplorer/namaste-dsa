/**
 * Create a MinHeap class & implement insert elements method.
 */

class MinHeap {
  constructor(elements) {
    this.heap = elements;
  }

  getLeftChildIndexByParentsIndex = (parentIndex) => (2 * parentIndex) + 1;
  getRightChildIndexByParentsIndex = (parentIndex) => (2 * parentIndex) + 2;

  extract() {
    if (!this.heap.length) return null;
    const min = this.heap.shift();
    this.heap.unshift(this.heap.pop());
    this.heapifyDown(0);
    return min;
  }

  heapifyDown(index) {
    const left = this.getLeftChildIndexByParentsIndex(index);
    const right = this.getRightChildIndexByParentsIndex(index);
    let smallest = index;
    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== index) {
      [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
      this.heapifyDown(smallest);
    }
  }

  peek() {
    return this.heap[0] ?? null;
  }
}

const myHeapInstance = new MinHeap([3, 5, 7, 8, 6, 10, 9]);
console.log('DEBUG: extract:', myHeapInstance.extract());
console.log('DEBUG: peek:', myHeapInstance.peek());
console.log('DEBUG: myHeapInstance.heap:', myHeapInstance.heap);
