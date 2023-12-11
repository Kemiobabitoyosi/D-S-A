function binarySearch(array, key) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (array[mid] === key) {
      return mid;
    }
    if (array[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// Note if the algorithm isn't sorted, the result may return null even if the answer is present, hence the algorithm has to be sorted

// OR according to blackbox

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

// In this example, the `arr` parameter is the sorted array to be searched, and the `target` parameter is the value to be found within the array. The function returns the index of the target value if it is found, or -1 if the target value is not found.

// The binary search algorithm works by repeatedly dividing the search space in half. The algorithm starts by comparing the target value to the middle element of the array. If the target value is equal to the middle element, then the algorithm returns the index of the middle element. If the target value is less than the middle element, then the algorithm continues to search the left half of the array. If the target value is greater than the middle element, then the algorithm continues to search the right half of the array.

// The binary search algorithm is a very efficient search algorithm. The time complexity of the binary search algorithm is O(log n), where n is the size of the sorted array. This means that the binary search algorithm takes a logarithmic amount of time to find the target value within the sorted array.

function binarySearch(arr, target, start, end) {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  } else {
    return binarySearch(arr, target, start, mid - 1);
  }
}

// In this example, the `arr` parameter is the sorted array to be searched, the `target` parameter is the value to be found within the array, and the `start` and `end` parameters are the indices of the first and last elements of the array to be searched, respectively. The function returns the index of the target value if it is found, or -1 if the target value is not found.

// The recursive binary search algorithm works by repeatedly dividing the search space in half. The algorithm starts by comparing the target value to the middle element of the array. If the target value is equal to the middle element, then the algorithm returns the index of the middle element. If the target value is less than the middle element, then the algorithm continues to search the left half of the array. If the target value is greater than the middle element, then the algorithm continues to search the right half of the array.

// The recursive binary search algorithm is a very efficient search algorithm. The time complexity of the recursive binary search algorithm is O(log n), where n is the size of the sorted array. This means that the recursive binary search algorithm takes a logarithmic amount of time to find the target value within the sorted array.


function binarySearch(arr, target, start, end) {
  // Check if the start index is greater than the end index.
  // If it is, then the target value was not found.
  if (start > end) {
    return -1;
  }

  // Calculate the middle index of the array.
  let mid = Math.floor((start + end) / 2);

  // Check if the target value is equal to the value at the middle index.
  // If it is, then the target value has been found.
  if (arr[mid] === target) {
    return mid;
  }
  // Check if the target value is less than the value at the middle index.
  // If it is, then the target value is in the left half of the array.
  else if (arr[mid] < target) {
    // Recursively search the left half of the array.
    return binarySearch(arr, target, mid + 1, end);
  }
  // Otherwise, the target value must be in the right half of the array.
  else {
    // Recursively search the right half of the array.
    return binarySearch(arr, target, start, mid - 1);
  }
}

// In this example, the `arr` parameter is the sorted array to be searched, the `target` parameter is the value to be found within the array, and the `start` and `end` parameters are the indices of the first and last elements of the array to be searched, respectively.

// The function first checks if the start index is greater than the end index. If it is, then the target value was not found, and the function returns -1.

// If the start index is not greater than the end index, then the function calculates the middle index of the array. It then checks if the target value is equal to the value at the middle index. If it is, then the target value has been found, and the function returns the middle index.

// If the target value is not equal to the value at the middle index, then the function checks if the target value is less than the value at the middle index. If it is, then the target