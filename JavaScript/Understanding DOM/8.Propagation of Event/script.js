var innerdiv = document.getElementById('inner');
innerdiv.addEventListener('click', function(evenet){
    event.stopPropagation();
    console.log("Inner Div")
});
var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('click', function(){
    console.log("Outer Div")
})
Document.addEventListener('click', function(){
    console.log(" Div")
});
// Now a propagation will occur that is if innner div is clicked then outer and window is also clicked
// so to stop this propagation we have to use event.stopPropagation