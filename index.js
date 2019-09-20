// OPENING THE DOCUMENT OBJECT
// console.dir(document)

// console.log(document.body);
// console.log(document.head)
// console.log(document.URL)
// console.log(document.title)
//changing the title name
//document.title = 123;
// console.log(document.all)
// console.log(document.all[14])

//Do not use the method below to change contents of elements
//document.all[11].textContent = "Felix";

//console.log(document.forms)

//QUERYSELECTOR
//getelementbyid

//var id = document.getElementById('h2')
// console.log(id);
// id.textContent = 'Weldone';
//id.innerHTML = '<h3>Hello</h3>';
//id.style.backgroundColor = 'orange'

// var headerTitle = document.getElementById('main-head')
// console.log(headerTitle)
// headerTitle.style.borderBottom = 'solid 1px #000'


//GETELEMENTSBYCLASSNAME
// var listItems = document.getElementsByClassName('items')
// console.log(listItems)
// console.log(listItems[1])
// listItems[1].textContent = 'Good one'
// listItems[1].style.fontWeight = 'bold'
// listItems[1].style.backgroundColor = 'yellow'

//How to add color to the list of items.
// for(var i = 0; i < listItems.length; i++) {
//     listItems[i].style.backgroundColor = 'yellow'
// }

// GETELEMENTSBYTAGNAME
// var li = document.getElementsByTagName('li')
// console.log(li)
// console.log(li[3])
// li[3].textContent = 'Good one'
// li[3].style.fontWeight = 'bold'
// li[3].style.backgroundColor = 'yellow'

// for(var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'yellow'
// }


//QUERRYSELECTOR
// var hearder = document.querySelector('#main-head')
// hearder.style.borderBottom = 'solid 3px pink'

// var input = document.querySelector('input')
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]')
// submit.value = 'Send'

// var item = document.querySelector('.items')
// item.style.color = 'red'

// var lastItem = document.querySelector('.items:last-child')
// lastItem.style.color = 'purple'

// var secondItem = document.querySelector('.items:nth-child(2)')
// secondItem.style.color = 'coral'


// QUERRYSELECTORALL
// var h2 = document.querySelectorAll('#h2')
// console.log(h2)
// h2[0].textContent = 'How old are you?'

// for(var i =0; i < h2.length; i++) {
//     h2[i].style.color = 'blue'
// }

// var odd = document.querySelectorAll('li:nth-child(odd)')
// for(var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4'
// }

// var even = document.querySelectorAll('li:nth-child(even)')
// for(var i = 0; i < even.length; i++) {
//     even[i].style.backgroundColor = '#b2b2b2'
// }

//TRAVERSING THE DOM //

var itemList = document.querySelector('.item')
//ParentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode.parentNode)

//ParentElement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentElement.parentElement.parentElement)

//parentNode and parentElement are the same

//ChildNode
// console.log(itemList.childNodes) this adds textnodes(also known as whitespace)

// children
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[2].style.backgroundColor = 'lightBlue'
//it is better to use children to manipulate the elements in the DOM

//firstChild
// console.log(itemList.firstChild)

// firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'hello 1'

// lastChild
// console.log(itemList.lastChild)

//lastChildElement
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'hello 5'

// console.log(itemList.nextElementSibling)

// previousSibling
// console.log(itemList.previousSibling)
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.backgroundColor = 'green'

//creating a div
var newDiv = document.createElement('div');

//adding class
newDiv.className = 'hello'

// addiing id
newDiv.id = 'hello1'

// adding attribute
newDiv.setAttribute('title', 'hello world')

// creating text node
var newDivText = document.createTextNode('hello work')

// adding text to div
newDiv.appendChild(newDivText)

//adding everything to dom
var main = document.querySelector('div .sub-main')
var h1 = document.querySelector('div h1')

console.log(newDiv)
main.insertBefore(newDiv, h1)