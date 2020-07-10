console.log("Hello");

// Object literal : Object.prototype
let obj = {
    name: "Tushar",
    college: "Mcc",
    address: "Thane"
}

function Obj(givenName){
    this.name = givenName
}

Obj.prototype.getName = function (){
    return this.name;
}

Obj.prototype.setName = function (newName){
  this.name = newName;
}

let obj2 = new Obj("Virat");
console.log(obj2);
 