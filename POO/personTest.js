let {Person} = require ("./person")

let person1 = new Person("Xisca", "Ayala", 1986, 50, 162,  "España", "català", ["yoga", "programar", "psicologia"]);

console.log(person1.calcularIMC());

console.log(person1.calAgePerson(2023));

person1.printAll();

person1.printHobbies();

let person2 = new Person("Laia", "Llull", 1986, 50, 162,  "España", "català", ["yoga", "programar", "psicologia", "tocar violí"]);

module.exports={Person, person1, person2};
