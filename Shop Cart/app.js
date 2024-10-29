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


const shoppingItemsList = document.getElementById('items-gallery').querySelector('ul');

function createListItem(dessert) {
    const li = document.createElement('li');
    li.className = 'item';
  
    const div = document.createElement('div');
    div.className = 'item-image-button';
  
    const img = document.createElement('img');
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      img.src = dessert.image.desktop;
    } else if (screenWidth >= 768) {
      img.src = dessert.image.tablet;
    } else {
      img.src = dessert.image.thumbnail;
    }
    img.alt = dessert.name;
  
    const button = document.createElement('button');
    button.className = 'cart-button';
    button.textContent = 'Add to Cart';

    div.appendChild(img);
    div.appendChild(button);
  
    const itemType = document.createElement('p');
    itemType.className = 'item-type';
    itemType.textContent = dessert.category;
  
    const itemName = document.createElement('p');
    itemName.className = 'item-name';
    itemName.textContent = dessert.name;
  
    const itemPrice = document.createElement('p');
    itemPrice.className = 'item-price';
    itemPrice.textContent = '$' + dessert.price.toFixed(2);
  
    li.appendChild(div);
    li.appendChild(itemType);
    li.appendChild(itemName);
    li.appendChild(itemPrice);

    const buttonSelect = li.querySelector('button');
    buttonSelect.addEventListener('click', () => {
      addToCart(dessert);
    });
  
    return li;
  }


  desserts.forEach(dessert => {
    shoppingItemsList.appendChild(createListItem(dessert));
  });


  
//Cart View

const cartList = [];
let listLength = 0;
const cartItemsElement = document.querySelector('.cart-items');
const emptyCartElement = cartItemsElement.querySelector('.empty-cart');
const filledCartElement = cartItemsElement.querySelector('.filled-cart');
const cartTotalElement = document.getElementById('cart-total');
const cartTotalSpan = cartTotalElement.querySelector('.total');



function addToCart(item) {
cartList.push(item);
updateCartDisplay();
}

updateCartDisplay();



function addToCart(item) {
    
    const existingItem = cartList.find(cartItem => cartItem.category === item.category);
  
    
    if (existingItem) {
      existingItem.quantity = existingItem.quantity ? existingItem.quantity + 1 : 1;
    } else {
      
      item.quantity = 1;
      cartList.push(item);
    }
    updateCartDisplay();
    console.log(listLength);
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

confirmOrderButton.addEventListener('click', () => {
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