console.log('hello')

// creating element
let element = document.createElement('li')
element.className = 'child1'
element.id = 'elementid'

element.innerHTML = '<b>Hello world</b>'
console.log(element)

let ul = document.querySelector('ul.this')
ul.appendChild(element)
console.log(ul)

// replacing element

let elem2 = document.createElement('h1')
elem2.className = 'elem2'
elem2.id = 'elem2id'
let tnode = document.createTextNode("This is created textnode")
elem2.appendChild(tnode)
 
element.replaceWith(elem2)
let myul = document.getElementById('myul')
myul.replaceChild(element,document.getElementById('is'))
//removing
myul.removeChild(element,document.getElementById('is'))