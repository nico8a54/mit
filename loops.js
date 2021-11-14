const displayCounter = document.getElementById('counter');
var counter = 10
var reducer = 3000
displayCounter.innerHTML = counter;


setInterval (function reduceCounter(){
    if (counter >= 1) {
        counter --;
        displayCounter.innerHTML = counter;
    } else {displayCounter.innerHTML = counter};
    reducer = reducer - 1000;

}, reducer);

function helloWorld() {
    console.log("Hello World");
};

setInterval (helloWorld, reducer);

function changeSpeed() {
    time = time + 100;
}


var time = 500;
var position = 0;
var speed = 5;

function myFunction() {
    position = position + speed;
    console.log("position " + position);
    time = time + 100;
}

setInterval(myFunction, time);

// counter = 100;
// displayCounter.innerHTML = counter;

// for (counter = 100; counter >= 0; counter--) {
//     setTimeout (function reduceCounter(){
//         displayCounter.innerHTML = counter;
//     }, 1000)
// }





   


      


// while (counter < 10) {
//     displayCounter.innerHTML = counter;
//     setTimeout(()=> {counter++},500);
// }