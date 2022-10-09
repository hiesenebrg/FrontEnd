function outer(){
    var outerVar = 10;
    function inner(){
        // it will first search the outerVar inside the inner funvtion and if it is not found then it will search global variable
        console.log(outerVar);

    }
    inner();
}
// inner();
outer();
// please note that the inner function is not callable outside the outer function