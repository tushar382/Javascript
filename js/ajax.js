// Ajax :- Asynchronous Javascript and XML
console.log("this is ajax tutotial");
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

let populate = document.getElementById("populate");
populate.addEventListener("click", populateHandler);

function buttonClickHandler() {
  // instantiate an xhr object
  console.log("You have clicked the button");
  const xhr = new XMLHttpRequest();
  // open xhr object
  //GET request
  //xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)
  //POST request
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader("content-type", "application/json");

  // on process
  xhr.onprogress = function () {
    console.log("on progress");
  };
  // What to do when response is ready onload()
  xhr.onload = function () {
    // 200 is response code for 'OK'
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.error("some error occured");
    }
  };
  //send request
  params = `{"name":"test","salary":"123","age":"23"}`;
  xhr.send(params);
  console.log("we are done");
}

function populateHandler() {
  // instantiate an xhr object
  console.log("You have clicked the Pophandler");
  const xhr = new XMLHttpRequest();
  // open xhr object
  //GET request
  xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
  //POST request
  //  xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true)
  //  xhr.getResponseHeader('content-type','application/json')
  // on process
  xhr.onprogress = function () {
    console.log("on progress");
  };
  // What to do when response is ready onload()
  xhr.onload = function () {
    // 200 is response code for 'OK'
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list = document.getElementById("list")
      let str =""
      for (key in obj){
           str += `<li>Employee Salary :- ${obj[key].employee_salary}</li>`
      }
      list.innerHTML = str
    } else {
      console.error("some error occured");
    }
  };
  //send request
  xhr.send();
  console.log("we are done, fetching employees");
}
