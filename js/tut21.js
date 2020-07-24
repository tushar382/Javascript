console.log("This is tut21");
//button with id myBtn
let myBtn = document.getElementById("myBtn");

//div with id content
let content = document.getElementById("content");

// function getData() {
//   console.log("Started Get data");
//   URL = "httpStatusCodes.txt";
//   fetch(URL)
//     .then((response) => {
//       console.log("inside first then");
//       return response.text();
//     })
//     .then((data) => {
//       console.log("inside second then");
//       console.log(data);
//     });
// }
// console.log("Before running getdata");
// getData();
// console.log("after running get data");

// function getData() {
//     console.log("Started Get data");
//     URL = "https://api.github.com/users";
//     fetch(URL)
//       .then((response) => {
//         console.log("inside first then");
//         return response.json();
//       })
//       .then((data) => {
//         console.log("inside second then");
//         console.log(data);
//       });
//   }
//   console.log("Before running getdata");
//   getData();
//   console.log("after running get data");

  
function postData() {
    
    URL = "https://reqres.in/api/users";
    data = `{
        "name": "morpheus",
        "job": "leader"}`
    params = {
        method: "post",
        headers: {
            'Content-Type' : 'application/json'
        },
        body : data
    }
    fetch(URL,params).then(response=>  response.json())
      .then(data =>  console.log(data)
      );
  }
  
  postData();
