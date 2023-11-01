console.log(hasEven([3,4,5]))
console.log(startWithM(['Maria','Alba','Martina']))

function hasEven(myNum:number[]):boolean{
    let i:number = 0;
    let boolean = false ;
    while (i<myNum.length){
        if (myNum[i] %2 == 0){
            boolean = true;
        }
        i++
    }
    return boolean;
}

function startWithM(myNames:string[]): boolean{
    let i: number = 0;
    let startWith: boolean = true;
    let m: string = 'M';
    while (i<myNames.length && startWith){
        if (myNames[i][0].toLowerCase() !== m.toLowerCase()){
            startWith = false;
            break;
        }
        i++
    }
    return startWith;
}