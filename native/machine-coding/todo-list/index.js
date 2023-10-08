const initialItems = ['JavaScript', 'HTML', 'CSS', 'React', 'Angular', 'Zustand', 'NextJS', 'TypeScript'];

const listContainer = document.getElementById('listContainer');
const todoItemInput = document.getElementById('todoItemInput');
const todoForm = document.getElementById('todoForm');
const todoTemplate = document.getElementById('todo').content;

function addTodoItem(todoItem) {
  const todoElement = document.importNode(todoTemplate, true);
  const textElement = todoElement.querySelector('.text');
  const deleteButton = todoElement.querySelector('.delete');
  const editButton = todoElement.querySelector('.edit');
  const saveButton = todoElement.querySelector('.save');
  textElement.textContent = todoItem;

  deleteButton.addEventListener('click', () => {
    listContainer.removeChild(todoElement);
  });

  editButton.addEventListener('click', () => {
    textElement.contentEditable = true;
    textElement.focus();
    editButton.style.display = 'none';
    saveButton.style.display = 'inline';
  });

  saveButton.addEventListener('click', () => {
    textElement.contentEditable = false;
    editButton.style.display = 'inline';
    saveButton.style.display = 'none';
  });

  listContainer.appendChild(todoElement);
  todoItemInput.value = '';
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoItem = todoItemInput.value.trim();
  if (todoItem) {
    addTodoItem(todoItem);
  }
});

initialItems.forEach(addTodoItem);
