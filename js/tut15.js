// ES6 classes and inheritance
console.log("hello")
class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name = givenName
        this.experience = givenExperience
        this.division = givenDivision
    }

    static slogan(){
        return `I am ${name} and this company is best.`
    }
    joiningYear(){
        return 2020 - this.experience
    }
    static add(a,b){
        return a + b

    }
}


let obj = new Employee("tushar",6,'B')
// let slogan = obj.slogan()
// console.log(slogan)
//console.log(obj.name)
//let experience = obj.joiningYear()
// console.log(experience)
// console.log(Employee.add(4,5))

class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,givenLanguage,github){
        super(givenName,givenExperience,givenDivision)
        this.language = givenLanguage
        this.github = github
    }
     favoriteLanguage(){
        if (this.language == 'python') {
            return 'Python'
        }
        else{
            return 'Javascript'
        }
    }
    static multi(a,b){
        return a*b
    }
}

Tushar = new Programmer('Tushar',3,'Lays','Go','tushar382')
console.log(Tushar)
console.log(Programmer.multi(6,7))

