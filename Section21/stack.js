// LIFO data structure
// stack은 후입선출 원칙에 따라 데이터를 추가하고 제거하는 데이터 구조

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val) {
    var newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      var temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    return ++this.size
  }
  pop() {
    if (!this.first) return null
    var temp = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
  }
}


var stack = new Stack()

console.log(stack.push(23))
console.log(stack.push(24))
console.log(stack.push(25))
console.log(stack)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())


// Big O
  // Insertion - O(1)
  // Removal - O(1)
  // Searching - O(n)
  // Access - O(n)

/* 예시
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(maxSize = 10) {
    this.maxSize = maxSize;
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(value) {
    if (this.isFull()) {
      console.log('Stack OverFlow!!');
      return;
    }
    const newNode = new Node(value);

    if (this.size === 0) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size += 1;
    return this.size;
  }

  pop() {
    if (this.isEmpty()) return null;
    const temp = this.top;

    if (this.top === this.bottom) {
      // size가 1이면
      this.top = null;
      this.bottom = null;
    }

    this.top = this.top.next;
    this.size -= 1;
    return temp.value;
  }

  // 가장 위에 있는 값 보여주기
  peek() {
    if (this.isEmpty()) return null;
    return this.top.value;
  }

  display() {
    if (this.isEmpty()) return null;
    let current = this.top;

    process.stdout.write('TOP ');
    while (current.next) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }
    process.stdout.write(`${current.value} Bottom\n`);
  }

  isFull() {
    return this.size >= this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }
}
*/