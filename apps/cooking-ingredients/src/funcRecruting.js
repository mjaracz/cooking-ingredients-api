// Given an integer array nums[], write a program to find three numbers from the array whose
// product is maximum and output the result.

// #Example:
// Input: [4, 5, -10, 3] // 60

// Input: [4, -5, -10, 3] // -5*-10*4 // 200

// Output: 60

const calculateMaximumValueOfProduct = (arrOfNumbers) => {
  const sortedArr = arrOfNumbers.sort((a, b) => {
    if (b < 0 && b < a) return -1;
    return b - a;
  });

  return sortedArr[0] * sortedArr[1] * sortedArr[2];
};

console.log(calculateMaximumValueOfProduct([4, 5, -10, 3]));
console.log(calculateMaximumValueOfProduct([3, 4, -5, -10]));
