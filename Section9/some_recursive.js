function someRecursive(array, callback) {
  if (array.length === 0) return false
  if (callback(array[0])) return true
  return someRecursive(array.slice(1), callback)
}

const isOdd = val => val % 2 !== 0

console.log(someRecursive([1,2,3,4], isOdd))
console.log(someRecursive([4,6,8,9], isOdd))
console.log(someRecursive([4,6,8], isOdd))
console.log(someRecursive([4,6,8], val => val > 10))