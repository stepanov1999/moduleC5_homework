const jsonString = `{
    "list": [
    {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
    },
    {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
    }
]
}
`;

const data = JSON.parse(jsonString);

data.list.forEach(person => {
    person.age = +person.age;
})

console.log(data);