const xmlString = `
    <list>
      <student>
        <name lang="en">
          <first>Ivan</first>
          <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
      </student>
      <student>
        <name lang="ru">
          <first>Петр</first>
          <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
      </student>
    </list>
`;

result = {list: []};

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const list = xmlDOM.querySelector('list');
const students = list.querySelectorAll('student')
students.forEach(student => {
    let first = student.querySelector('first').textContent;
    let second = student.querySelector('second').textContent;
    let age = student.querySelector('age').textContent;
    let prof = student.querySelector('prof').textContent;
    let lang = student.querySelector('name').getAttribute('lang');
    result.list.push({name: `${first} ${second}`, age: +age, prof: prof, lang: lang});
})

console.log(result)