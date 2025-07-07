function createUserAction(action, ...details) {
  console.log(`Количество деталей: ${details.length}`);
  details.forEach(detail => console.log(detail));
  return {
    action,
    details
  }
}