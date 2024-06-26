document.addEventListener('DOMContentLoaded', () => {
    const editPlaylistButton = document.getElementById('edit-playlist');
    const deletePlaylistButton = document.getElementById('delete-playlist');
    const createPlaylistButton = document.getElementById('create-playlist');
    const editPlaylistModal = document.getElementById('editPlaylistModal');
    const createPlaylistModal = document.getElementById('createPlaylistModal');
    const closeButtons = document.querySelectorAll('.close');

    // Open Edit Playlist Modal
    editPlaylistButton.addEventListener('click', () => {
        editPlaylistModal.style.display = 'block';
    });

    // Open Create Playlist Modal
    createPlaylistButton.addEventListener('click', () => {
        createPlaylistModal.style.display = 'block';
    });

    // Close Modals
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            editPlaylistModal.style.display = 'none';
            createPlaylistModal.style.display = 'none';
        });
    });

    // Save Edited Playlist
    document.getElementById('editPlaylistForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const playlistName = document.getElementById('editPlaylistName').value;
        document.getElementById('playlist-name').innerText = playlistName;
        editPlaylistModal.style.display = 'none';
        alert('Playlist name updated!');
    });

    // Create New Playlist
    document.getElementById('createPlaylistForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const newPlaylistName = document.getElementById('createPlaylistName').value;
        alert(`New playlist "${newPlaylistName}" created!`);
        createPlaylistModal.style.display = 'none';
    });

    // Delete Playlist
    deletePlaylistButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this playlist?')) {
            alert('Playlist deleted!');
            // Redirect or update UI accordingly
        }
    });

    // Remove Song from Playlist
    document.querySelectorAll('.remove-song').forEach(button => {
        button.addEventListener('click', () => {
            if (confirm('Are you sure you want to remove this song from the playlist?')) {
                button.parentElement.remove();
                alert('Song removed from playlist!');
            }
        });
    });

    // Close modal if user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target == editPlaylistModal) {
            editPlaylistModal.style.display = 'none';
        }
        if (event.target == createPlaylistModal) {
            createPlaylistModal.style.display = 'none';
        }
    });
});
