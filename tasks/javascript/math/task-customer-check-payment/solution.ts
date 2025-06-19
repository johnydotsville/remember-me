function totalPrice(cart) {
  return cart.reduce((total, product) => total += Math.trunc(product.price * product.quantity), 0);
}

console.log(`К оплате: ${totalPrice(cart)} руб.`);