export function markTaskAs(taskId, status) {
  const doneTasks = localStorage.getItem('doneTasks');
  const parsed = doneTasks ? JSON.parse(doneTasks) : [];
  
  switch (status) {
    case 'done':
      if (!parsed.includes(taskId)) {
        parsed.push(taskId);
      }
      break;
    case 'undone':
      const idx = parsed.indexOf(taskId);
      if (idx !== -1) {
        parsed.splice(idx, 1);
      }
      break;
  }

  const serial = JSON.stringify(parsed);
  localStorage.setItem('doneTasks', serial);
}