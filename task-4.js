const object1 = { street: 10, house: "15A", society: "Earth Perfec" };
const object2 = { street: 10, society: "Earth Perfect" };
const object3 = { street: 10 };

function findAddress(object) {

    const findObject1 = object.street || '_';
    const findObject2 = object.house || '_';
    const findObject3 = object.society || '_';
    return `${findObject1}, ${findObject2}, ${findObject3}`;

}

console.log(findAddress(object1));
console.log(findAddress(object2));
console.log(findAddress(object3));


