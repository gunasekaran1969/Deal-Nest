```javascript
/* ================================
   DEALNEST - JAVASCRIPT
   ================================ */


/* ================================
   PRODUCT SEARCH
   ================================ */

function searchProducts() {

    const searchInput = document.getElementById("searchInput");

    const searchText = searchInput.value.trim().toLowerCase();

    if (searchText === "") {
        alert("Please enter a product or deal to search.");
        return;
    }

    const products = document.querySelectorAll(".product-card");

    let found = false;

    products.forEach(function(product) {

        const productText = product.innerText.toLowerCase();

        if (productText.includes(searchText)) {

            product.style.display = "block";

            if (!found) {
                product.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

            found = true;

        } else {

            product.style.display = "none";

        }

    });


    if (!found) {

        alert(
            "No matching product found.\n\n" +
            "Try searching for Smartphone, Earbuds, Smart Watch or Backpack."
        );

        // Show all products again
        products.forEach(function(product) {
            product.style.display = "block";
        });

    }

}


/* ================================
   SEARCH USING ENTER KEY
   ================================ */

document.addEventListener("DOMContentLoaded", function() {

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("keypress", function(event) {

            if (event.key === "Enter") {

                searchProducts();

            }

        });

    }

});


/* ================================
   VIEW DEAL BUTTON
   ================================ */

function viewDeal(productName) {

    alert(
        "DealNest\n\n" +
        productName +
        "\n\nThe affiliate product link will be added here in the next step."
    );

}


/* ================================
   CATEGORY MESSAGE
   ================================ */

document.addEventListener("DOMContentLoaded", function() {

    const categoryCards =
        document.querySelectorAll(".category-card");

    categoryCards.forEach(function(card) {

        card.addEventListener("click", function() {

            const categoryName =
                card.querySelector("h3").innerText;

            alert(
                categoryName +
                " products will be added to DealNest soon!"
            );

        });

    });

});
```
