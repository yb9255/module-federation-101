import faker from 'faker';

const mount = (el) => {
  const message = `<div>You have ${faker.random.number()} items in your cart</div>`;
  el.innerHTML = message;
};

// Context / Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// which DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render our app into that element

if (process.env.NODE_ENV === 'development') {
  // cart remote app에만 존재하도록 약속된 id를 가진 요소
  const remoteEl = document.getElementById('remote-cart-dev');

  if (remoteEl) {
    mount(remoteEl);
  }
}

// Context / Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products'
// WE DO NOT WANT to try to immediately render the app

export { mount };
