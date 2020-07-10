// Object literals , constructors and object oriented javascript

//object literal for creating objects
// let car = {
//     name : 'Audi R8',
//     top_speed : 220 ,
//     run : function(){
//         console.log('The car is running')
//     }


// }
// console.log(car)

function GeneralCar(given_name, given_speed) {
    this.name = given_name
    this.top_speed = given_speed
    this.run = function () {
        console.log(`${this.name} is running at ${this.top_speed} speed`)
    }
    this.analyze = function () {
        console.log(`This car is slower by ${280 - this.top_speed}Km/H than Audi R8`)
    }
}

car1 = new GeneralCar('BMW', 180)
car2 = new GeneralCar("Benz", 220)
console.log(car2)