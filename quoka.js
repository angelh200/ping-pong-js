const people = [
    {age: 45, name: 'Bob'},
    {age: 104, name: 'Sid'},
    {age: 75, name: 'Clara'},
    {age: 11, name: '11'}
];

function propExtractor(key) {
    return function (object) {
        return object[key];
    }
}

function createSort(key) {
    return function compareStrings(stringA, stringB) {
        return stringA[key] > stringB[key];
    }
}

const getAge = propExtractor('age');

const sortByName = createSort('name');
const sortByAge = createSort('age');

people.sort(sortByAge);

console.log(people);