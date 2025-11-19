let btn = document.querySelector('.child');
let div = document.querySelector('.parent');

div.addEventListener('click', function() {
    console.log("Parent div clicked");
})

btn.addEventListener('click', function(){
    console.log("Child Button clicked");
})