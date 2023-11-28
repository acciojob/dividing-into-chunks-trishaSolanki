const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  let currentSubarray = [];

  for (const num of arr) {
    // If adding the current element to the current subarray keeps the sum within the limit
    if (currentSubarray.reduce((sum, el) => sum + el, 0) + num <= n) {
      currentSubarray.push(num);
    } else {
      // Start a new subarray with the current element
      result.push([...currentSubarray]);
      currentSubarray = [num];
    }
  }

  // Add the last subarray to the result
  result.push([...currentSubarray]);

  return result+currentSubarray;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, parseInt(n))));

