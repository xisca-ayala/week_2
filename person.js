class Person {
    constructor(name, surname, yearOfBirth, weight, height, state, lenguage, hobby1, hobby2, hobby3){
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.weight = weight;
        this.height = height;
        this.state = state;
        this.lenguage = lenguage;
        this.hobbies = [hobby1, hobby2, hobby3];
    }

    calcularIMC(){
        let bodyMassIndex = weight/(height**2);
        return bodyMassIndex;
    }
    calAgePerson(currentYear){
        return currentYear-this.yearOfBirth;
   }
    printAll(){
        for (let element in this){
            console.log(element + "-" + this[element])
        }
    }
    printHobbies(){
        console.log(hobby1, hobby2, hobby3)
    }
}


module.exports={Person};
