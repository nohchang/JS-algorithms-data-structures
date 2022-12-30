// binary searching tree structure

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    var newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    } else {
      var current = this.root
      while (true) {
        // 같은 수가 들어오면 해당 수의 빈도나 카운트를 올려도됨
        if (value === current.value) return undefined
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode
            return this
          } else {
            current = current.right
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false
    var current = this.root
    var found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    if (!found) return undefined
    return current
  }
  contains(value) {
    if (this.root === null) return false
    var current = this.root
    var found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return true
      }
    }
    return false
  }
}

var tree = new BinarySearchTree()

// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)
// console.log(tree)

// insert
//     10
//  5     13
//2  7  11  16
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
// console.log(tree)

// find
console.log(tree.find(5))

// Big O
  // Insertion - O(log n)
  // Searching - O(log n)