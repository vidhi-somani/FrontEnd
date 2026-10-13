//js object into json string

const student = {
    name : "Vidhi",
    age: 20,
    course : "Frontend"
};
const jsonString = JSON.stringify(student);

console.log(jsonString);
console.log(typeof student);
console.log(typeof jsonString);