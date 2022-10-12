var outerDiv = document.getElementById('outer');
// these are mouse events and there are many more please explore yourself
outerDiv.addEventListener('mouseover', function(){
    console.log("Mouse Over");
});

outerDiv.addEventListener('mouseout', function(){
    console.log("MouseOut");
});

// these are keyboard events and there are many more please explore yourself
var searchInput = document.getElementById('search');
searchInput.addEventListener('keypress', function(){
        console.log('Key pressed');
});
// please note that keypress does not detect up down left right shift alt keys
// fo these you have to do keydown and keyup like this

// document.addEventListener('keydown', function(){
//     console.log('Key Down'); //this keydown listener listens all the keys
// });

document.addEventListener('keydown', function(event){
    // keycode return the ASCII value of the key pressed
    console.log('Key Down' , event.keyCode); //this keydown listener listens all the keys
});