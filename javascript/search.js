// search.js

document.addEventListener('DOMContentLoaded', function() {
    // Get the search input element
    const searchInput = document.getElementById('product-search');
    
    // Get all products
    const products = document.querySelectorAll('.product');

    // Get all category checkboxes
    const categoryCheckboxes = document.querySelectorAll('.category-checkbox');

    // Add event listener for the input field
    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase(); // Get the search input value and convert to lowercase

        // Loop through all products and hide or show based on match
        products.forEach(function(product) {
            const productName = product.getAttribute('data-name').toLowerCase(); // Get the product name from data attribute and convert to lowercase

            if (productName.includes(filter)) {
                product.style.display = 'block'; // Show matching product
            } else {
                product.style.display = 'none'; // Hide non-matching product
            }
        });
    });

    // Add event listeners for category checkboxes
    categoryCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            filterProducts();
        });
    });

    function filterProducts() {
        const selectedCategories = Array.from(categoryCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.getAttribute('data-category'));

        products.forEach(function(product) {
            const productCategory = product.getAttribute('data-category');

            if (selectedCategories.length === 0 || selectedCategories.includes(productCategory)) {
                product.style.display = 'block'; // Show products that match the selected categories
            } else {
                product.style.display = 'none'; // Hide products that don't match
            }
        });
    }
});
