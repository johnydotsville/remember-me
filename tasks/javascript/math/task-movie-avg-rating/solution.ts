const audienceRatings = [8, 7, 9, 6, 8, 10, 7];

const rating = calculateAverageRating(audienceRatings)
console.log(`Рейтинг фильма: ${rating}`);

// Решение 1
function calculateAverageRating(ratings) {
  return Math.round(ratings.reduce((sum, rate) => sum + rate, 0) / ratings.length);
}

// Решение 2
function calculateAverageRating(ratings) {
  const deci = ratings.reduce((sum, rate) => sum + rate, 0) / ratings.length;
  return Math.round(deci * 100) / 100;
}