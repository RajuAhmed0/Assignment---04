
function sortMaker(array) {
    // array equal paramiter
    const [x, y] = array;
    if (x == y) {
        return 'equal';
    }
    else if (x < 0 !== y < 0) {
        return 'Invalid Input';
    }
    else {
        const bigToSmall = [Math.max(x, y), Math.min(x, y)]; /* big to small in array number formula */
        return bigToSmall;

    }
}

const array1 = sortMaker([2, 3]);
const array2 = sortMaker([4, 2]);
const array3 = sortMaker([4, 4]);
const array4 = sortMaker([1, 2]);
const array5 = sortMaker([4, -2]);
console.log(array1, array2, array3, array4, array5);





