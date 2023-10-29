import { Contacts } from "./contacts";
import { Person } from "./person";

let person1 = new Person('Joan', 39, 'c/ Pere Amorós. 07570. Artà. Balears');
let person2 = new Person('Pere', 49, 'c/ Pilar. 07500. Manacor. Balears');

let contacts = new Contacts;
contacts.people.push(person1);
contacts.people.push(person2);

contacts.printCalendar();