function hash(key, arrayLen) {
  let total = 0
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen
  }
  return total
}

// function hash(key, arrayLen) {
//   let total = 0
//   for (let i = 0; i < key.length; i++) {
//     let char = key[i]
//     let value = char.charCodeAt(0) - 96
//     total = (total + value) % arrayLen
//   }
//   return total
// }

console.log(hash("pink", 10))
console.log(hash("pink", 10))
console.log(hash("pink", 10))
console.log(hash("pink", 10))
console.log(hash("cyan", 10))