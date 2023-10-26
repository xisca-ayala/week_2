class Person {
    constructor(name, surname, yearOfBirth, weight, height, state, language, hobbies){
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.weight = weight;
        this.height = height;
        this.state = state;
        this.language = language;
        this.hobbies = hobbies;
    }

    calcularIMC(){
        return Math.round(this.weight/((this.height/100)**2));
    }

    calAgePerson(currentYear){
        return currentYear-this.yearOfBirth;
    }

    printAll(){
        for (let element in this){
            console.log(element + "-" + this[element]);
        }
    }

    printHobbies(){
        console.log(this.hobbies);
    }
}


module.exports={Person};
