// Namespaces and Modules 
var myMath;
(function (myMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    myMath.calculateCircumference = calculateCircumference;
    function calculateRectangle(width, length) {
        return width * length;
    }
    myMath.calculateRectangle = calculateRectangle;
})(myMath || (myMath = {})); // namespace
console.log(myMath.calculateRectangle(10, 20));
console.log(myMath.calculateCircumference(3));
