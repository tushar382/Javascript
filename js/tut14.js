console.log("This is tutorial 30");
//prototype inheritance

const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// This creates 'tushar' object
let tushar = Object.create(proto);
tushar.name = "Tushar";
tushar.role = "Programmer";
// tushar.changeName("Tushar2")
// console.log(tushar)

// This also creates 'tushar' object
const tushar1 = Object.create(proto, {
    name: { value: "tushar", writable: true },
    role: { value: "Programmer" },
});
tushar1.changeName("Tushar2")
// console.log(tushar1)


// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let tusharObj = new Employee("Tushar", 34509, 4);
console.log(tusharObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let virat = new Programmer("Virat", 2, 0, "Javascript");
console.log('Virat');


