import faker from 'faker';

const message = `<div>You have ${faker.random.number()} items in your cart</div>`;

document.querySelector('#cart-dev').innerHTML = message;
