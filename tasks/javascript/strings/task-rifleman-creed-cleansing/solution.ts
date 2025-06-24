const text = '   This is my rifle, this is my gun. This is for fighting, this is for fun.   ';

const cleaned = text.trim();
const sentenses = cleaned.split('. ').length;
const chars = cleaned.split('').length;
const firstWord = cleaned.split(' ')[0];

console.log(`В тексте ${sentenses} предложений и ${chars} символов. Первое слово: ${firstWord}`);