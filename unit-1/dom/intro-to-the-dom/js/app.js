const log = console.log;
const dir = console.dir

log('hello world');

/* What is Dom?*/
//The DOM (Document Object Model) is a data 
//representation of a web page loaded in the browser.

// Why would we use the DOM?
// 1. to read and change content
// 2. change how elements are styled
// 3. modify elements
// 4. create or remove elements
// 5. respond events 

// Select Element
// 1. select element
// 2. store element in variable
// 3. naming conventions - to help identify elements
// 4. veryify - console.dir()

//catching elements
const bodyElement = document.querySelector('body')
const titleElement = document.querySelector('#main-title');
const paragraphElement = document.querySelector('.cool');
const commentElements = document.querySelectorAll('#comments li')
const buttonElement = document.querySelector('button');

dir(paragraphElement);
dir(titleElement);
log(titleElement);
log(paragraphElement.textContent);


// modify elements
paragraphElement.textContent = "This is my new paragraph!"
console.log(paragraphElement.textContent)


bodyElement.style.fontFamily = "helvetica"
titleElement.style.textAlign = 'center';
titleElement.style.color = 'orange';
paragraphElement.style.color = 'red';



//create element
const h2Element = document.createElement('h2');
h2Element.textContent = "Comment Section";
bodyElement.appendChild(h2Element)
log(commentElements);

commentElements.forEach((commentEl)=>{
    console.log(commentEl);
    commentEl.style.fontSize = '30px'
});

// working with buttons, example.

//check attribute, change attribute (like a boolean)
if (buttonElement.hasAttribute('disabled')=== true) {
   buttonElement.removeAttribute('disabled');
}

//set an attribute like 'id'
buttonElement.setAttribute('id', 'submit')
log(buttonElement)
// set an attribute like 'class' 
buttonElement.classList.add('btn')

//add or remove class
buttonElement.classList.remove('btn')
buttonElement.classList.add('action-button')


