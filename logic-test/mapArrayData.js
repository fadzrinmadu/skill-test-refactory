function productArray(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const tmpArr = [...arr];
    tmpArr[i] = 1;
    const total = tmpArr.reduce((total, num) => total * num, 1);
    newArr[i] = total;
  }

  return newArr;
}

console.log(productArray([12,20]));
console.log(productArray([12,20]));
console.log(productArray([3,27,4,2]));
console.log(productArray([13,10,5,2,9]));
console.log(productArray([16,17,4,3,5,2]));
