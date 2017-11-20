function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // create a delete button
    let deleteButton = document.createElement('button');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set delete text
    deleteButton.textContent = 'delete';

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // attach the delete to-dos
    toDoList.appendChild(deleteButton);

    // empty the input
    newToDoText.value = '';

    deleteButton.onclick = () => {
      toDoList.removeChild(newLi);
      toDoList.removeChild(deleteButton);
    };

  });

}

window.onload = function() {
  onReady();
};
