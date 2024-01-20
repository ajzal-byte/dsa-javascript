function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length/2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(rightArr, leftArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {  // for descending: if (leftArr[0] >= rightArr[0])
      sortedArr.push(leftArr.shift())
    }else{
      sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [10, 1, 4, 20, 5];
console.log(mergeSort(arr));

// Big-O = O(nlogn)