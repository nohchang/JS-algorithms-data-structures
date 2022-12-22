// pivot(or partition) 값으로 데이터의 중간값을 알 수 있다면 좋음
// 모른다면, 첫번째 요소, 마지막 요소 아니면 중간이나 무작위 요소 선택

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  // we are assuming the pivot is always the first element
  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

  // swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    // left
    quickSort(arr, left, pivotIndex - 1)
    // right
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

// console.log(pivot([4,8,2,1,5,7,6,3]))

console.log(quickSort([4,6,9,1,2,5,3]))

// O(n log n), worst O(n^2) -> pivot으로 최소값이나 최대값을 계속 선택할 경우