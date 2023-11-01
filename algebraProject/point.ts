export class Point{
    private x: number;
    private y: number; 
    
    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    public getX():number{
        return this.x
    }

    public setX(newX: number):void{
        this.x = newX;
    }

    public getY():number{
        return this.y
    }

    public setY(newY: number):void{
        this.y = newY;
    }

    public toString(): string{
        return '"(' + this.x.toString() + "," + this.y.toString() + ')"';
    }

    public distanceToOrigin(): number{
        return ((0-this.x)**2 + (0-this.y)**2)**(1/2);
    }

    public calculateDistance(anotherPoint: Point): number{
        return ((anotherPoint.x -this.x)**2 +(anotherPoint.y-this.y)**2)**(1/2)
    }

    public calcularQuadrant(): number{
        let result: number;
        if(this.x == 0 || this.y == 0){
            result = 0;
        }
        else if(this.x>0 && this.y>0){
            result = 1;
        }
        else if(this.x<0 && this.y>0){
            result = 2;
        }
        else if(this.x<0 && this.y<0){
            result = 3;
        }
        else{
            result = 4;
        }
        return result;
    }

    public calculateNearest(points: Point[]): Point {
        let result: Point = points[0];
        let distance = this.calculateDistance(points[0]);
        points.forEach(point => {
            let dist = this.calculateDistance(point);
            if(dist<distance){
                distance = dist;
                result = point;
            }
        });
        return result;
    }
}