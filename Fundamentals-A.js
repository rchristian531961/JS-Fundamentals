function makeCounter() {
    let currentCount = 0;

    return function() {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };    
}

let counter1 = makeCounter();
let counter2=makeCounter();

counter1(); // 1
counter1(); // 2
counter2(); //They are independent

function makeCounter_bc(startFrom,incrementBy){
    let currentCount = startFrom;
    
    return function() {
        currentCount+=9;
        console.log(currentCount)
        return currentCount;
    };
    
}

/*2*/
function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); //fourth
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); //third
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); //second
// delayMsg('#4: Not delayed at all') //first

let myDelayMsg=(msg)=>console.log(`my message delay: ${msg}`);

setTimeout(myDelayMsg, 200, "200");
let cancelTimer=setTimeout(myDelayMsg, 15000, "15000")
clearTimeout(cancelTimer);

/*3*/



/*4*/



/*5*/



/*6*/




/*7*/




/*8*/




/*9*/





/*10*/




