function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  // val은 자리표시자 변수 -> 배열의 각 요소에 대응하도록 
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  // frequencyCounter1의 key 제곱이 frequencyCounter2에 존재하는지
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    // 개수 확인 (2가 두개면 4도 두개)
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  return true
}

console.log(same([1,2,3,2], [9,1,4,4]))