function matchFinder(string1, string2) {
    const matchString1 = string1.toLowerCase();
    const matchString2 = string2.toLowerCase();

    const sameString = matchString1.includes(matchString2);
    return sameString;
}

const input1 = matchFinder('John Doe', 'ohn');
const input2 = matchFinder( 'Javascript', 'code');
const input3 = matchFinder('Peter Parker', 'pen');
const input4 = matchFinder( 'Peter Parker', 'pet');
console.log(input1, input2, input3, input4);