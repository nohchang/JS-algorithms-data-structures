// same as linear_search.js at Section5

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1
}

console.log(search([34,56,1,2], 1))