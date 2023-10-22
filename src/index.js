import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css";

const instruments = [
    {
        id: 1,
        img: 'https://static.dnipro-m.ua/cache/products/4878/catalog_origin_287445.jpg',
        name: "Шуруповерт",
        price: 1500,
        description: 'Дриль-шуруповерт мережевий Dnipro-M TD-30'
    },
    {
        id: 2,
        img: 'https://static.dnipro-m.ua/cache/products/5097/catalog_origin_284589.jpg',
        name: "Перфоратор",
        price: 3948,
        description: 'Перфоратор бочковий Dnipro-M BH-30'
    },
    {
        id: 3,
        img: 'https://static.dnipro-m.ua/cache/products/3938/catalog_origin_288043.jpg',
        name: "Шліфувальна машина",
        price: 1299,
        description: 'Кутова шліфувальна машина пневматична Dnipro-M PG-20S'
    },
    {
        id: 4,
        img: 'https://static.dnipro-m.ua/cache/products/5685/catalog_origin_286524.jpg',
        name: "Пила",
        price: 11049,
        description: 'Електропила ланцюгова Dnipro-M DSE-15S'
    },
    {
        id: 5,
        img: 'https://static.dnipro-m.ua/cache/products/6386/catalog_origin_262878.jpg',
        name: "Рівень",
        price: 897,
        description: 'Лазерний рівень Dnipro-M ML-330R'
    },
    {
        id: 6,
        img: 'https://static.dnipro-m.ua/cache/products/6566/catalog_origin_287856.jpg',
        name: "Тример",
        price: 3699,
        description: 'Тример електричний Dnipro-M 110'
    },
    {
        id: 7,
        img: 'https://static.dnipro-m.ua/cache/products/6483/catalog_origin_287164.jpg',
        name: "Тример",
        price: 11049,
        description: 'Мотокоса Dnipro-M 43'
    },
    {
        id: 8,
        img: 'https://static.dnipro-m.ua/cache/products/2745/catalog_origin_284077.jpg',
        name: "Генератор",
        price: 10890,
        description: 'Генератор бензиновий Dnipro-M GX-50E'
    },
];

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list')
// {
//     id: 1,
//     img: 'https://static.dnipro-m.ua/cache/products/4878/catalog_origin_287445.jpg',
//     name: "Шуруповерт",
//     price: 1500,
//     description: 'Дриль-шуруповерт мережевий Dnipro-M TD-30'
// },

function createMarkup(arr) {
    const markup = arr.map(({id, img, name}) => 
`<li data-id=${id} class="js-card">
<img src="${img}" alt="${name}" width="300">
<h2>${name} </h2>
<p>
<a href="#" class="js-info">More information</a>
</p>
<div>
  <button>Add to favorite</button>
  <button>Add to basket</button>
</div>
</li>` ).join('');

list.innerHTML = markup;
}

list.addEventListener('click', onClick);

function onClick(evt) {
evt.preventDefault();
if (evt.target.classList.contains('js-info')) {
    const { id } = evt.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    const instance = basicLightbox.create(`
	<div>
    <img src="${product.img}" alt="${product.name}" width="300">
    <h2>${product.name}</h2>
    <h3>${product.price}</h3>
    <p>${product.description}</p>
    <div>
      <button>Add to favorite</button>
      <button>Add to basket</button>
    </div>
  </div>
`);
instance.show();
   }
}

createMarkup(instruments);

function findProduct(productId){
    return instruments.find(({id}) => id === productId);
}