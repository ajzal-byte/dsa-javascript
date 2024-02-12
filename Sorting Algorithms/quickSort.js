function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length -1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length -1; i++) {
    if (arr[i] < pivot) {  // for descending: if (arr[i] > pivot)
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [10, 1, 4, 20, 5];
console.log(quickSort(arr));

// Worst Case - O(n^2)
// Avg Case - O(nlogn)