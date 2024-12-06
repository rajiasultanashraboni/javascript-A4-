function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let sum = 0;
  for (let char of waitingTimes) {
    sum = sum + char;
  }
  let averageTime = sum / waitingTimes.length;
  let roundUp = Math.round(averageTime);
  let isratSerial = serialNumber - 1;
  let baki = isratSerial - waitingTimes.length;
  dueTime = baki * roundUp;
  return dueTime;
}

//test
console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
