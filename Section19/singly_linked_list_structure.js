// 삽입 작업과 리스트 맨 앞 노드의 제거 작업이 빈번하다 -> 단방향 연결 리스트 > 어레이
// 어레이는 내장된 인덱스를 가지고 있는 반면 단방향 연결 리스트는 그렇지 않다
// 스택, 큐 등 단방향 연결 리스트를 기반으로 작성된 특수 목적의 자료구조

// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  // 리스트 맨 뒤에 새로운 데이터 추가
  push(val) {
    var newNode = new Node(val)
    if (!this.head ) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  // tail을 제거하고 tail 직전 데이터를 tail로 수정
  pop() {
    if (!this.head) return undefined
    var current = this.head
    var newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  // 리스트 맨 앞(head) 데이터 제거 후 리스트 두번째 데이터를 head로 수정
  shift() {
    if (!this.head) return undefined
    var currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currentHead 
  }
  // head 앞에 새로운 데이터 생성 후 head로 설정
  unshift(val) {
    var newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  // 인덱스 혹은 위치를 의미하는 숫자를 인자로 받아 계속 확인해나가면서 주어진 위치에 있는 노드 반환
  get(index) {
    if (index < 0 || index >= this.length) return null
    var counter = 0
    var current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }
  // 해당 인덱스에 위치한 노드를 업데이트
  set(index, val) {
    var foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }
  // 주어진 노드를 어느 위치던 삽입
  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(val)
    // return !!~~ -> boolean 값으로 반환
    if (index === 0) return !!this.unshift(val)
    var newNode = new Node(val)
    var prev = this.get(index - 1)
    var temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
    return true
  }
  // 주어진 인덱스에 있는 노드를 삭제 후 양 옆 노드 연결
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    var previousNode = this.get(index - 1)
    var removed = previousNode.next
    previousNode.next = removed.next
    this.length--
    return removed
  }
  // 리스트의 순서를 역전
  reverse() {
    var node = this.head
    this.head = this.tail
    this.tail = node
    var next
    var prev = null
    for (var i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
  // reverse를 쉽게 보기위한 보조수단
  print() {
    var arr = []
    var current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
// push
// list.push("HELLO")
// list.push("GOODBYE")
// list.push("!")
// list.push("<3")
// list.push(":)")
// console.log(list)


// pop
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
// console.log(list)

// shift
// console.log(list.shift())
// console.log(list)

// unshift
// console.log(list.unshift("FIRST"))

// get
// console.log(list.get(3))

// set
// console.log(list.set(2, "!!"))
// console.log(list.get(2))

// insert
// list.push(100)
// list.push(201)
// list.push(250)
// list.push(350)
// list.insert(3, 225)
// console.log(list)

// remove
// list.push(100)
// list.push(201)
// list.push(250)
// list.push(350)
// list.remove(2)
// console.log(list)

// reverse
list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.print()
list.reverse()
list.print()

// Big O
  // insertion - O(1)
  // Removal - O(1) or O(n)
  // Searching - O(n)
  // Access - O(n)