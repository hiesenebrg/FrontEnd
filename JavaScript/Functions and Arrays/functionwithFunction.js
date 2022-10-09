function outer(){
    var outerVar = 10;
    function inner(){
        console.log(outerVar);

    }
    inner();
}
// inner();
outer();
// please note that the inner function is not callable outside the outer function