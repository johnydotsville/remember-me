const defaultHttpConfig = {
  baseURL: "https://api.example.com/v1",
  timeout: 5000,
  maxRetries: 3,
  enableLogging: false,
};

function createHttpClient(userConfig) {
  const finalConfig = { ...defaultHttpConfig, ...userConfig };
  console.log("Создан клиент с конфигом:", finalConfig);
}

createHttpClient(); // Использует дефолтный конфиг
createHttpClient({ 
  timeout: 2000 
}); // Меняем только timeout
createHttpClient({ timeout: "1000" });  // Ошибка! timeout дб числом