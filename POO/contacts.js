let {Person} = require("./person");

class Contacts {
    constructor() {
        this.contacts = [];
    }

    printPersons(){
        console.log(this.contacts);
    }
}

module.exports={Contacts};
