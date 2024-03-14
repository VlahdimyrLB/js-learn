// Reduce - Objects
// 1st parameter ('acc') - accumulator / total of all calculations
// 2nd parameter ('curr') - current value/iterations

const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "google pixel",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Xiami Poco F6 Pro",
    price: 899.99,
    amount: 4,
  },
];

//returning an object
//initial value is object
let total = cart.reduce(
  (total, cartItem) => {
    console.log(cartItem); //cartItem returns every object

    //destructure carItem
    const { amount, price } = cartItem;
    //count items
    total.totalItems += amount;
    //count sum
    total.cartTotal += amount * price;
    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);
console.log(total); // { totalItems: 7, cartTotal: 5199.93 }

// we can also DESTRUCTURE right away
let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    //destructure carItem
    const { amount, price } = cartItem;
    //count items
    total.totalItems += amount;
    //count sum
    total.cartTotal += amount * price;
    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);
cartTotal = parseFloat(cartTotal.toFixed(2));
console.log(totalItems, cartTotal); // 7 5199.93
