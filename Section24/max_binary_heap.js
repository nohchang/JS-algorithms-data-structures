// Max Heap은 각 부모 노드가 자식 노드보다 항상 큰 값이어야 한다
// 항상 최적의 공간 사용(각 부모 노드에 대한 자식 노드 다 채움)
// 왼쪽 자식부터 채움

class MaxBinaryHeap {
  constructor() {
    // this.values = [41,39,33,18,27,12]
    this.values = []
  }
  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }
  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element <= parent) break 
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }
  extractMax() {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }
  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild > element) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
            (swap === null && rightChild > element) || 
            (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx
        }
      }
      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}

let heap = new MaxBinaryHeap()

// console.log(heap.insert(55))
// // [41,39,33,18,27,12,55]
// //  0  1  2  3  4  5  6
// // bubble up
// // [41,39,55,18,27,12,33]
// // [55,39,41,18,27,12,33]
// console.log(heap.values)

console.log(heap.insert(41))
console.log(heap.insert(39))
console.log(heap.insert(33))
console.log(heap.insert(18))
console.log(heap.insert(27))
console.log(heap.insert(12))
console.log(heap.insert(55))
// [55,39,41,18,27,12,33]
console.log(heap.extractMax())
// [41,39,33,18,27,12]
console.log(heap.values)

// Big O
  // Insertion - O(log n)
  // Removal - O(log n)
  // Search - O(n)