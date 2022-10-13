// for(var i =0;i<=5;i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
// }
// so only 6 is printed because the settimeout is waiting for 1 second and till then for loop already runned because var i act as  global variable
for(let i =0;i<=5;i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}
// now here let i bound to for loop and not act as a global variable