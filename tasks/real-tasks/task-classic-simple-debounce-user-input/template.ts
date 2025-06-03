// html
<input id="userSearch" />


// javascript
const userInput = document.querySelector('#userSearch');

userInput.addEventListener('input', () => goSearch(userInput.value));

function goSearch(value) {
  console.log(`Запрос поиска на сервер: ${value}`)
}