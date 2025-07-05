// Решение 1: первый попавшийся подходящий игрок
function getLucker(players, threshold = 10_000) {
  return players.find(p => p.score < threshold) || 'Нет подходящих игроков';
}

// Решение 2: случайный игрок из всех подходящих
function getLucker(players, threshold = 10_000) {
  const candidates = players.filter(p => p.score < threshold);
  return candidates.length 
    ? candidates[Math.floor(Math.random() * candidates.length)]
    : 'Нет подходящих игроков';
}