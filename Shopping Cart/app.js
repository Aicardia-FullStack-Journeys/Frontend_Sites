const lamps = [
          {
            "name": "A-Stand Lamp",
            "image": "./Assets/aStand_lamp.png",
            "price": 23.29,
            "id": 1
          },
          {
            "name": "Banana Lamp",
            "image": "./Assets/banana_lamp.png",
            "price": 17.99,
            "id": 2
          },
          {
            "name": "Bowl Lamp",
            "image": "./Assets/bowl_lamps.png",
            "price": 7.16,
            "id": 3
          },
          {
            "name": "Drop Lamp",
            "image": "./Assets/drop_lamps.png",
            "price": 6.15,
            "id": 4
          },
          {
            "name": "Dune Lamp",
            "image": "./Assets/dune_lamp.png",
            "price": 24.25,
            "id": 5
          },
          {
            "name": "Flask Lamp",
            "image": "./Assets/flask_lamps.png",
            "price": 8.13,
            "id": 6
          },
          {
            "name": "Hive Lamp",
            "image": "./Assets/hive_lamps.png",
            "price": 19.98,
            "id": 7
          },
          {
            "name": "Pear Lamp",
            "image": "./Assets/pear_lamp.png",
            "price": 13.24,
            "id": 8
          },
          {
            "name": "Pyramid Lamp",
            "image": "./Assets/pyramid_lamp.png",
            "price": 12.33,
            "id": 9
          }
        ];
  
    const shoppingItemsList = document.getElementById('shopping-items').querySelector('ul');
    const cartList = document.querySelector('.cart-list');
    const cartTotalElement = document.getElementById('total');

function createListItem(lamp) {
    const li = document.createElement('li');
    li.className = 'item';
  
    const div = document.createElement('div');
    div.className = 'image-and-button';
  
    const img = document.createElement('img');
    img.src = lamp.image;
    img.alt = lamp.name;
  
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
  
    div.appendChild(img);
    div.appendChild(button);
  
    const itemType = document.createElement('p');
    itemType.className = 'item-type';
    itemType.textContent = 'Desk Lamp';
  
    const itemName = document.createElement('h2');
    itemName.className = 'item-name';
    itemName.textContent = lamp.name;
  
    const itemPrice = document.createElement('p');
    itemPrice.className = 'item-price';
    itemPrice.textContent = '$' + lamp.price; 
  
    li.appendChild(div);
    li.appendChild(itemType);
    li.appendChild(itemName);
    li.appendChild(itemPrice);

    const buttonSelect = li.querySelector('button');
    buttonSelect.addEventListener('click', () => {
      addToCart(lamp);
    });
  
    return li;
  }

  function addToCart(lamp) {
    const existingItem = cartList.querySelector(`.cart-item[data-id="${lamp.id}"]`);
    const currentTotal = parseFloat(cartTotalElement.textContent.slice(1)) || 0;

    if (existingItem) {
      const itemQuantity = existingItem.querySelector('.qty span:nth-child(2)');
      const itemPrice = existingItem.querySelector('.total');
  
      itemQuantity.textContent = parseInt(itemQuantity.textContent) + 1;
      itemPrice.textContent = `$${(parseFloat(itemPrice.textContent.slice(1)) + lamp.price).toFixed(2)}`;
    } else 
      {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.dataset.id = lamp.id; 

    cartItem.innerHTML = `
      <div>
        <img src="${lamp.image}">
      </div>
      <div class="name">
        ${lamp.name}
      </div>
      <div id="total">
        $${lamp.price.toFixed(2)}
      </div>
      <div class="qty">
        <span class="remove"><</span>
        <span>${1}</span>
        <span class="add">></span>
      </div>
    `;

    cartList.appendChild(cartItem);
  }

  const newTotal = currentTotal + lamp.price;
  cartTotalElement.textContent = `$${newTotal.toFixed(2)}`;
}

cartList.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('remove')) {
    removeItem(target.closest('.cart-item'));
  } else if (target.classList.contains('add')) {
    addItem(target.closest('.cart-item'));
  }
});

function removeItem(cartItem) {
  cartItem.remove();


  const itemPrice = parseFloat(cartItem.querySelector('.total').textContent.slice(1));
  const newTotal = cartTotalElement.textContent.slice(1) - itemPrice;
  cartTotalElement.textContent = `$${newTotal.toFixed(2)}`;

  const cartQuantity = document.querySelector('.icons span');
  cartQuantity.textContent = parseInt(cartQuantity.textContent) - 1;

}

function addItem(cartItem) {
  const itemQuantity = cartItem.querySelector('.qty span:nth-child(2)');
  const itemPrice = cartItem.querySelector('.total');

  itemQuantity.textContent = parseInt(itemQuantity.textContent) + 1;
  itemPrice.textContent = `$${(parseFloat(itemPrice.textContent.slice(1)) + lamp.price).toFixed(2)}`;

  // Update cart total
  const cartTotal = parseFloat(cartTotalElement.textContent.slice(1));
  const newTotal = cartTotal + lamp.price;
  cartTotalElement.textContent = `$${newTotal.toFixed(2)}`;
}
  

  lamps.forEach(lamp => {
    shoppingItemsList.appendChild(createListItem(lamp));
  });

 
/*
  let lampsHTML = document.querySelector('.items-list');
  let lamps = [];

  const addDataToHtml = () =>{
    lampsHTML.innerHTML = '';
    if(lamps.length > 0){
      lamps.forEach(lamp => {
        let newLamp = document.createElement('li');
        newLamp.className = "item";
        let itemPrice = "$" + lamp.price;
        newLamp.innerHTML = `
          <img src="${lamp.image}" alt="${lamp.name}">
          <button class="addToCart">Add to Cart</button>
          <p class="item-type">Desk Lamps</p>
          <h2 class="item-name">${lamp.name}</h2>
          <p class="item-price">${itemPrice}</p>
        `;
        console.log("New Lamp content:", newLamp.innerHTML);
        lampsHTML.appendChild(newLamp);
      })
    }
  }

  const initApp = async () => { 
    try {
      const response = await fetch('data.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data   
   = await response.json();
      lamps = data;
  
      document.addEventListener('DOMContentLoaded', () => {
        addDataToHtml();
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  initApp();

*/



