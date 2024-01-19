function selectionSort(arr){
  for(let i =0; i < arr.length -1; i++){
      let minIndex = i;
      for(let j =i+1; j < arr.length; j++){
          if(arr[j] < arr[minIndex]) minIndex = j;
      }
      if(minIndex != i){
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
  }
  return arr;
}

const arr = [10, 1, 4, 20, 5];
console.log(selectionSort(arr))

// Big-O = O(n^2)