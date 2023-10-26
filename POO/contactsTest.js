let {Contacts} = require("./contacts");
let {Person} = require("./person");

let person1 = new Person("Xisca", "Ayala", 1986, 50, 162,  "España", "català", ["yoga", "programar", "psicologia"]);
let person2 = new Person("Laia", "Llull", 1986, 50, 162,  "España", "català", ["yoga", "programar", "psicologia", "tocar violí"]);

let myContacts = new Contacts();

myContacts.contacts = [person1, person2]; 

myContacts.printPersons();