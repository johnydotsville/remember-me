const userInput = document.querySelector('#userSearch');

const debouncedSearch = debounce(goSearch, 1500);
userInput.addEventListener('input', (event) => debouncedSearch(event.target.value));

function goSearch(value) {
  console.log(`Запрос поиска на сервер: ${value}`)
}

function debounce(fn, delayMs) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delayMs);
  }
}