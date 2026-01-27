// Get elements
const plusButtons = document.querySelectorAll('.fa-plus-circle');
const minusButtons = document.querySelectorAll('.fa-minus-circle');
const trashButtons = document.querySelectorAll('.fa-trash-alt');
const heartButtons = document.querySelectorAll('.fa-heart');
const totalSpan = document.querySelector('.total');

// Function update total price
function updateTotal() {
  let total = 0;
  const products = document.querySelectorAll('.card-body');
  products.forEach(product => {
    const unitPrice = parseFloat(product.querySelector('.unit-price').textContent.replace(' $', ''));
    const quantity = parseInt(product.querySelector('.quantity').textContent);
    total += unitPrice * quantity;
  });
  totalSpan.textContent = total + ' $';
}

// event listeners for plus buttons
plusButtons.forEach(button => {
  button.addEventListener('click', () => {
    const quantitySpan = button.nextElementSibling;
    let quantity = parseInt(quantitySpan.textContent);
    quantity++;
    quantitySpan.textContent = quantity;
    updateTotal();
  });
});

//  event listeners for minus buttons
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

// event listeners for trash buttons
trashButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.card-body');
    productCard.remove();
    updateTotal();
  });
});

// event listeners for heart buttons
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

updateTotal();