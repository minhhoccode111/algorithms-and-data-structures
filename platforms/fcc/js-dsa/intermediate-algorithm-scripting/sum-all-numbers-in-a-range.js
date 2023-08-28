function sumAll(arr) {
  const zero = arr[0];
  const one = arr[1];
  // base case when zero and one equal
  if (zero === one) return one;
  // base case when zero and one's pace is 1
  if (zero === one + 1 || zero === one - 1) return zero + one;
  if (zero > one) {
    return zero + one + sumAll([zero - 1, one + 1]);
  } else {
    return zero + one + sumAll([zero + 1, one - 1]);
  }
}

sumAll([1, 4]); // 10
console.log(sumAll([1, 4])); // 10

// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
