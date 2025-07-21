const price = cart.reduce((total, { price, quantity }) => total + Math.trunc(price*quantity), 0);

console.log(`К оплате: ${price}} руб.`);