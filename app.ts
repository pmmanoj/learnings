// Namespaces and Modules 
namespace myMath { // new Java Script object
    const PI = 3.14; 

    export function calculateCircumference( diameter: number): number{
        return diameter * PI; 
    }

    export function calculateRectangle( width: number, length: number ) {
        return width * length; 
    }

} // namespace

console.log( myMath.calculateRectangle(10,20) ); 
console.log( myMath.calculateCircumference(3) ); 

