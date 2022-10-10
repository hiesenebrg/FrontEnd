var student = {
    name:"abc" , 
    roll : 135 ,
     marks:90
    };

for(var prop in student){
    console.log(prop , student[prop]);
}
var keys = Object.keys(student);  //this will give all the keys
var keys = Object.getOwnPropertyNames(student); //this will give all the keys

console.log(keys);