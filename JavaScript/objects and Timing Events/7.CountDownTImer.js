
var count = 10;
function timer(){
    console.log(count);
    count--;
    if(count==0){
        console.log("Time up!!");
clearInterval(id);
    }
}



var id  = setInterval(timer,1000);