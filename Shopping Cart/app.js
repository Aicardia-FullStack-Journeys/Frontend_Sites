const lamps = [
          {
            "name": "A-Stand Lamp",
            "image": "./Assets/aStand_lamp.png",
            "price": 23.20
          },
          {
            "name": "Banana Lamp",
            "image": "./Assets/banana_lamp.png",
            "price": 17.00
          },
          {
            "name": "Bowl Lamp",
            "image": "./Assets/bowl_lamps.png",
            "price": 7.00
          },
          {
            "name": "Drop Lamp",
            "image": "./Assets/drop_lamps.png",
            "price": 6.00
          },
          {
            "name": "Dune Lamp",
            "image": "./Assets/dune_lamp.png",
            "price": 24.00
          },
          {
            "name": "Flask Lamp",
            "image": "./Assets/flask_lamps.png",
            "price": 8.10
          },
          {
            "name": "Hive Lamp",
            "image": "./Assets/hive_lamps.png",
            "price": 19.98
          },
          {
            "name": "Pear Lamp",
            "image": "./Assets/pear_lamp.png",
            "price": 13.24
          },
          {
            "name": "Pyramid Lamp",
            "image": "./Assets/pyramid_lamp.png",
            "price": 12.30
          }
        ];
  
    const shoppingItemsList = document.getElementById('shopping-items').querySelector('ul');

  // Function to create and append a list item for each lamp
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
  
    const itemName = document.createElement('p');
    itemName.className = 'item-name';
    itemName.textContent = lamp.name;
  
    const itemPrice = document.createElement('p');
    itemPrice.className = 'item-price';
    itemPrice.textContent = '$' + lamp.price; 
  
    li.appendChild(div);
    li.appendChild(itemType);
    li.appendChild(itemName);
    li.appendChild(itemPrice);
  
    return li;
  }
  
  // Populate the list with items from the JSON data
  lamps.forEach(lamp => {
    shoppingItemsList.appendChild(createListItem(lamp));
  });