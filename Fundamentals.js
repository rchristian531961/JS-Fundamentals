/*Number 1*/ 

let x = [""+ 1 + 0, "" - 1 + 0,true + false,
!true,6 / "3","2" * "3",4 + 5 + "px","$" + 4 + 5,"4" - 2,"4px" - 2," -9 " + 5," -9 " - 5,
null + 1,undefined + 1,undefined == null,undefined === null," \t \n" - 2];

function numb_1(){
    for (let i = 0; i <  x.length;i++){
        console.log(x[i]);
    }    
}

//numb_1()

/*Number 2*/
function numb_2(){
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four
let multiplication = three * four
let division = three / four
let subtraction = three - four
let lessThan1 = three < four
let lessThan2 = thirty < four

let x = [addition,multiplication,division,subtraction, lessThan1, lessThan2];
for (let i = 0; i < x.length;i++){
    console.log(x[i]);
}
}

// numb_2();

/*Number 3*/

// if (0) console.log('#1 zero is true')
// if ("0") console.log('#2 zero is true')
// if (null) console.log('null is true')
// if (-1) console.log('negative is true')
// if (1) console.log('positive is true')

function numb_3(){
    if (1) console.log('positive is true')
    else{console.log('Incorrect');}
}

// numb_3();

/*Num 4*/
function numb_4_or(){
    let a = 2, b = 3;
    let result = `${a} + ${b} is `;
    if (a + b < 10) {
    result += 'less than 10';
    } else {
    result+='greater than 10';}
}

function numb_4_new(){
    // condition ? exprIfTrue : exprIfFalse
    let a=2, b=3;
    let result=' ${a} + ${b} is ';
    return a+b<10 ? result+='less than 10 ':result+='greater than 10 ';
}

// console.log(numb_4_new());

/*Number 5*/
function getGreeting_original(name){
    return 'Hello ' + name + '!';
}

//Using Function declaration
const greetings = function getGreeting(name){
    return 'Hello ' + name + "!";
};

//using arrow function
let greetings_2 =(name) => "Hello " + name + "!";

function mygreetings(name){
    console.log(greetings_2(name));
    console.log(greetings(name));
}

// mygreetings("Ray");

/*Number 6*/
const westley = {
    name: 'Westley',
    numFingers: 5
    }
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
const inigo = {
    firstName: 'Inigo',
    lastName: "Montoya",
    greeting(person) { 
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}, `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
        return person.numFingers==6 ? 'Nice to meet you. You killed my father. Prepare to die':'Not 6 fingers'; 

        // if (person.numFingers == 6){
        //      return 'Nice to meet you. You killed my father. Prepare to die';
        //     }
        //     else{return 'Not 6 fingers'};
    }
    }
// inigo.greeting(westley)
// inigo.greeting(rugen)


/*Number 7*/
const basketballGame = {
    score: 0,
    freeThrow() {
    this.score++;
    },
    basket() {
    this.score += 2;
    },
    threePointer() {
    this.score += 3;
    },
    halfTime() {
    console.log('Halftime score is '+this.score);
    }
    }

//modify each of the above object methods to enable function chaining as below:
// basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

/*Number 8*/
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'}

const ray={
    name:"Ray",
    state:"Louisiana",
    birth_year:1992,
}

function numb_8(myobject){
    for (object in myobject){
        console.log(object + ": " + myobject[object]);
    }
}

// numb_8(sydney);
// numb_8(ray);

/*Number 9*/
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

var moreSports = JSON.parse(JSON.stringify(teamSports)); //Deep Copy Using JSON
moreSports.push("Football","BasketBall");

let dog_2=JSON.parse(JSON.stringify(dog1));
dog_2="Game";

let cat2=cat1;
cat2.name="Not Fluffy";

console.log(moreSports, teamSports);
console.log(dog_2,dog1)

/**/ 