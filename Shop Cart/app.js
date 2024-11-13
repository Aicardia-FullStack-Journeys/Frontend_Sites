const desserts = [
  {
     "image": {
          "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
          "mobile": "./assets/images/image-waffle-mobile.jpg",
          "tablet": "./assets/images/image-waffle-tablet.jpg",
          "desktop": "./assets/images/image-waffle-desktop.jpg"
     },
     "name": "Waffle with Berries",
     "category": "Waffle",
     "price": 6.50
  },
  {
      "image": {
          "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
          "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
          "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
          "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
      },
      "name": "Vanilla Bean Crème Brûlée",
      "category": "Crème Brûlée",
      "price": 7.00
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
          "mobile": "./assets/images/image-macaron-mobile.jpg",
          "tablet": "./assets/images/image-macaron-tablet.jpg",
          "desktop": "./assets/images/image-macaron-desktop.jpg"
      },
      "name": "Macaron Mix of Five",
      "category": "Macaron",
      "price": 8.00
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
          "mobile": "./assets/images/image-tiramisu-mobile.jpg",
          "tablet": "./assets/images/image-tiramisu-tablet.jpg",
          "desktop": "./assets/images/image-tiramisu-desktop.jpg"
      },
      "name": "Classic Tiramisu",
      "category": "Tiramisu",
      "price": 5.50
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
          "mobile": "./assets/images/image-baklava-mobile.jpg",
          "tablet": "./assets/images/image-baklava-tablet.jpg",
          "desktop": "./assets/images/image-baklava-desktop.jpg"
      },
      "name": "Pistachio Baklava",
      "category": "Baklava",
      "price": 4.00
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
          "mobile": "./assets/images/image-meringue-mobile.jpg",
          "tablet": "./assets/images/image-meringue-tablet.jpg",
          "desktop": "./assets/images/image-meringue-desktop.jpg"
      },
      "name": "Lemon Meringue Pie",
      "category": "Pie",
      "price": 5.00
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
          "mobile": "./assets/images/image-cake-mobile.jpg",
          "tablet": "./assets/images/image-cake-tablet.jpg",
          "desktop": "./assets/images/image-cake-desktop.jpg"
      },
      "name": "Red Velvet Cake",
      "category": "Cake",
      "price": 4.50
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
          "mobile": "./assets/images/image-brownie-mobile.jpg",
          "tablet": "./assets/images/image-brownie-tablet.jpg",
          "desktop": "./assets/images/image-brownie-desktop.jpg"
      },
      "name": "Salted Caramel Brownie",
      "category": "Brownie",
      "price": 4.50
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
          "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
          "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
          "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
      },
      "name": "Vanilla Panna Cotta",
      "category": "Panna Cotta",
      "price": 6.50
   }
];

const cartList = [];

function findExistingItem(product){
  
  //if (cartList.length > 0){
    const existingItem = cartList.find(cartItem => cartItem.category === product.category);
    return existingItem;
  //}
  
}


const shoppingItemsList = document.getElementById('items-gallery').querySelector('ul');

function createListItem(dessert) {
  const li = document.createElement('li');
  li.className = 'item';

  const imageButtonWrapper = document.createElement('div');
  imageButtonWrapper.className = 'item-image-button';
  //imageButtonWrapper.id = `dessert-${dessert.category}`;
  dessert.imageButtonWrapper  = imageButtonWrapper ;

  const img = document.createElement('img');
  img.className = "img-btn-img";
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1024) {
    img.src = dessert.image.desktop;
  } else if (screenWidth >= 768) {
    img.src = dessert.image.tablet;
  } else {
    img.src = dessert.image.thumbnail;
  }
  img.alt = dessert.name;

  const buttonElement = createAddToCartButton(dessert);
  const buttonElement2 = createPlusMinButton(dessert, 1);

  imageButtonWrapper .appendChild(img);
  imageButtonWrapper .appendChild(buttonElement);
  imageButtonWrapper.appendChild(buttonElement2);

  const itemType = document.createElement('p');
  itemType.className = 'item-type';
  itemType.textContent = dessert.category;

  const itemName = document.createElement('p');
  itemName.className = 'item-name';
  itemName.textContent = dessert.name;

  const itemPrice = document.createElement('p');
  itemPrice.className = 'item-price';
  itemPrice.textContent = '$' + dessert.price.toFixed(2);

  li.appendChild(imageButtonWrapper );
  li.appendChild(itemType);
  li.appendChild(itemName);
  li.appendChild(itemPrice);

  return li;
}

//---buttons

function createAddToCartButton(dessert) {
  const addToCartButton = document.createElement('div');
  addToCartButton.className = 'add-cart-button';
  addToCartButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg> Add to Cart `;
  
  addToCartButton.addEventListener('click', () => {
    addToCart(dessert);
  });
  return addToCartButton;
}

function createPlusMinButton(dessert) {
  const button = document.createElement('div');
  button.className = 'plus-min-button';
  button.classList.add('plus-min-button', 'hidden');

  button.innerHTML = `
    <div class="minus-svg">
    <svg class="minus-svg" xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
      <path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/>
    </svg>
   </div>
    <p class="plus-min-quantity"></p>
    
    <div class="plus-svg">
      <svg class="plus-svg" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
        <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
      </svg>
    </div>
  `;
  const quantityText = button.getElementsByClassName('plus-min-quantity')[0];
  const minusSVG = button.querySelector('.minus-svg');
  const plusSVG = button.querySelector('.plus-svg');

  minusSVG.addEventListener('click', () => {
    const existingItem = findExistingItem(dessert);
    if (existingItem.quantity >= 1) {
      quantityText.textContent = getQuantityFromCart(dessert)-1;
      removeFromCart(existingItem);
      updateCartDisplay();
    }
  });

  plusSVG.addEventListener('click', () => {
    quantityText.textContent = getQuantityFromCart(dessert);
    addToCart(dessert);
    updateCartDisplay();
  });

  return button;
}

desserts.forEach(dessert => {
  shoppingItemsList.appendChild(createListItem(dessert));
});



//Cart View
let listLength = 0;
const cartItemsElement = document.querySelector('.cart-items');
const emptyCartElement = cartItemsElement.querySelector('.empty-cart');
const filledCartElement = cartItemsElement.querySelector('.filled-cart');
const cartTotalElement = document.getElementById('cart-total');
const cartTotalSpan = cartTotalElement.querySelector('.total');


updateCartDisplay();

function getQuantityFromCart(dessert) {
  const existingItem = findExistingItem(dessert);
  return existingItem ? existingItem.quantity : 0;
}

function toggleButton(dessert) {
  const buttonContainer = dessert.imageButtonWrapper; 
  const existingAddToCartButton = buttonContainer.querySelector('.add-cart-button');
  const existingPlusMinButton = buttonContainer.querySelector('.plus-min-button');

  const quantity = getQuantityFromCart(dessert);

  if (quantity > 0) {
    existingAddToCartButton.classList.add('hidden');
    existingPlusMinButton.classList.remove('hidden');
    existingPlusMinButton.querySelector('.plus-min-quantity').textContent = getQuantityFromCart(dessert);
  } else {
    existingPlusMinButton.classList.add('hidden');
    existingAddToCartButton.classList.remove('hidden');
  }

 // const existingItem = findExistingItem(dessert);
 // const buttonContainers = document.querySelectorAll(`.item-image-button`);
/*
  buttonContainers.forEach(function(buttonContainer){

    const existingAddToCartButton = buttonContainer.querySelector('.add-cart-button');
    let existingPlusMinButton = buttonContainer.querySelector('.plus-min-button');
    
    //find how to access each individual button
    //read up let and const
    
    if (existingItem) { 
      /* buttonContainer.removeChild(existingAddToCartButton);
      const plusMinButton = createPlusMinButton(dessert, getQuantityFromCart(dessert)); 
      buttonContainer.appendChild(plusMinButton);
      existingPlusMinButton = buttonContainer.querySelector('.plus-min-button'); */

  //    buttonContainer.querySelector('.add-cart-button').classList.add('hidden');
  //    buttonContainer.querySelector('.plus-min-button').classList.remove('hidden');
  //  } else {
      /*buttonContainer.removeChild(existingPlusMinButton);
      const addToCartButton = createAddToCartButton(dessert);
      buttonContainer.appendChild(addToCartButton);*/
  //    buttonContainer.querySelector('.plus-min-button').classList.add('hidden');
  //    buttonContainer.querySelector('.add-cart-button').classList.remove('hidden');
  //  }
  //});
}

function addToCart(item) {
  
  const existingItem = findExistingItem(item);
  const clickedDessert = item; 
  //console.log("my item: " + clickedDessert);

  console.log(existingItem);
  if (existingItem) {
    existingItem.quantity = existingItem.quantity ? existingItem.quantity + 1 : 1;
  } else {
    
    item.quantity = 1;
    cartList.push(item);
    
  }
  
  updateCartDisplay();
  toggleButton(clickedDessert);
}

function removeFromCart(item) {
  const existingItem = findExistingItem(item);
  if (existingItem && existingItem.quantity > 1) {
    existingItem.quantity--;
    updateCartDisplay();
    toggleButton(item);
  } else if (existingItem && existingItem.quantity === 1) {
    const index = cartList.indexOf(existingItem);
    cartList.splice(index, 1);
    updateCartDisplay();
    toggleButton(item);
  }
}

function updateCartDisplay() {
  listLength = cartList.length;

  if (listLength === 0) {
      emptyCartElement.style.display = 'block';
      filledCartElement.style.display = 'none';
      cartTotalElement.style.display = 'none'; 
  } else {
      emptyCartElement.style.display = 'none';
      filledCartElement.style.display = 'block';
      cartTotalElement.style.display = 'block'; 
  }

  let totalQuantity = 0;
  let totalPrice = 0;
  
  cartList.forEach(item => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  const cartItemsElement = document.querySelector('.filled-cart');
  cartItemsElement.innerHTML = '';

  if (cartList.length > 0) {
    cartList.forEach(item => {
      const cartItemElement = document.createElement('div');
      cartItemElement.className = 'cart-item';

      const itemNameElement = document.createElement('p');
      itemNameElement.className = 'cart-item-name';
      itemNameElement.textContent = item.name;
      
      const quantityElement = document.createElement('div');
      quantityElement.className = 'quantity';

      const itemQtyElement = document.createElement('span');
      itemQtyElement.className = 'item-qty';
      itemQtyElement.textContent = item.quantity + "x";

      const singlePriceElement = document.createElement('span');
      singlePriceElement.className = 'single-price';
      singlePriceElement.textContent = '@$' + item.price.toFixed(2);

      const priceTotalElement = document.createElement('span');
      priceTotalElement.className = 'price-total';
      priceTotalElement.textContent = '$' + (item.price * item.quantity).toFixed(2);

      const removeItemButton = document.createElement('svg');
      removeItemButton.className = 'remove-item';
      removeItemButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>';

      removeItemButton.addEventListener('click', () => {
        const itemIndex = cartList.indexOf(item);
        if (itemIndex !== -1) {
          cartList.splice(itemIndex, 1); 
          updateCartDisplay();
        }
      });
 
      //toggleButton(item);

      quantityElement.appendChild(itemQtyElement);
      quantityElement.appendChild(singlePriceElement);
      quantityElement.appendChild(priceTotalElement);
      quantityElement.appendChild(removeItemButton);

      cartItemElement.appendChild(itemNameElement);
      cartItemElement.appendChild(quantityElement);

      cartItemsElement.appendChild(cartItemElement);

    });    


    const cartTotalElement = document.getElementById('cart-total');
    cartTotalElement.style.display = 'block';
    const cartTotalSpan = cartTotalElement.querySelector('.total');
    cartTotalSpan.textContent = '$' + totalPrice.toFixed(2);
  } 

  const cartHeader = document.querySelector('.cart-header h2');
  cartHeader.textContent = `Your Cart (${totalQuantity})`;

}


//popup
const orderPopup = document.getElementById('order-popup');
const orderList = document.getElementById('order-list');
const totalPriceElement = document.getElementById('total-price');
const startNewOrderButton = document.getElementById('start-new-order');

const confirmOrderButton = document.querySelector('.order-confirm'); 

confirmOrderButton.addEventListener('click', (event) => {
  event.preventDefault();
  orderList.innerHTML = '';

  let totalPrice = 0;
  cartList.forEach(item => {
  totalPrice += item.price * item.quantity;
});

cartList.forEach(item => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <div class="item-block">
      <div>
        <img src="${item.image.thumbnail}" alt="${item.name}">
      </div>
      <div class="item-info">
        <p>${item.name}</p>
        <div>
        <span class="pop-qty">${item.quantity}x</span>
        <span class="qty-price">@$${item.price.toFixed(2)}</span>
        </div>
      </div>
      <div class="price-block">
        <p>$${(item.price * item.quantity).toFixed(2)}<p>
      </div>
    </div>
  `;
  orderList.appendChild(listItem);
});

totalPriceElement.innerHTML = `
  <div>
    <p>Order Total: </p>
  </div>
  <div>
    <p class="pop-total">$${totalPrice.toFixed(2)}</p>
  </div>
  `;

orderPopup.style.display = 'block';
});

startNewOrderButton.addEventListener('click', () => {

cartList.length = 0;
updateCartDisplay();

orderPopup.style.display = 'none';
});


