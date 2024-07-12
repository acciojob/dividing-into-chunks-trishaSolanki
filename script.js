function divide(arr, n) {
    const result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum + arr[i] <= n) {
            currentSubarray.push(arr[i]);
            currentSum += arr[i];
        } else {
            result.push(currentSubarray);
            currentSubarray = [arr[i]];
            currentSum = arr[i];
        }
    }

    // Push the last subarray if it's not empty
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
}

// Examples
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5)); // [[1, 2], [3], [4, 1, 0], [2, 2]]
console.log(divide([4, 3, 2, 1], 4));            // [[4], [3], [2], [1]]
