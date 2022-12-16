// iterative

function isSubsequence1(str1, str2) {
  var i = 0
  var j = 0
  if (!str1) return true
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++
    if (i === str1.length) return true
    j++
  }
  return false
}

// recursion not O(1) space

function isSubsequence2(str1, str2) {
  if (str1.length === 0) return true
  if (str2.length === 0) return false
  if (str2[0] === str1[0]) return isSubsequence2(str1.slice(1), str2.slice(1))
  return isSubsequence2(str1, str2.slice(1))
}

console.log(isSubsequence1('hello', 'hello world'))
console.log(isSubsequence1('abc', 'acb'))
console.log(isSubsequence2('hello', 'hello world'))
console.log(isSubsequence2('abc', 'acb'))