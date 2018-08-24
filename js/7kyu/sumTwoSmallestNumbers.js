function sumTwoSmallestNumbers(numbers) {
   let c = numbers.sort((a, b) => a - b);
    sum = c[1] + c[0]
    return sum
  Test.assertEquals(sumTwoSmallestNumbers([2, 4, 8, 16, 32, 64]));
};
