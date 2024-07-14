function cubeNumber(Cube) {
    
    let num;
    for (let i = 0; i < Cube; i++) {
        const num = Math.pow(Cube, 3);
        return num;
    
    }
    return "please input the number"
}
const number1 = cubeNumber(3);
const number2 = cubeNumber(4);
console.log(number1, number2);





