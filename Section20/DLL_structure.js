// doubly linked list
// 검색 기록 (뒤로가기, 앞으로가기)

class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    var newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    var poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }
  shift() {
    if (this.length === 0) return undefined
    var oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }
  unshift(val) {
    var newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if (index < 0 || index >= this.length) return null
    var count, current
    if (index <= this.length / 2) {
      console.log("WORKING FROM START")
      count = 0
      current = this.head
      while (count !== index) {
        current = current.next
        count++
      }
    } else {
      console.log("WORKING FROM END")
      count = this.length - 1
      current = this.tail
      while (count !== index) {
        current = current.prev
        count--
      }
    }
    return current
  }
  set(index, val) {
    var foundNode = this.get(index)
    if (foundNode != null) {
      foundNode.val = val
      return true
    }
    return false
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)

    var newNode = new Node(val)
    var beforeNode = this.get(index - 1)
    var afterNode = beforeNode.next

    beforeNode.next = newNode, newNode.prev = beforeNode
    newNode.next = afterNode, afterNode.prev = newNode
    this.length++
    return true
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    var removedNode = this.get(index)
    var beforeNode = removedNode.prev
    var afterNode = removedNode.next

    beforeNode.next = afterNode
    afterNode.prev = beforeNode
    // removedNode.prev.next = removedNode.next
    // removedNode.next.prev = removedNode.prev
    removedNode.next = null
    removedNode.prev = null
    this.length--
    return removedNode
  }
}

var list = new DoublyLinkedList()

//push
list.push(99)
list.push(100)
list.push(101)
// console.log(list)

// pop
// list.pop()
// console.log(list)

// shift
// list.shift()
// console.log(list)

// unshift
// list.unshift(98)
// console.log(list)

// get
// console.log(list.get(2))

// set
// list.set(2, 102)
// console.log(list)

// insert
// list.insert(3, 102)
// console.log(list)

// remove
list.remove(1)
console.log(list)

// Big O
  // insertion - O(1)
  // Removal - O(1)
  // Searching - O(n)
  // Access - O(n)
  // Technically searching - O(n/2) or O(N)