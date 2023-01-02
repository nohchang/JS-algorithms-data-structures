// Depth First Search Tree
// DFS in BST structure
  // 완전히 넓게 펼쳐져서 아래까지 뻗어나가는 트리
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
  // root부터 수직적, 왼쪽 우선으로 단계별 탐색
  DFSPreOrder() {
    var data = []
    var current = this.root
    function traverse(node) {
      // data.push(node)
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(current)
    // current 변수 선언하지않고 아래 코드만 사용 가능
    // traverse(this.root)
    return data
  }
  // 왼쪽 모든 자식들을 탐색 후 오른쪽 모든 자식을 탐색하고 root 탐색
  DFSPostOrder() {
    var data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      // data.push(node)
      data.push(node.value)
    }
    traverse(this.root)
    return data
  }
  // 왼쪽부터 자식과 부모를 탐색 후 root를 탐색하고 오른쪽 부모 노드 탐색 후 자식 노드 탐색
  DFSInOrder() {
    var data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      // data.push(node)
      data.push(node.value)
      if (node.right) traverse(node.right)
      /* 축약하고 싶다면..
      node.left && traverse(node.left)
      data.push(node.value)
      node.right && traverse(node.right)
      */
    }
    traverse(this.root)
    return data
  }
}

var tree = new BinarySearchTree()

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

//     10
//  6     15
//3   8     20

console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())