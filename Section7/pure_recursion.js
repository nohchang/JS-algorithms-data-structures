function collectOddValues(arr) {
  let newArr = []

  if (arr.length === 0) {
    return newArr
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  // concat ->  배열 합치기
  newArr = newArr.concat(collectOddValues(arr.slice(1)))
  return newArr
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10]))