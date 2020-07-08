console.log('hello world')
document.getElementById('heading').addEventListener('m',function(e){
    console.log('you clicked heading')
    let variable;
    variable = Array.from(e.target.classList);
    variable = e.clientX
    console.log(variable)

})

let btn = document.getElementById('btn')
btn.addEventListener('click',func1)

function func1(e){
        console.log('hello',e)
        e.preventDefault();
    }

let str = 'python'
let links = document.links
let href;
Array.from(links).forEach(function(element){
    href = element.href;
    if(href.includes(str))
    {
        console.log(href)
    }
    
});

localStorage
let name = localStorage.setItem('Name','Tushar')
let age = localStorage.setItem('Age', 20)
name = localStorage.getItem('Name')
console.log(name)
localStorage.removeItem('Age')
// Session Storage
let subject = sessionStorage.setItem('Subject','Javascript')


