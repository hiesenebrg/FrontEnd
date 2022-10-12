// For getting the element via the id and want to change it css
var heading =  document.getElementById('one');
heading.style.color = 'red';
heading.style.backgroundColor = 'red';


// For getting the element via the HTML tag name and want to change it css
var heading =  document.getElementsByTagName('h1');
heading.innerText = 'Heading';
// if there are more than one Element having tag name h1 then it returns the Array
// then you have to do
heading[0].innertext = "First Heading"


// For getting the element via the class name then it will give the array of all the element 
// which has that partciular class

var para = document.getElementsByClassName("para");
para[0].style.backgroundColor = "orange";

// query Selector gives only the first element and to select all use querySelectorAll
var heading = document.querySelector('#one'); //for selection ID

var heading = document.querySelectorAll('.para'); //for selection class