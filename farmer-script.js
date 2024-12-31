document.addEventListener("DOMContentLoaded", function() {
    const farmerLoginForm = document.getElementById("farmer-login-form");
    const farmerFormContainer = document.getElementById("farmer-form-container");

    farmerLoginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        farmerLoginForm.style.display = "none";
        farmerFormContainer.classList.remove("hidden");
    });

    const farmerForm = document.getElementById("farmer-form");
    farmerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const item = document.getElementById("item").value;
        const amount = document.getElementById("amount").value;

        // Create a product object
        const product = { name, phone, address, item, amount };

        // Get existing products from localStorage, or create a new array
        const products = JSON.parse(localStorage.getItem("farmerProducts")) || [];

        // Add the new product
        products.push(product);

        // Save the updated products array to localStorage
        localStorage.setItem("farmerProducts", JSON.stringify(products));

        alert("Product added successfully!");

        // Reload the page after successful submission
        location.reload();
    });
});
