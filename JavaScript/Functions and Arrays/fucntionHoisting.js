function hoistDemp(){
    console.log(i);
    var i = 10;
    // it means that var i is defined automatically at the top of the fucntion
    // and then i = 10 is assigning where we decalre thr variable taht is why it thorws undefined instead of the undecalred variable error
    // and thta we do it in case of function as well
}

hoistDemp();