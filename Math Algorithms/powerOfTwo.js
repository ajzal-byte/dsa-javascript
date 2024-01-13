// Given a postive integer, determine whether it's power of 2 or not

function isPowerOf2(num) {
  if (num < 1) {
    return false;
  }
  while (num > 1) {
    if (num % 2 != 0) {
      return false;
    }
    num /= 2;
  }
  return true;
}


console.log(isPowerOf2(1));
console.log(isPowerOf2(1));
console.log(isPowerOf2(5));

// Input size is reduced by half in each iteration. So, Big-O is O(logn)


//binary shit method

function isPowerOf2Bit(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) == 0;
}

// this has, constant time complexity