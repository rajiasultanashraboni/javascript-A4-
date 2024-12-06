function calculateTax(income, expenses) {
  if (income <= 0 && expenses <= 0 && expenses > income) {
    return "invalid Input";
  }
  const income1 = 10000;
  const expenses1 = 3000;
  remainingAmount = income1 - expenses1;
  const payTax = remainingAmount * 0.2;
  return payTax;
}

//test
console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
