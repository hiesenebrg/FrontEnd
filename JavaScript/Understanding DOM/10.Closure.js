var i = 10;
function outer(){
    var j = 20;
    console.log(i , j);
    function inner(){
        var k = 30;
        console.log(j , k);

    }
    return inner;
}
var inner = outer();
inner();
// so once a function is called it should removed out of the stack and thus all the variables associated to it should be destroyed
// but in javascript outer is called and stored in varibale inner so that when the inner function is called it should have all the inner as well as outer variable
// this is called closure

// Thus closure is combination of function + lexical enviornment in which function is created
// thus closure stores  all the variable of the outer function even after it is called because amy be the function inside outer will 
// further be called 