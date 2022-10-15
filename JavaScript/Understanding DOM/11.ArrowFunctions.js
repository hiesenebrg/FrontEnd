var multiply = (x,y) => {
    return x*y;
}
console.log(multiply(4,6));
// for the single line function we can alsi so
var addition = (a,b)=>a+b;
console.log(addition(4,5));



// Binding in Arrow Function
function Person(name){
    this.name = name;
    // setTimeout(function(){
    //     console.log(this);
    // },1000);
    setTimeout(() => console.log(this), 1000);
}
var  p = new Person("Adarsh");