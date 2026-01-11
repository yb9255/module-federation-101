import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

mountProducts(document.getElementById('container-my-products'));
mountCart(document.getElementById('container-my-cart'));

console.log('Container!');
