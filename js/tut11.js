/* You have to create a div and inject it into the page which contains heading.
whenever someone click on the div it should be converted into an editable item
whenever user clicks away (blur) save it into localstorage.
*/
//creating an element
let divElem = document.createElement("div")
// adding text to element
let val = localStorage.getItem('text')
let text
if (val == null){
    text = document.createTextNode("This is created text note") 
}
else{
    text = document.createTextNode(val)
}

divElem.appendChild(text)
//give id and class
divElem.setAttribute('id','elem')
divElem.setAttribute('class','elem')
//grab the main container 
let container = document.querySelector('.container')
let first = document.getElementById('myfirst')
//inserting element
container.insertBefore(divElem,first)
//adding event listener to the element

divElem.addEventListener('click',function(e){
    let noTextArea = document.getElementsByClassName('textarea').length
    if (noTextArea == 0) {
    let html = elem.innerHTML
    divElem.innerHTML =  `<textarea class="textarea" id="textarea" rows="3">${html}</textarea>`
    }
    //listen for the blur event on text area
    let textarea = document.getElementById('textarea')
    textarea.addEventListener('blur',function(e){
        elem.innerHTML = textarea.value
        localStorage.setItem('text', textarea.value)
    })

})

