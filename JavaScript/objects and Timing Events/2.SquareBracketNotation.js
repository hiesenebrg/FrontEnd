var student = {
    name:"abc" , 
    roll : 135 ,
     marks:90
    };

    console.log(student.name);
    console.log(student["name"]);

    function printProperty(obj , prop){
        console.log(obj[prop]);
    }

    printProperty(student , "marks");

delete student.marks;
console.log(student);