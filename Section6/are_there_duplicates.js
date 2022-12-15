// frequency conuter

function areThereDuplicates1() {
  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false
}

// multiple pointer

function areThereDuplicates2(...args) {
  // Two pointer
  args.sort((a,b) => a > b)
  let start = 0
  let next = 1
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}

// one linear

function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length
}

console.log(areThereDuplicates1(1,2,2))
console.log(areThereDuplicates2(1,2,2))
console.log(areThereDuplicates3(1,2,2))