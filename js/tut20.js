console.log('this is tutorial 20');

// ARROW FUNCTIONS

// Creating a regular function
const tushar = function (){
    console.log("This is the best person ever")
}

// Converting it to an arrow function
let tushar1 = ()=>{
    console.log("This is the best person ever")
}
tushar1();

// function returning something
const greet = function(){
    return "Good Morning";
}

// One liners do not require braces/return
// one line will automatically return
  greet1 = () =>  "Good Morning";

  greet2 = () =>  ({name: "tushar"});

// Single parameters do not need parenthesis 
// but you will have to put parenthesis if there are multiple paramteres
 greet3 = name =>  "Good Morning " + name + ending;



console.log(greet('Tushar'))
