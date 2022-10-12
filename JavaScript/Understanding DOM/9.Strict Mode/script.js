var box = document.getElementById('outer');
var clickCount = document.getElementById('click-count');
// now here we forget to add var before count but still working this is called strict mode(disabled) introduces in ES5
// please note that it only work for global
// also note that if "use strict"; is written then strict mode is ON and you cannot do this
// and also instead of using strict mode in entire documnet I can use within the fucntion as well
 count = 0;
box.addEventListener('click', function(){
    // "use strict";
    count++;
    clickCount.innerText = count;

})