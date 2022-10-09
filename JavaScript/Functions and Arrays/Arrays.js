var arr = [1,2,3,4];
// var arr = new Array(1,2,3,4,5);
// this is the second method
console.log(arr);

console.log(arr[0]);
console.log(arr[6]);
// it will give undefined instead of undefined
arr[2] = 9;
console.log(arr);
arr[7] = 9;
console.log(arr);
// magic==> this will automaticallt increases the size of the array to index 7 and remaing are the empty items
console.log(arr.length);