const initialItems = ['JavaScript', 'HTML', 'CSS', 'React', 'Angular', 'Zustand', 'NextJS', 'TypeScript'];

const listContainer = document.getElementById('listContainer');
const todoItemInput = document.getElementById('todoItemInput');
const todoForm = document.getElementById('todoForm');
const todo = document.getElementById('todo');

// Function to create a new todo item element
function createTodoElement(todoItem) {
  const todoElement = todo.content.cloneNode(true);
  const textElement = todoElement.querySelector('.text');
  const deleteButton = todoElement.querySelector('.delete');
  const editButton = todoElement.querySelector('.edit');
  const saveButton = todoElement.querySelector('.save');
  
  textElement.textContent = todoItem;
  
  deleteButton.addEventListener('click', () => {
    listContainer.removeChild(todoElement);
  });
  
  editButton.addEventListener('click', () => {
    const inputElement = document.createElement('input');
    inputElement.value = textElement.textContent;
    todoElement.replaceChild(inputElement, textElement);
    editButton.textContent = '💾';
    editButton.className = 'save';
  });
  
  saveButton.addEventListener('click', () => {
    const textElement = document.createElement('span');
    textElement.className = 'text';
    textElement.textContent = inputElement.value;
    todoElement.replaceChild(textElement, inputElement);
    saveButton.textContent = '✏️';
    saveButton.className = 'edit';
  });
  
  return todoElement;
}

// Event listener for form submission
todoForm.addEventListener('submit', e => {
  e.preventDefault();
  const todoItem = todoItemInput.value.trim();
  if (todoItem) {
    const newTodoElement = createTodoElement(todoItem);
    listContainer.appendChild(newTodoElement);
    todoItemInput.value = '';
  }
});

// Initialize the to-do list with initial items
initialItems.forEach(todoItem => {
  const newTodoElement = createTodoElement(todoItem);
  listContainer.appendChild(newTodoElement);
});
