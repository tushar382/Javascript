// ES6 classes and inheritance
console.log("hello")
class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name = givenName
        this.experience = givenExperience
        this.division = givenDivision
    }
}


let obj = new Employee("tushar",56,'B')
console.log(obj.name)
console.log(obj)