
var sec = 1;
function sayHello(){
    console.log("after" , sec);
    sec++;
    if(sec ==6){
        clearInterval(id);
        // clearInterval will stop the setInterval instance
    }
}

// setTimeout(sayHello,2000);
// this means that this code will execute after 100000 miliseconds
var id = setInterval(sayHello,2000);
// it will do the same thing but repeat again and again after the given interval
