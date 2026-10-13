//parse converts a string into Java object

const jsonData = '{"name":"Vidhi", "age":20, "course":"Java"}';

const student = JSON.parse(jsonData);

console.log(student);
console.log(student.age);