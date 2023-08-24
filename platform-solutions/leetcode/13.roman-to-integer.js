console.log('Hello, World!');

// simple solution with recursion
const convert = (str) => {
  const DATA = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  return DATA[str];
};

const checkGreater = (char1, char2) => {
  const arr = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  // if true then must be a combining of 2 Character
  return arr.indexOf(char1) < arr.indexOf(char2);
};

var romanToInt = function (s) {
  if (s.length === 0) {
    return 0;
  }

  // if something like IV, IX, XL, XC, CD, CM
  if (checkGreater(s[0], s[1])) {
    return convert(s.slice(0, 2)) + romanToInt(s.slice(2));
  } else {
    // else just one at a time
    return convert(s.slice(0, 1)) + romanToInt(s.slice(1));
  }
};
