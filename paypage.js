
let totalPrice = localStorage.getItem("totalPrice");
if (totalPrice !== null) {
  totalPrice = parseFloat(totalPrice);
  if (isNaN(totalPrice)) {
    console.error("Invalid total price:", totalPrice);
    totalPrice = 0; // or some default value
  }
} else {
  totalPrice = 0; // or some default value
}

let subtotalPrice = totalPrice; // assume this is the subtotal price
let deliveryFee = 250; // delivery fee
let totalprice = subtotalPrice + deliveryFee;

document.getElementById("subtotal-price").innerText = subtotalPrice.toFixed(2);
document.getElementById("total-price").innerText = totalprice.toFixed(2);

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
  // Get the input field
  const expiryDateInput = document.getElementById('expiry-date');

  // Add an event listener to the input field
  expiryDateInput.addEventListener('input', () => {
    // Get the input value
    const inputValue = expiryDateInput.value;

    // Check if the input value matches the pattern
    const pattern = /^[0-9]{2}[0-9]{2}$/;
    if (!pattern.test(inputValue)) {
      // Show an error message if the input value is invalid
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('error-message');
      errorMessage.textContent = 'Invalid expiry date format. Please use MMYY.';
      expiryDateInput.parentNode.appendChild(errorMessage);
    } else {
      // Remove the error message if the input value is valid
      const errorMessages = expiryDateInput.parentNode.querySelectorAll('.error-message');
      errorMessages.forEach((errorMessage) => {
        errorMessage.remove();
      });
    }
  });

  // Add an event listener to the form submission
  document.addEventListener('submit', (event) => {
    // Prevent the form submission if the input value is invalid
    if (!expiryDateInput.value.match(/^[0-9]{2}[0-9]{2}$/)) {
      event.preventDefault();
      alert('Invalid expiry date format. Please use MMYY.');
    }
  });


  
    // drop down btn

// Get the button and the dropdown content
const ddbutton = document.querySelector('.dropbtn1');
const ddContent = document.querySelector('.dropdown-content');

// Toggle the dropdown content when the button is clicked
ddbutton.addEventListener('click', function() {
    ddContent.classList.toggle('show-ddbtn');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn1')) {
        if (ddContent.classList.contains('show-ddbtn')) {
            ddContent.classList.remove('show-ddbtn');
        }
    }
});