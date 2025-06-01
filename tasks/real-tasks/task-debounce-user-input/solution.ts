const userInput = document.querySelector('#userSearch');

userInput.addEventListener('input', debounce((event) => goSearch(event.target.value), 1500));

function goSearch(value) {
  console.log(`Запрос поиска на сервер: ${value}`)
}

function debounce(func, delayMs) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delayMs);
  }
}