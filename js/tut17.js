// Callback functions
console.log("hello");

// Pretend this response is coming from server
const Students = [
  { name: "Tushar", age: 20, subject: "JavaScript" },
  { name: "Virat", age: 21, subject: "Python" },
  { name: "Rohit", age: 22, subject: "Java" },
];

//enrolling Student
function enrollStudent(student, callback) {
  setTimeout(function () {
    Students.push(student);
    callback();
  }, 3000);
}
// get data of student
function getStudent() {
  setTimeout(function () {
    let str = "";
    Students.forEach(function (student) {
      str += `<li>Name :-${student.name}</li>
                    <li> Subject:- ${student.subject}</li>`;
    });
    document.getElementById("students").innerHTML = str;
  }, 1000);
}

let newStudent = { name: "Mahi", age: 23, subject: "c++" };
enrollStudent(newStudent, getStudent);
getStudent();
