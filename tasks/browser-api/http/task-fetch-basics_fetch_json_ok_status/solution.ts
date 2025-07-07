async function processUrls(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log('Не удалось выполнить запрос.');
      if (response.status === 404) {
        console.log('Ресурс не найден.');
      }
      return;
    }
    
    const result = await response.json();
    console.log(result[0].title);
  } catch (error) {
    if (error instanceof TypeError) {
      console.log('Ошибка сети.');
    }
    if (error instanceof SyntaxError) {
      console.log('Ошибка парсинга JSON.');
    }
  }
}