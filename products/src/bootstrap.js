import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;

  // React에서는 다음과 같이 적용
  // ReactDOM.render(<App />, el);
};

// Context / Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// which DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render our app into that element

if (process.env.NODE_ENV === 'development') {
  // products remote app에만 존재하도록 약속된 id를 가진 요소
  const remoteEl = document.getElementById('remote-dev-products');

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
