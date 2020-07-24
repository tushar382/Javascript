// Promises
// Resolve
// Reject
// Pending

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("function : your promise has been resolved");
        resolve();
      } else {
        console.log("function : your promise has been not  resolved");
        reject("Sorry not fulfilled");
      }
    }, 2000);
  });
}

func1()
  .then(function () {
    console.log("tushar : Thanks for solving ");
  })
  .catch(function (error) {
    console.log("tushar: very bad bro " + error);
  });
