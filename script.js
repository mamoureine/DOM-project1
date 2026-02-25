// Get all button and element references
const plusButtons = document.querySelectorAll('.fa-plus-circle');
const minusButtons = document.querySelectorAll('.fa-minus-circle');
const trashButtons = document.querySelectorAll('.fa-trash-alt');
const heartButtons = document.querySelectorAll('.fa-heart');
const totalSpan = document.querySelector('.total');


// Update Total Price Function

function updateTotal() {
  let total = 0;
  const productContainers = document.querySelectorAll('.card-body');
  
  productContainers.forEach(container => {
    const unitPriceElement = container.querySelector('.unit-price');
    const quantityElement = container.querySelector('.quantity');
    
    if (unitPriceElement && quantityElement) {
      const price = parseFloat(unitPriceElement.textContent.replace(' $', ''));
      const quantity = parseInt(quantityElement.textContent);
      total += price * quantity;
    }
  });
  
  totalSpan.textContent = total + ' $';
}

// Plus Button Event Listeners - Increase Quantity

plusButtons.forEach(button => {
  button.addEventListener('click', () => {
    const quantitySpan = button.nextElementSibling;
    let quantity = parseInt(quantitySpan.textContent);
    quantity++;
    quantitySpan.textContent = quantity;
    updateTotal();
  });
});

// Minus Button Event Listeners - Decrease Quantity

minusButtons.forEach(button => {
  button.addEventListener('click', () => {
    const quantitySpan = button.previousElementSibling;
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 0) {
      quantity--;
      quantitySpan.textContent = quantity;
      updateTotal();
    }
  });
});


// Trash Button Event Listeners - Delete Item

trashButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.card-body');
    if (productCard) {
      productCard.remove();
      updateTotal();
    }
  });
});


// Heart Button Event Listeners - Like/Unlike Item

heartButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('liked');
    if (button.classList.contains('liked')) {
      button.style.color = 'red';
    } else {
      button.style.color = 'black';
    }
  });
});


// Initialize Total on Page Load

updateTotal();
