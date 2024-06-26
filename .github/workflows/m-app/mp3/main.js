document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');

    function showLoader() {
        loader.style.display = 'block';
    }

    function hideLoader() {
        loader.style.display = 'none';
    }

    function loadTrendingMusic() {
        showLoader();
        const trendingSection = document.querySelector('.trending .items');
        const trendingMusic = [
            { title: 'Album 1', image: 'imgs/note-B.webp' },
            { title: 'Album 2', image: 'imgs/note-B.webp' }
        ];

        trendingMusic.forEach(music => {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
                <img class="music-note" src="${music.image}" alt="${music.title}" loading="lazy">
                <h3>${music.title}</h3>
                <button>Play</button>
            `;
            trendingSection.appendChild(item);
        });
        hideLoader();
    }

    function loadFeaturedArtists() {
        showLoader();
        const featuredSection = document.querySelector('.featured-artists .items');
        const featuredArtists = [
            { name: 'Artist 1', image: 'imgs/mic-A.webp' },
            { name: 'Artist 2', image: 'imgs/mic-A.webp' }
        ];

        featuredArtists.forEach(artist => {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
                <img class="artist-mic" src="${artist.image}" alt="${artist.name}" loading="lazy">
                <h3>${artist.name}</h3>
                <button>View Profile</button>
            `;
            featuredSection.appendChild(item);
        });
        hideLoader();
    }

    function loadNewReleases() {
        showLoader();
        const newReleasesSection = document.querySelector('.new-releases .items');
        const newReleases = [
            { title: 'Album 3', image: 'imgs/artist.webp' },
            { title: 'Album 4', image: 'imgs/artist.webp' }
        ];

        newReleases.forEach(album => {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
                <img class="artist-photo" src="${album.image}" alt="${album.title}" loading="lazy">
                <h3>${album.title}</h3>
                <button>Play</button>
            `;
            newReleasesSection.appendChild(item);
        });
        hideLoader();
    }

    // Call the functions to load content
    loadTrendingMusic();
    loadFeaturedArtists();
    loadNewReleases();
});
