let todolist =
  [
    {
      item: 'Buy Milk',
      dueDate: '30/03/2025'
    },
    {
      item: 'Go to colllege',
      dueDate: '30/03/2025'
    }
  ];
displayItems()


function addTodo() {
  let inputElement = document.querySelector('#Todo-input');
  let dateElement = document.querySelector('#todo-date');

  let todoItem = inputElement.value;
  let tododate = dateElement.value;
  todolist.push({ item: todoItem, dueDate: tododate });
  inputElement.value = ''
  dateElement.value = ''

  displayItems()

}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';

  for (let i = 0; i < todolist.length; i++) {

    let {item,dueDate}=todolist [i];
    newHtml += `

<span>${item}</span>
<span>${dueDate}</span>

<button class=" btn-delete " onclick="todolist.splice(${i},1);
displayItems();">Delete</button> 
 `;
  }
  containerElement.innerHTML = newHtml;
}