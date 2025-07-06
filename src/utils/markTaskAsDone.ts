export function markTaskAsDone(taskId) {
  const doneTasks = localStorage.getItem('doneTasks');
  const parsed = doneTasks ? JSON.parse(doneTasks) : [];
  if (!parsed.includes(taskId)) {
    parsed.push(taskId);
    const serial = JSON.stringify(parsed);
    localStorage.setItem('doneTasks', serial);
  }
}