console.log(evenNumbers(15));
console.log(myRevert([1,2,3,4,5]))
isRainbow(['azul', 'rosa', 'negro', 'verde', 'amarillo']);
console.log(add(['Pere', 'Maria', 'Andreu']));




function evenNumbers(num:number): number[] {
    let evenNumbersArray: number[] = [];
    for(let i=0; i<=num; i++){
        if(i %2 !== 0){
            evenNumbersArray.push(i);
        }
    }
return evenNumbersArray
}


function myRevert(myArr:number[]): number[] {
    let revertArray: number[] = [];
    for(let i=myArr.length; i>0; i--){
        revertArray.push(i);
    }
    return revertArray;
}

function isRainbow(colors:string[]): void{
    colors.forEach(function(color: string){
        if(color == 'rojo' || color == 'naranja' || color == 'amarillo' || color == 'verde' || color == 'azul' || color == 'violeta' ||color == 'celeste' ||color == 'lila' ){
            console.log (`El color ${color} está en el arco iris.`);
        } else {
            console.log (`El color ${color} no es un color del arco iris`);
        }
    });
};

function add(myWords: string[]): number{
    let result:number = 0;
    for(let word of myWords){
        result += word.length;
    }
    return result;
}


