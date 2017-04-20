//consoleShoppingList
var container = document.createElement('div');
document.body.appendChild(container);

var groceryItems = [
  {
    name: 'Mango',
    price: 2
  },
  {
    name: 'Milk',
    price: 3.99
  },
  {
    name: 'Bread',
    price: 4.99
  },
  {
    name: 'Beer',
    price: 12.99
  },
  {
    name: 'Scotch',
    price: 39.99
  },
  {
    name: 'Dom Perignon',
    price: 189.99
  }
];

var total = 0;

groceryItems.forEach(function(item) {
  var name = document.createElement('ol');
  name.innerText = item.name;
  var price = document.createElement('li');
  price.innerText = item.price;
  document.body.appendChild(name);
  document.body.appendChild(price);
  total += item.price;
  console.log(total);
});

var totalEle = document.createElement('p');
document.body.appendChild(totalEle);
totalEle.innerText = 'The total price is $' + total.toFixed(2);
