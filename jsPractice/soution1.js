//1. Create a page that shows a message “I’m JavaScript!”.
function(){

	alert("I am JavaScript");

}

// ---------------------------------------------------


/*
2.Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/

function foo(){
let name="John";
let admin = name;
alert(admin);
}
foo();

// -----------------------------------------------------

/*Create a variable with the name of our planet. How would you name such a variable?*/
const planet  ="EARTH";

/*Create a variable to store the name of a current visitor to a website. How would you name that variable?*/

let currentVisitor = "John";



let name = "Ilya";

alert( `hello ${1}` ); // ? ans: hello 1.

alert( `hello ${"name"}` ); // ? hello name.

alert( `hello ${name}` ); // ?   hello Ilya. 



What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?

// Answers 
/* 
a=2;
b=2;
c=2;
d=1;
*/


/*

let a = 2;

let x = 1 + (a *= 2);

*/

a=2;
x=5;


"" + 1 + 0 // ans :  "10"
"" - 1 + 0 // ans :  "-1"
true + false// ans : "1 + 0"
6 / "3"//  ans :  2
"2" * "3"// ans : 6
4 + 5 + "px"// ans: 9px
"$" + 4 + 5// ans: $45
"4" - 2// ans: 2
"4px" - 2// ans: NaN
7 / 0 // ans: "infinity"
"  -9  " + 5 // ans: "-95"
"  -9  " - 5// ans : -14
null + 1//  ans:  1
undefined + 1// ans: NaN  
" \t \n" - 2//  ans : -2



7 /0 
Infinity 
5 > 4 
true
"apple" > "pineapple"
false
undefined == null
true
undefined === null
false
null == "\n0\n"
false
null === +"\n0\n"
false



//Create a web-page that asks for a name and outputs it

let a = prompt("what is  your name");
alert(a);

//  will the alert work 
if ("0") {
  alert( 'Hello' );
}


//-----------------------------------------------------------

//if else condition 

let name = prompt("what is the official name of js");

if( name === "ECMAScript")
{
	console.log("Right!");
}else{

	console.log("You don't know? “ECMAScript”!");
}

//----------------------------------------------------------------

let number = prompt("enter a number");

if( number < 0)
{
	console.log("-1");
}if else (number >0)
{
	console.log("1");
}
else{

	console.log("0");
}



//---------------------------------------------------------------


//Rewrite this if using the conditional operator '?':

let result  = a + b < 4 ? "below":"Over";

//if else task 5 


let login  = prompt("Who is logging in");

let message = login=='Employee'?'Hello': login=='Employee'?'Greetings':login == ''?'No login':'';

console.log(message);


//logical operators task 1
alert( null || 2 || undefined );

2
//task 2
alert( alert(1) || 2 || alert(3) );


1 
and then 
2

//task3  
alert( 1 && null && 2 );

//return null 

//task4 
alert( alert(1) && alert(2) );

// first prints 1

//return undefined at he end 


alert( null || 2 && 3 || 4 );	

//returns 3 

// Write an “if” condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.

let age = prompt("What's your age");

if (age > 14 && age< 90)
{
	console.log("in range");
}

if (!(age > 14 && age< 90))
{
	console.log("out of the range");
}




// Which of these alerts are going to execute?

// What will the results of the expressions be inside if(...)?

/1./ if (-1 || 0) alert( 'first' );
/2./ if (-1 && 0) alert( 'second' );
/3./ if (null || -1 && 1) alert( 'third' );

//Answers 

1. will run because -1 is a truthly value
2. will not run because 0 is a falsy value
3. will run cause -1 and 1  both are truthly balues and the or will result in tur value printing third
	



// final task lofgical operator
let userName = prompt("Name please ");

if (userName == 'Admin') {

  let pass = prompt('Password?');

  if (pass == 'TheMaster') {

    alert( 'Welcome!' );
  } 
  else if 
  	(pass == '' || pass == null) {
    
    alert( 'Canceled' );
  } 
  else {
    
    alert( 'Wrong password' );
  }

} 
else if (userName == '' || userName == null) {
	 	 alert( 'Canceled' );
} 
else {
 	 alert( "I dont know you" );
}


// Class task 1
class Clock {

  constructor({ template }) {

    this.template = template;

  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


let clock = new Clock({template: 'h:m:s'});
clock.start();





// inheritance in javascript task.

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
  	super();
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); 
alert(rabbit.name);


//--------------------------------------------------------------------

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}



// class to add the percision variable 

class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
};

//----------------------------------------------------------------------------

class Rabbit extends Object {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

alert( rabbit.hasOwnProperty('name') ); 


// this is called prototypical inheritance  which makes it print true 
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true




function f() {
  try {
    alert('start');
    return "result";
  } catch (e) {
  } finally {
    console.log("clean");
  }
}

f(); 

//-----------------------------------------------------------------

class FormatError extends SyntaxError {
  constructor(m) {
    super(m);
    this.name = this.constructor.name;
  }
}

let err = new FormatError("formatting error");

alert( err.message );
alert( err.name ); 
alert( err.stack ); 

alert( err instanceof SyntaxError ); 

//------------------------------------------------------------------


///Promisis

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));

//-------------------------------------------------------

promise.then(f1).catch(f2);
Versus:

promise.then(f1, f2);
// these is better error handelling in the first promise block

//-----------------------------------------------------------

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);



// the catch black will not be executed because the error is thrown implicitly 

//-------------------------------------------------------------------------------x



async function loadJson(url) { 
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json(); 
    return json;
  }

  throw new Error(response.status);
}

loadJson('object.json')
  .catch(alert); 

//-----------------------------------------------------------------------------

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// Ask for a user name until github returns a valid user

async function demoGithubUser() {

  let user;
  while(true) {
    let name = prompt("Enter a name?", "iliakan");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; 
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
      } else {
        throw err;
      }
    }
  }
  alert(`Full name: ${user.name}.`);
  return user;
}

demoGithubUser();

//------------------------------------------------------------------


let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); 


//------------------------------------------------------------------

