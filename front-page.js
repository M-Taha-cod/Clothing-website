const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown, index) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");

    // Close other dropdowns
    dropdowns.forEach((otherDropdown, otherIndex) => {
      if (otherIndex !== index) {
        otherDropdown.querySelector(".caret").classList.remove("caret-rotate");
        otherDropdown.querySelector(".menu").classList.remove("menu-open");
        otherDropdown.querySelector(".selected").innerText = otherDropdown.querySelector(".selected").getAttribute("data-default");
      }
    });
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      selected.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");

      // Close other dropdowns
      dropdowns.forEach((otherDropdown, otherIndex) => {
        if (otherIndex !== index) {
          otherDropdown.querySelector(".caret").classList.remove("caret-rotate");
          otherDropdown.querySelector(".menu").classList.remove("menu-open");
          otherDropdown.querySelector(".selected").innerText = otherDropdown.querySelector(".selected").getAttribute("data-default");
        }
      });
    });
  });
});


document.getElementById('shirt-button').addEventListener('click', function() {
  toggleSections('shirt-section');
});

document.getElementById('tshirt-button').addEventListener('click', function() {
  toggleSections('tshirt-section');
});

document.getElementById('jepa-button').addEventListener('click', function() {
  toggleSections('JEPA-section');
});

document.getElementById('trouser-button').addEventListener('click', function() {
  toggleSections('trouser-section');
});

document.getElementById('short-button').addEventListener('click', function() {
  toggleSections('short-section');
});

document.getElementById('sweater-button').addEventListener('click', function() {
  toggleSections('sweater-section');
});

// women section

document.getElementById('Wshirt-button').addEventListener('click', function() {
  toggleSections('Wshirt-section');
});

document.getElementById('blouse-button').addEventListener('click', function() {
  toggleSections('blouses-section');
});

document.getElementById('jeans-button').addEventListener('click', function() {
  toggleSections('Wjean-section');
});

document.getElementById('Wtrouser-button').addEventListener('click', function() {
  toggleSections('Wtrouser-section');
});

document.getElementById('skirtshort-button').addEventListener('click', function() {
  toggleSections('skirtshort-section');
});

document.getElementById('Wsweater-button').addEventListener('click', function() {
  toggleSections('Wsweater-section');
});

document.getElementById('hoddiejacket-button').addEventListener('click', function() {
  toggleSections('hoddiejacket-section');
});

document.getElementById('shoes-button').addEventListener('click', function() {
  toggleSections('shoes-section');
});

document.getElementById('NA-button').addEventListener('click', function() {
  toggleSections('default-section');
});

function toggleSections(activeSection) {
  document.getElementById('default-section').style.display = 'none';
  document.getElementById('shirt-section').style.display = 'none';
  document.getElementById('tshirt-section').style.display = 'none';
  document.getElementById('JEPA-section').style.display = 'none';
  document.getElementById('trouser-section').style.display = 'none';
  document.getElementById('short-section').style.display = 'none';
  document.getElementById('sweater-section').style.display = 'none';
  // women section
  document.getElementById('Wshirt-section').style.display = 'none';
  document.getElementById('blouses-section').style.display = 'none';
  document.getElementById('Wjean-section').style.display = 'none';
  document.getElementById('Wtrouser-section').style.display = 'none';
  document.getElementById('skirtshort-section').style.display = 'none';
  document.getElementById('Wsweater-section').style.display = 'none';
  document.getElementById('hoddiejacket-section').style.display = 'none';
  document.getElementById('shoes-section').style.display = 'none';
  document.getElementById(activeSection).style.display = 'block';
}

function addSectionEventListener(sectionId, buttonId, sectionInfoId) {
  const section = document.querySelector(`#${sectionId}`);
  const button = document.querySelector(`#${buttonId}`);
  const sectionInfo = document.querySelector(`#${sectionInfoId}`);

  button.addEventListener('click', () => {
    const productBoxes = section.querySelectorAll('.product-box');
    const sectionName = section.getAttribute('name').split(' ')[0];
    const sectionInfoText = `This section has " ${productBoxes.length} " products from " ${sectionName} "`;
    sectionInfo.textContent = sectionInfoText;
  });
}

addSectionEventListener('default-section', 'NA-button', 'section-info');
addSectionEventListener('shirt-section', 'shirt-button', 'section-info');
addSectionEventListener('tshirt-section', 'tshirt-button', 'section-info');
addSectionEventListener('JEPA-section', 'jepa-button', 'section-info');
addSectionEventListener('trouser-section', 'trouser-button', 'section-info');
addSectionEventListener('short-section', 'short-button', 'section-info');
addSectionEventListener('sweater-section', 'sweater-button', 'section-info');
addSectionEventListener('Wshirt-section', 'Wshirt-button', 'section-info');
addSectionEventListener('blouses-section', 'blouse-button', 'section-info');
addSectionEventListener('Wjean-section', 'jeans-button', 'section-info');
addSectionEventListener('Wtrouser-section', 'Wtrouser-button', 'section-info');
addSectionEventListener('skirtshort-section', 'skirtshort-button', 'section-info');
addSectionEventListener('Wsweater-section', 'Wsweater-button', 'section-info');
addSectionEventListener('hoddiejacket-section', 'hoddiejacket-button', 'section-info');
addSectionEventListener('shoes-section', 'shoes-button', 'section-info');

let payBtn = document.querySelector('.btn-buy');

payBtn.addEventListener("click", () => {
    window.location.href = "payment.html";
});

let cartIcon = document.querySelector('.cart-div');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// open cart
cartIcon.onclick = () =>{
    cart.classList.add("active");
};

//close cart

closeCart.onclick = () =>{
    cart.classList.remove("active");
};

//cart working
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}



function ready() {
    var removeCartButton = document.getElementsByClassName("cart-remove");
    for (var i = 0; i < removeCartButton.length; i++) {
        var button = removeCartButton[i];
        button.addEventListener("click", removeCartItem);
    }

    //quantity change
    var quantityInput = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i];
        input.addEventListener("change", quantityChanged);
    }
    //add to cart
    var addCart = document.getElementsByClassName("addtocart");
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    loadCartItem();
}

// Update removeCartItem function
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
  saveCartItems();
  updateCartIcon();
}

function quantityChanged(event){
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
  }
  updatetotal();
  saveCartItems();
  updateCartIcon();
}



function addCartClicked() {
  var title = document.querySelector(".product-detail h1").textContent;
  var price = document.querySelector(".price-detail").innerText;
  var productImg = document.querySelector(".product-img-cont").src;
  var sizeSelect = document.querySelector('#size'); // get the size select element
  var selectedIndex = sizeSelect.selectedIndex; // get the selected index
  var selectedSize = sizeSelect.options[selectedIndex].textContent; // get the selected size text content
  var quantityDiv = document.querySelector('.quantity-div'); // get the quantity div
  var quantitySpan = quantityDiv.querySelector('.num'); // get the quantity span
  var quantityValue = parseInt(quantitySpan.textContent); // get the current quantity value
  addProductToCart(title, price, productImg, selectedSize, quantityValue);
  updatetotal();
  saveCartItems();
  updateCartIcon();
}

function addProductToCart(title, price, productImg, sizeSelect, quantityValue) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = document.getElementsByClassName("cart-product-title");
  for (var i=0; i < cartItemsNames.length; i++){
      if (cartItemsNames[i].innerText == title) {
          alert("you have already added this item to cart");
          return;
      }
  }

  var cartBoxContent = `
   <img src="${productImg}" alt="" class="cart-img" height="300px" width="100%">
      <div class="detail-box">
          <div class="cart-product-title">${title}</div>
          <div class="cart-price">${price}</div>
          <div class="size-div">
          <pre>Size: </pre>
          <div class="cart-size"> ${sizeSelect}</div>
          </div>
          <input 
          type="number"
          name=""
          id=""
          value="${quantityValue}"
          class="cart-quantity">
      </div>
  <!-- remove item -->
          <i class="fa-solid fa-trash cart-remove"></i>`;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
   .getElementsByClassName('cart-remove')[0]
   .addEventListener("click", removeCartItem);
  cartShopBox
   .getElementsByClassName("cart-quantity")[0]
   .addEventListener("change", quantityChanged);
   saveCartItems();
   updateCartIcon();
}


// update total
function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];

    // Trim and sanitize the input
    var priceText = priceElement.innerText.trim().replace("R.S ", "");
    var quantityText = quantityElement.value.trim();

    // Check for empty or null values
    if (priceText === "" || quantityText === "") {
      console.error("Price or quantity is empty!");
      return;
    }

    // Use a regular expression to extract the numeric value
    var price = parseInt(priceText.replace(/[^0-9]/g, ""));
    var quantity = parseInt(quantityText.replace(/[^0-9]/g, ""));

    // Add some error handling
    if (isNaN(price) || isNaN(quantity)) {
      console.error("Invalid price or quantity:", price, quantity);
      return;
    }

    total += price * quantity;
  }

  // Round the total to 2 decimal places
  total = Math.round(total * 100) / 100;

  // Check if total is still NaN
  if (isNaN(total)) {
    console.error("Total is NaN!");
    return;
  }

  document.getElementsByClassName("total-price")[0].innerText = "R.s" + total;

  // Save to local storage
  localStorage.setItem("cartTotal", total);
}

//save to local storage
function saveCartItems () {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = document.querySelectorAll(".cart-box");
  var cartItems = [];

  for (var cartBox of cartBoxes){
      var titleElement = cartBox.getElementsByClassName("cart-product-title")[0];
      var priceElement = cartBox.getElementsByClassName("cart-price")[0];
      var sizeElement = cartBox.getElementsByClassName("cart-size")[0];
      var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
      var productImg = cartBox.getElementsByClassName("cart-img")[0].src;


      var item = {
          title: titleElement.innerText,
          price: priceElement.innerText,
          size: sizeElement.innerText,
          quantity: quantityElement.value,
          productImg: productImg,
      };
      cartItems.push(item);
  }
  localStorage.setItem("cart-items", JSON.stringify(cartItems));
}


//loads in cart
// function loadCartItem () {
//   var cartItems = localStorage.getItem("cart-items");
//   if (cartItems) {
//       cartItems = JSON.parse(cartItems);

//       for (var item of cartItems) {
//           addProductToCart(item.title, item.price, item.productImg, item.size);

//           var cartBoxes = document.querySelectorAll(".cart-box");
//           var cartBox = cartBoxes[cartBoxes.length - 1];
//           var sizeElement = cartBox.getElementsByClassName("size-span")[0];
//           sizeElement.style.display = "none";

//           var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
//           quantityElement.value = item.quantity;
//       }
//   }
//   var cartTotal = localStorage.getItem("cartTotal");
//   if(cartTotal) {
//       document.getElementsByClassName("total-price")[0].innerText = "R.s  " + cartTotal;
//   }
//   updateCartIcon();
// }

function loadCartItem() {
  var cartItems = localStorage.getItem("cart-items");
  if (cartItems) {
    cartItems = JSON.parse(cartItems);

    for (var item of cartItems) {
      addProductToCart(item.title, item.price, item.productImg, item.size, item.quantity);

      var cartBoxes = document.querySelectorAll(".cart-box");
      var cartBox = cartBoxes[cartBoxes.length - 1];
      var sizeElement = cartBox.getElementsByClassName("cart-size")[0];
      sizeElement.innerText = item.size;

      var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
      quantityElement.value = item.quantity;
    }
  }
  var cartTotal = localStorage.getItem("cartTotal");
  if (cartTotal) {
    document.getElementsByClassName("total-price")[0].innerText = "R.s  " + cartTotal;
  }
  updateCartIcon();
}

//Quantity in cart Icon

function updateCartIcon() {
  var cartBoxes = document.getElementsByClassName("cart-box");
  var quantity = 0;

  for (var i=0; i < cartBoxes.length; i++){
      var cartBox = cartBoxes[i];
      var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
      quantity+= parseInt(quantityElement.value);
  }
  var cartIcon = document.querySelector("#cart-icon");
  cartIcon.setAttribute("data-quantity", quantity);
}

// scroll down process
const shopButton = document.querySelector('a[href="#section3"]');
const section3 = document.querySelector('#section3');

shopButton.addEventListener('click', (e) => {
  e.preventDefault();
  section3.scrollIntoView({ behavior: 'smooth' });
});

// search box

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const allProductBoxes = document.querySelectorAll('.product-box');
const noProductsFoundMessage = document.getElementById('no-products-found-message');
const productGridContainer = document.getElementById('product-grid-container');
const searchResultsCount = document.getElementById('search-results-count');
const categoryButtons = document.querySelectorAll('.links-s3, .dropdown, .heading-s3');

searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    searchButton.click();
  }
});

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  let hasMatchingProduct = false;
  let matchingProductsCount = 0;
  allProductBoxes.forEach((productBox) => {
    const productName = productBox.querySelector('.product-title').textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      productBox.style.display = 'block';
      hasMatchingProduct = true;
      matchingProductsCount++;
    } else {
      productBox.style.display = 'none';
    }
  });
  if (!hasMatchingProduct) {
    noProductsFoundMessage.style.display = 'block';
    searchResultsCount.style.display = 'none';
    document.getElementById('section3').style.display = 'none'; // hide the original section title
  } else {
    noProductsFoundMessage.style.display = 'none';
    searchResultsCount.style.display = 'block';
    document.getElementById('section-info').style.display = 'none'; // hide the original section title
    document.getElementById('section4').style.display = 'none';
    document.getElementById('fashion-det').style.display = 'none';
    document.getElementById('section1').style.display = 'none';
    document.getElementById('search-results-count').innerHTML = `Showing ${matchingProductsCount} results for "${searchTerm}"`;
  }
  
  // Remove section gaps and display products in grid form
  const productGrid = document.getElementById('product-grid');
  productGrid.innerHTML = ''; // Clear the grid container
  allProductBoxes.forEach((productBox) => {
    if (productBox.style.display === 'block') {
      productGrid.appendChild(productBox);
    }
  });
  productGridContainer.style.display = 'block';
  
  // Remove category buttons
  categoryButtons.forEach((button) => {
    button.style.display = 'none';
  });
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

ScrollReveal({
  reset: true,
  distance : "60px",
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.left', { delay: 300, origin: "left", interval: 1000  });
ScrollReveal().reveal('.bottom', { delay: 300, origin: "bottom" });
ScrollReveal().reveal('.right', { delay: 300, origin: "right" });
ScrollReveal().reveal('.top', { delay: 300, origin: "top"});