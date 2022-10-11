var susan = {
    name:'adarsh',
    title: "singh"
}
var raj = susan;
raj.namename = "Nikhil";
console.log(raj);
console.log(susan);
// so you can see the changing the copy changes the original object as well that is it is making deep copy
// in order to make shallow copy( that is changing the copy doesnot changes the opriginal)
var adarsh  = {
    name:"azad",
    title:'singh'
}
var singh = {...adarsh};
singh.name = "akash";
console.log(singh);
console.log(adarsh);
// thus here the adarsh var iable remains the same while only the copy changes
