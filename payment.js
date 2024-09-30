let cart = JSON.parse(localStorage.getItem("cart-items"));
let totalPrice = 0; // Initialize totalPrice to 0

console.log("Cart items:", cart);

// Calculate totalPrice by iterating over cart items
cart.forEach((item) => {
    console.log("Item:", item);
    let price = parseFloat(item.price.match(/\d+(\.\d+)?/)[0]); // Extract numeric value from price string
    let quantity = parseInt(item.quantity.replace(/[^0-9]+/g, '')); // Convert quantity to a number
    if (isNaN(price) || isNaN(quantity)) {
        console.error("Error parsing price or quantity:", item);
        return;
    }
    console.log("Price:", price, "Quantity:", quantity);
    totalPrice += price * quantity; // Add item price to totalPrice
    console.log("Total price:", totalPrice);
});

console.log("Final total price:", totalPrice);

// Display cart items
cart.forEach((item, index) => {
    const productHTML = `
        <div>
            <div class="img-title">
            <img src="${item.productImg}" alt="" width="110">
            <div class="all-items">
            <p class="items-title">${item.title}</p>
            <div class="item-part">
            <div class="size-div">
            <pre>Size: </pre>
            <p> ${item.size}</p>
            </div>
            <p>Quantity: ${item.quantity}</p>
            <p>Price:${item.price}</p>
            </div>
            <button class="del-btn" data-index="${index}">Delete</button>
            </div>
            </div>
        </div>
    `;
    document.querySelector(".payment-products").innerHTML += productHTML;
});

document.getElementById("total-price").innerText = `R.s ${totalPrice.toFixed(2)}`;

document.querySelectorAll(".del-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        let index = btn.getAttribute("data-index");
        let item = cart[index];
        cart.splice(index, 1);
        localStorage.setItem("cart-items", JSON.stringify(cart));
        let price = parseFloat(item.price.match(/\d+(\.\d+)?/)[0]); // Extract numeric value from price string
        let quantity = parseInt(item.quantity.replace(/[^0-9]+/g, '')); // Convert quantity to a number
        if (isNaN(price) || isNaN(quantity)) {
            console.error("Error parsing price or quantity:", item);
            return;
        }
        totalPrice -= price * quantity; // Subtract item price from totalPrice
        document.getElementById("total-price").innerText = `R.s ${totalPrice.toFixed(2)}`;
        window.location.reload();
    });
});


let payBtn = document.querySelector('.pay-btn');

payBtn.addEventListener("click", () => {
    window.location.href = "paypage.html";
});

localStorage.setItem("totalPrice", totalPrice);

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