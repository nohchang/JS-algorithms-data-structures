// divide and conquer

function binarySearch(arr, elem) {
  var start = 0
  var end = arr.length - 1
  // 소수점 내림
  var middle = Math.floor((start + end) / 2)
  console.log(start, middle, end)

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }
  console.log(start, middle, end)
  if (arr[middle] == elem) {
    return middle
  }
  return -1

  /*
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1
    else start = middle + 1
    middle = Math.floor((start + end) / 2)
  }
  return arr[middle] === elem ? middle : -1
  */
}

console.log(binarySearch([2,5,6,9,13,15,28], 15))
console.log(binarySearch([2,5,6,9,13,15,28], 30))