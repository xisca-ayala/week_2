export class Person {

    public name : string;
    public age : number;
    private address : string;
    
    constructor(name:string, age:number, address:string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    
    public printName(){
        console.log(this.name);
    }
    
    public yearOfBirth(currentYear:number):number{
        return currentYear - this.age;
    }
    
    public setAddress(newAddress:string):void{
        this.address = newAddress
    }
    
    public getAddress():string{
        return this.address
    }

}
    
