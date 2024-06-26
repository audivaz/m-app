document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.querySelector('.search-bar');
    const genreFilter = document.querySelector('.filters select:nth-child(1)');
    const popularityFilter = document.querySelector('.filters select:nth-child(2)');
    const releaseDateFilter = document.querySelector('.filters select:nth-child(3)');
    const paginationButtons = document.querySelectorAll('.pagination button');
    const featuredArtistsContainer = document.querySelector('.section .items:nth-child(2)');
    const recommendedMusicContainer = document.querySelector('.section .items:nth-child(4)');

    // Example data for demonstration. Replace with actual data fetching logic.
    const allItems = [
        { title: 'Artist 1', type: 'artist', genre: 'Pop', popularity: 'Most Popular', releaseDate: 'Last Week', image: 'assets/images/artist1.jpg' },
        { title: 'Artist 2', type: 'artist', genre: 'Rock', popularity: 'Trending', releaseDate: 'Last Month', image: 'assets/images/artist2.jpg' },
        { title: 'Album 1', type: 'album', genre: 'Hip-Hop', popularity: 'New Releases', releaseDate: 'Last Year', image: 'assets/images/album1.jpg' },
        { title: 'Album 2', type: 'album', genre: 'Pop', popularity: 'Most Popular', releaseDate: 'Last Month', image: 'assets/images/album2.jpg' }
        // Add more items as needed.
    ];

    let currentPage = 1;
    const itemsPerPage = 2;

    function displayItems(items, page = 1) {
        featuredArtistsContainer.innerHTML = '';
        recommendedMusicContainer.innerHTML = '';
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = items.slice(start, end);

        paginatedItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <button>${item.type === 'artist' ? 'View Profile' : 'Play'}</button>
            `;
            const container = item.type === 'artist' ? featuredArtistsContainer : recommendedMusicContainer;
            container.appendChild(itemElement);
        });

        updatePagination(items.length);
    }

    function updatePagination(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        paginationButtons.forEach((button, index) => {
            if (index === 0) {
                button.disabled = currentPage === 1;
            } else if (index === paginationButtons.length - 1) {
                button.disabled = currentPage === totalPages;
            } else {
                const pageNumber = index;
                button.textContent = pageNumber;
                button.disabled = pageNumber === currentPage;
            }
        });
    }

    function filterItems() {
        const query = searchBar.value.toLowerCase();
        const genre = genreFilter.value;
        const popularity = popularityFilter.value;
        const releaseDate = releaseDateFilter.value;

        const filteredItems = allItems.filter(item => {
            const matchesQuery = item.title.toLowerCase().includes(query);
            const matchesGenre = genre ? item.genre === genre : true;
            const matchesPopularity = popularity ? item.popularity === popularity : true;
            const matchesReleaseDate = releaseDate ? item.releaseDate === releaseDate : true;

            return matchesQuery && matchesGenre && matchesPopularity && matchesReleaseDate;
        });

        displayItems(filteredItems, currentPage);
    }

    searchBar.addEventListener('input', () => {
        currentPage = 1;
        filterItems();
    });

    genreFilter.addEventListener('change', () => {
        currentPage = 1;
        filterItems();
    });

    popularityFilter.addEventListener('change', () => {
        currentPage = 1;
        filterItems();
    });

    releaseDateFilter.addEventListener('change', () => {
        currentPage = 1;
        filterItems();
    });

    paginationButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (index === 0 && currentPage > 1) {
                currentPage--;
            } else if (index === paginationButtons.length - 1 && currentPage < Math.ceil(allItems.length / itemsPerPage)) {
                currentPage++;
            } else {
                currentPage = index;
            }
            filterItems();
        });
    });

    // Initial display
    filterItems();
});
