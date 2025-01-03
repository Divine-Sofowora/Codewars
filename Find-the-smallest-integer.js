// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(arr) {
    //your code here
    return Math.min(...arr);
  
  }

  // what does the (...) mean or do 
  // it is called the spread operator
  // When used in front of an array (like ...arr), the spread operator expands the elements of the array into individual items.
  