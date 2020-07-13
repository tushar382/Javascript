// Ajax :- Asynchronous Javascript and XML
console.log("this is ajax tutotial")

let fetchBtn = document.getElementById('fetchBtn')
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    // instantiate an xhr object
    console.log("You have clicked the button")
    const xhr = new XMLHttpRequest()
    // open xhr object
    xhr.open('GET','tushar.txt',true)
    // on process
    xhr.onprogress = function() {
        console.log("on progress")
    }
    // What to do when response is ready onload()
    xhr.onload = function(){
        // 200 is response code for 'OK'
        if(this.status === 200){
            console.log(this.responseText)
        }
        else{
            console.error("some error occured")
        }     
    }
    xhr.send()



}