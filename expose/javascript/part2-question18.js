let d = new Date();
let time = d.toLocaleTimeString();

function printEverySecond(){
    d = new Date();
    time = d.toLocaleTimeString();
    
    console.log(time);
}

setInterval(printEverySecond, 1000);