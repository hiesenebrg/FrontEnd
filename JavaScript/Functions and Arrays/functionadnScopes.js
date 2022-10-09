var name = "scope";



function scopeDemo(){
    // now  I can use var within this funciton scope
    var name = "adarsh";
    console.log(name);
}
scopeDemo();
console.log(name);