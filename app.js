var form = document.getElementById('addForm')
var itemList = document.getElementById('item')
var filter = document.getElementById('filter')

// form submit event
form.addEventListener('submit', addItem)

// add items
function addItem(e) {
    e.preventDefault();

    // getting input value
    var newItem = document.getElementById('txt').value;

    // create new li
    var li = document.createElement('li');
    // add class name
    li.className = 'items';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button
    var deleteBtn = document.createElement('button')

    //add classes to the delete button
    deleteBtn.className = 'btn btn-danger delete'

    // append text node to delete button 
    deleteBtn.appendChild(document.createTextNode('X'))

    //append delete button to li
    li.appendChild(deleteBtn)

    //append li to itemList
    itemList.appendChild(li)
}

// delete itemlist event
itemList.addEventListener('click', removeItem);

// remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            var li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}

// filter event
filter.addEventListener('keyup', filterItems)

// filter items
function filterItems(e) {
    // convert to lowercase 
    var text = e.target.value.toLowerCase();
    // get the all the li's
    var items =  itemList.getElementsByTagName('li')
    // convert HTMLCollection to array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none'
        }
    })
}