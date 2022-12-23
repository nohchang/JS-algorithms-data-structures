class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName
    this.lastName = lastName
    this.grade = year
    this.tardies = 0
    this.scores = []
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`
  }
  markLate() {
    this.tardies += 1
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!"
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
  }
  addScore(score) {
    this.scores.push(score)
    return this.scores
  }
  calculateAverage() {
    let sum = this.scores.reduce(function(a, b) {return a + b})
    return sum / this.scores.length
  }
  // static은 개별 인스턴스 *emil, firstStudent와 무관한 기능
  // Student class의 한 부분
  static EnrollStudents() {
    return "ENROLLING STUDENTS!"
  }
}

let firstStudent = new Student("Colt", "Steele", 1)
let emil = new Student("Emil", "Katz", 3)

// console.log(firstStudent.markLate())
// console.log(firstStudent.addScore(92))
// console.log(firstStudent.addScore(87))
// console.log(firstStudent.addScore(97))
// console.log(firstStudent.addScore(100))
// console.log(firstStudent.calculateAverage())
console.log(Student.EnrollStudents())