import {Person} from "./person"

let person1 = new Person('Joan', 39, 'c/ Pere Amorós. 07570. Artà. Balears');

person1.printName();

console.log(person1.yearOfBirth(2023));

person1.setAddress('c/ Manacor,58. 07570. Artà. Balears');

console.log(person1.getAddress());