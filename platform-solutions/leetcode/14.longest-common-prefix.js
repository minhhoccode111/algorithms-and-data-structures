console.log('Hello, World!');

// The prefix is string from the beginning
// means that "flower" and "flowflower" prefix is "flow"
// simple solution and explanations

// function takes an array
function longestCommonPrefix(strs) {
  // then check if strs is false OR strs is an empty array
  if (!strs || strs.length === 0) {
    // then return ""
    return '';
  }

  // define prefix equal first element in the array
  let prefix = strs[0];

  // loop through each item in the array, from the second item (because first item is prefix)
  for (let i = 1; i < strs.length; i++) {
    // in item in the array from the second index,
    // and while the index of prefix is not EXACTLY equal to 0, then we keep slicing the string 1 character (the last index of that string) until either the prefix is empty (the return empty) or the prefix match the exact 0 index of the current item of strs array so that we can increase the i in for loop to check the next item
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === '') {
        return '';
      }
    }
  }

  // after for loop we return prefix, which is the remaining prefix of all items in the array
  return prefix;
}

// recursive approach
// 99% time - 88% space
const longestCommonPrefix = (strs, index = 1, prefix = strs[0]) => {
  if (index === strs.length || prefix === '') return prefix;
  if (strs[index].indexOf(prefix) === 0) return longestCommonPrefix(strs, index + 1, prefix);
  return longestCommonPrefix(strs, index, prefix.slice(0, prefix.length - 1));
};
