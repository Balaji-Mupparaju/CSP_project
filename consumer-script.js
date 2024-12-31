document.addEventListener("DOMContentLoaded", function() {
    const consumerLoginForm = document.getElementById("consumer-login-form");
    const itemsList = document.getElementById("items-list");

    consumerLoginForm.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the default form submission behavior

        // Hide the login form
        consumerLoginForm.style.display = "none";
        // Make the items list visible
        itemsList.classList.remove("hidden");

        // Retrieve stored products from localStorage
        const products = JSON.parse(localStorage.getItem("farmerProducts")) || [];

        // Clear any previous content inside itemsList
        itemsList.innerHTML = "";  

        if (products.length === 0) {
            itemsList.innerHTML = "<p>No products available at the moment.</p>";
            return;
        }

        // Loop through the products and display them in the itemsList div
        products.forEach(product => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");
            itemDiv.innerHTML = `
                <h3>${product.item}</h3>
                <p>Amount: ${product.amount} kgs</p>
                <p>Farmer: ${product.name}</p>
            `;
            
            // Add click event to each item to show farmer's details
            itemDiv.addEventListener("click", () => {
                alert(`Farmer Details:\nName: ${product.name}\nPhone: ${product.phone}\nAddress: ${product.address}`);
            });

            // Append the newly created itemDiv to itemsList
            itemsList.appendChild(itemDiv);
        });
    });
});
