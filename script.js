let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

priority.onclick = function () {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
  } else {
    priority.textContent = 'Обычная задача';
  }
};

form.onsubmit = function (evt) {
  evt.preventDefault();

  // Создаём новую задачу - элемент li
  let newTask = document.createElement('li');

  // Берём текст задачи из поля ввода input
  newTask.textContent = input.value;

  // Проверяем, есть ли у переключателя priority класс is-important
  if (priority.classList.contains('is-important')) {
    // Если класс есть, добавляем задаче класс is-important
    newTask.classList.add('is-important');
  }

  // Добавляем новую задачу в конец списка list
  list.append(newTask);

  // Очищаем поле ввода input
  input.value = '';
};

/*
1. Каждая задача в списке — это элемент li. При отправке формы (переменная form) новая задача добавляется в конец списка (переменная list).
2. Текст задачи берётся из поля ввода (переменная input).
3. Если у переключателя приоритета (переменная priority) есть класс is-important, то новой задаче также добавляется класс is-important.
4. Бонус: после того, как задача добавится в список, поле ввода можно очистить. Но можно не очищать. Подходят оба варианта.
*/
