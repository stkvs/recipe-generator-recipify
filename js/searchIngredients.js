document.addEventListener('DOMContentLoaded', () => {
    const searchInputs = document.querySelectorAll('.search-input');

    searchInputs.forEach(searchInput => {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const categoryId = searchInput.id.split('-')[0]; // Get the category id from the search input id
            const container = document.getElementById(`${categoryId}-category`); // Use the category id to find the container
            const items = container.querySelectorAll('.item');

            items.forEach(item => {
                const itemName = item.querySelector('p').textContent.toLowerCase();

                if (itemName.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else if (searchTerm === '') {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    console.log("Ingredients Loaded")
});