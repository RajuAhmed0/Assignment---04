const arrayNumber = [1, 1, 5];
const number = 10;
function canPay(array, number) {
    let arrayTotal = 0;
    let chipsPrice = 10;
    for (let i = 0; i < array.length; i++) {
        arrayTotal += array[i];
        if (arrayTotal <= chipsPrice) {
            return true;

        }
        else {
            return false;
        }
    }
    // return arrayTotal;
}

const result = canPay(arrayNumber);
console.log(result);

