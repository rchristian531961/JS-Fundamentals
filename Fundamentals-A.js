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

// counter1(); // 1
// counter1(); // 2
// counter2(); //They are independent

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

// setTimeout(myDelayMsg, 200, "200");
// let cancelTimer=setTimeout(myDelayMsg, 15000, "15000")
// clearTimeout(cancelTimer);

/*3*/
function printMe(){console.log("printing debounced message");}

function debounce(func, time=1000){

    let timeOut;

    return ()=>{

        clearTimeout(timeOut);
         
        timeOut=setTimeout(()=>{console.log("printing debounced message")},time);
    }
}

// printMe = debounce(printMe);

// setTimeout(printMe,100);
// setTimeout(printMe,200);
// setTimeout(printMe,300);


/*4*/
let printFibonacci=()=>{
    let fibonaci_1=0;
    let fibonaci_2=1;

    setInterval(()=>{
        let current= fibonaci_1+fibonaci_2;
        console.log(current);
        fibonaci_1=fibonaci_2;
        fibonaci_2=current;
        
    },1000);
}

// printFibonacci();

let printFibonacciTimeouts=()=>{
    let fibonaci_1=0;
    let fibonaci_2=1;

   let myTime=()=>{setTimeout(printAgain=()=>{
        let current= fibonaci_1+fibonaci_2;
        console.log(current);
        fibonaci_1=fibonaci_2;
        fibonaci_2=current;

        myTime();
        
    },1000);}

    myTime();
    
}
// printFibonacciTimeouts();


let printFibonacci_3=(limit)=>{
     let fibonaci_1=0;
     let fibonaci_2=1;
    //  let count=limit;

    let fib = setInterval(()=>{
         let current= fibonaci_1+fibonaci_2;
         console.log(current);
         fibonaci_1=fibonaci_2;
         fibonaci_2=current;
         limit--;

         if (limit == 0){
            clearInterval(fib);
         }
        
     },1000);

     fib;
 }

// printFibonacci_3(5);

/*5*/
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
    };

// car.description(); //works    
// setTimeout(()=>{car.description}, 200); 
//fails. due to local variables only established in car. 

//b
let car_2={...car, year:2000}
// console.log(car_2);
//cUsed the original because new variable was assigned 

//c
// setTimeout(car.description.bind(car_2), 200); 


/*6*/ //Constructor function and call attempt(think like a class)
function multiply(a,b,c,d){
    console.log(a*b*c*d);
}

//Function.prototype.delay=function(){}
Function.prototype.delay=function(ms){
    let original=this;//refers to previous object called

    return function (arg1, arg2, arg3, arg4){
        setTimeout(()=>{original.apply(null,[arg1, arg2, arg3, arg4])},ms);
        // console.log(`Pausing for ${ms}`);
    }
}

// multiply.delay(500)(5,5,5,5);

/*7*/
function person(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
}

person.prototype.toString=function personToString(){
    return `name:${this.name} , age:${this.age}, gender:${this.gender}`
}

let myperson=new person("Ray", 31, "Male");
// console.log(myperson.toString());

let myperson2=new person("Batman", 'unknown', "male");
// console.log(myperson2.toString());


function Student(name, age, gender, cohort){
    person.call(this, name, age, gender);
    this.cohort=cohort;
}

Student.prototype.toString=function studentToString(){
    return `name:${this.name} , age:${this.age}, gender:${this.gender}, cohort: ${this.cohort}`
}

let myStudent=new Student("Ray", "18", "Male", "Anime");
// console.log(myStudent.toString());

/*8*/
class DigitalClock {
    constructor(prefix) {
    this.prefix = prefix;
    }
    display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
    date.getSeconds()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
    clearInterval(this.timer);
    }
    start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
    }
    }

// const myClock = new DigitalClock('my clock:')
// myClock.start()

class PrecisionClock extends DigitalClock{
    constructor(prefix,precision=1){
        super(prefix);
        this.precision=precision;
    }
}

const myPclock=new PrecisionClock("my clock: ", 2000);
// myPclock.start();

class AlarmClock extends DigitalClock{
    constructor(prefix,wakeupTime="07:00"){
        super(prefix);
        this.wakeupTime=wakeupTime;
    }

    display(){
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
    date.getSeconds()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    
    if(this.time_convert(hours,mins) || secs=="09"){
        this.stop();
    }
    }
    

    start(){
        this.display();
        this.timer=setInterval(()=>this.display(),1000);
    }

    time_convert(hour,min){
        let wake="";
        if (hour < 10){
            wake+="0"+hour;
        }
        else{
            wake+=hour;
        }
        if (min<10){
            wake+=":0"+min;
        }
        else{wake+=":"+min}

       return wake===this.wakeupTime;
    }
}
const alarm=new AlarmClock("myClock: ", "14:52");
alarm.start();


/*9*/





/*10*/




