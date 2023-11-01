import { Point } from "./point";

let myPoint = new Point(2,-3);

console.log(myPoint);
myPoint.setX(-4);
myPoint.setY(8)
console.log(myPoint.toString())
console.log(myPoint.distanceToOrigin());
console.log(myPoint.calculateDistance(new Point(4,5))); 
console.log(myPoint.calcularQuadrant());
console.log(myPoint.calculateNearest([new Point(2,-2), new Point(4,5), new Point(-4,9), new Point(0,0), new Point(2,-3)]));