var arr = ["adarsh" , 22 , true , "singh"];
// this means that we are start deleting from index 1 to index 2 and 3 is added into it
// that means splice(startIndex , DeletionCount , Elemnets to be inserted)
arr.splice(2,0,15);
console.log(arr);


arr.splice(2,0,15,20 ,24);
console.log(arr);

arr.splice(1,2,3);
console.log(arr);