function filterMenu(category) {
    let items = document.querySelectorAll(".menu-card");

    items.forEach(item => {
        if (category === "all") {
            item.style.display = "block";
        } else {
            if (item.classList.contains(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        }
    });
}
function openLightbox(img) {
    let lightbox = document.getElementById("lightbox");
    lightbox.style.display = "flex";
    lightbox.classList.add("show");
    document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
    let lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
    lightbox.classList.remove("show");
}
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    // Clear previous errors
    document.getElementById("name-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("message-error").innerText = "";
    document.getElementById("success-msg").innerText = "";

    // Name validation
    if (name === "") {
        document.getElementById("name-error").innerText = "Name is required";
        valid = false;
    }

    // Email validation
    if (email === "") {
        document.getElementById("email-error").innerText = "Email is required";
        valid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("email-error").innerText = "Invalid email format";
        valid = false;
    }

    // Message validation
    if (message === "") {
        document.getElementById("message-error").innerText = "Message cannot be empty";
        valid = false;
    }

    // Success
    if (valid) {
        document.getElementById("success-msg").innerText = "Message sent successfully!";
    }

    return false; // prevent actual form submission
}
let toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change icon
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.innerText = "☀️";
    } else {
        toggleBtn.innerText = "🌙";
    }
});
let cart = [];

function addToCart(itemName) {
    cart.push(itemName);

    document.getElementById("cart-count").innerText = cart.length;

    updateCartUI();
}

function updateCartUI() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        cartItems.appendChild(li);
    });

    cartTotal.innerText = "Total Items: " + cart.length;
}

function toggleCart() {
    let popup = document.getElementById("cart-popup");

    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}