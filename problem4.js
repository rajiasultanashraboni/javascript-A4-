function calculateFinalScore(obj) {
  // challenge part
  if (typeof obj !== "object") {
    return "invalid Input";
  }
  let testScore = obj.testScore;
  let schoolGrade = obj.schoolGrade;
  let totalScore = testScore + schoolGrade;

  if (obj.isFFamily === true) {
    totalScore = totalScore + 20;
  }

  if (totalScore >= 80) {
    return true;
  }
  return false;
}

//test
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true,
  })
);
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false,
  })
);
console.log(calculateFinalScore("hello"));
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
  })
);
