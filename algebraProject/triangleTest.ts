import { Triangle } from "./triangle";
import { Point } from "./point";

let point1 = new Point (-2,3);
let point2 = new Point (4,1);
let point3 = new Point (1,-3);



let myTriangle = new Triangle (point1,point2,point3); 
myTriangle.getVertex1(); 
myTriangle.getVertex2(); 
myTriangle.getVertex3(); 
console.log(myTriangle.calculateLengthSides());
