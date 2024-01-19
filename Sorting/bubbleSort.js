function bubbleSort(arr){
  let swapped;
  do {
    for (let i = 0; i < arr.length -1; i++) {
      swapped = false;
      if (arr[i] > arr[i + 1]) {  // for descending order: if (arr[i] < arr[i + 1])
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

const arr = [10, 1, 4, 20, 5];
console.log(bubbleSort(arr));

// Big-O = O(n^2)