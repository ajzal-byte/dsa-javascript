function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j -1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}

const arr = [10, 1, 4, 20, 5];
console.log(insertionSort(arr));

// Big-O = O(n^2)