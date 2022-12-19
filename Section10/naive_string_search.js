function naiveSearch(long, short) {
  var count = 0
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      console.log(short[j], long[i+j])
      if (short[j] !== long[i+j]) {
        console.log("BREAK!")
        break
      }
      // 문자열의 길이가 인덱스보다 더 길이지기 떄문
      if (j === short.length - 1) {
        console.log("FOUND ONE!")
        count++
      }
    }
  }
  return count
}

console.log(naiveSearch("lorie loled", "lol"))