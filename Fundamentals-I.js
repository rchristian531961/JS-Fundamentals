/*1*/
function usFirstLetters(phrase){
    let x = phrase.split(" ");
    for (let i = 0; i < x.length;i++){
        x[i] = x[i][0].toUpperCase() + x[i].substring(1);
    }
    return x.join(" ");
}

console.log(usFirstLetters("hello world"));

/*2*/

function truncate(str, max){
    if (str.length > max){
        return str.substring(0,max) + "...";
    }
    else{
        return str;
    }
}

console.log(truncate('This text will be truncated if it is too long',25));

/*3*/
const animals=['Tiger', 'Giraffe'];
console.log(animals);

animals.push("Wolf","Zebra");
console.log(animals);

animals.unshift("Lion", "Bear");
console.log(animals);

animals.sort();
console.log(animals);

function replaceMiddleAnimal(newValue){
    let middle=Math.floor(newValue.length/2-1);
    animals.splice(middle,0,newValue);
}

replaceMiddleAnimal("MyAnimal");
console.log(animals);

function findMatchingAnimals(beginsWith){
    let x = beginsWith.toLowerCase();
    let newAnimals=[];

    for (let i = 0; i < animals.length;i++){

        let currAnimal=animals[i].toLowerCase();
        
        if (currAnimal.includes(x)){
            newAnimals.push(animals[i]);
        }
    }
    newAnimals.sort();
    return newAnimals;
}

console.log(findMatchingAnimals("e"));

/*4*/
function camelCase(cssProp){
    if (cssProp.includes("-")){
        let current=cssProp.split("-");
        for (let i=1; i<current.length;i++){
            current[i]=current[i][0].toUpperCase()+current[i].substring(1);
        }

        return current.join("");
        
    }
    else{
        return cssProp;
    }
}

let mm="margin-leftright-up-down";
console.log(camelCase(mm));

function camelCase_2(cssProp){
    let current=cssProp.split("-");
        for (let i=1; i<current.length;i++){
            current[i]=current[i][0].toUpperCase()+current[i].substring(1);
        }

        return current.join("");
}

console.log(camelCase_2(mm));

/*5*/
let twentyCents=0.20;
let tenCents=0.10;

console.log(`${twentyCents} + ${tenCents} = ${twentyCents+tenCents} `)

let fixedTwenty=twentyCents.toFixed(2);
let fixedTen=tenCents.toFixed(2);

console.log(fixedTwenty+fixedTen);
/*Treating the values as strings*/

function currencyAddition(float1, float2){
    return Number(float1)+Number(float2);
}

console.log(currencyAddition(fixedTen,fixedTwenty));

function currencyOperation(float1,float2,operation){
    let value1=Number(float1);
    let value2=Number(float2);

    switch (operation){
        case "+":
            return value1+value2;
        
        case "-":
            return value1-value2;

        case "*":
            return value1*value2;

        case "/":
            return value1/value2;

        default:
            return "Incorrect Operation";
    }
}

console.log(currencyOperation(fixedTen,fixedTwenty,"*"));

function currencyOperation_2(float1,float2,operation,numDecimal){
    let value1=Number(float1);
    let value2=Number(float2);
    let placement=Math.pow(10,numDecimal);
    
    switch (operation){
        case "+":
            return Math.round((value1+value2)*placement)/placement;
        
        case "-":
            return Math.round((value1-value2)*placement)/placement;

        case "*":
            return Math.round((value1*value2)*placement)/placement;

        case "/":
            return Math.round((value1/value2)*placement)/placement;

        default:
            return "Incorrect Operation";
    }
    
    
}

console.log(currencyOperation_2(tenCents,twentyCents,"+",2) == 0.3);

/*6*/
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

function unique(duplicatesArray){
    const current=[];
    for (let i = 0; i < duplicatesArray.length;i++){
        if (!current.includes(duplicatesArray[i])){
            current.push(duplicatesArray[i]);
        }
    }
    return current;
}

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

/*7*/
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function getBookTitle(bookId){
    return books.find(e=> e.id == 1);
}

console.log(getBookTitle(1));

function getOldBooks(){
    return books.filter(e=> e.year < 1950);
}

console.log(getOldBooks());
console.log("break");

function addGenre(){
    return books.map(e=>{
        let container=e;

        container.genre="classics";

        return container;
    });
}

console.log(addGenre());






