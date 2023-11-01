import { Point } from "./point";

export class Triangle{
    private vertex1: Point;
    private vertex2: Point;
    private vertex3: Point;

    constructor(vertex1: Point, vertex2: Point, vertex3: Point){
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }

    public setVertex1(newVertex1:Point):void{
        this.vertex1 = newVertex1
    }

    public getVertex1():Point{
        return this.vertex1
    }

    public setVertex2(newVertex2:Point):void{
        this.vertex2 = newVertex2
    }

    public getVertex2():Point{
        return this.vertex2
    }

    public setVertex3(newVertex3:Point):void{
        this.vertex3 = newVertex3
    }

    public getVertex3():Point{
        return this.vertex3
    }

    public calculateLengthSides(): number[]{
        let lengthSides:number[] = [];
        let lengthA = this.vertex1.calculateDistance(this.vertex2);
        let lengthB = this.vertex2.calculateDistance(this.vertex3);
        let lengthC = this.vertex3.calculateDistance(this.vertex1);
        lengthSides.push(lengthA, lengthB, lengthC);
        return lengthSides
    }
}