document.addEventListener('DOMContentLoaded', () => {
    const accountSettingsForm = document.getElementById('accountSettingsForm');
    const preferencesForm = document.getElementById('preferencesForm');

    accountSettingsForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Fetch form data
        const username = accountSettingsForm.username.value;
        const email = accountSettingsForm.email.value;
        const password = accountSettingsForm.password.value;

        // Save changes logic here (e.g., send data to server)
        console.log('Account Settings Saved:', { username, email, password });

        alert('Account settings saved!');
    });

    preferencesForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Fetch form data
        const theme = preferencesForm.theme.value;
        const notifications = preferencesForm.notifications.checked;

        // Save preferences logic here (e.g., send data to server)
        console.log('Preferences Saved:', { theme, notifications });

        alert('Preferences saved!');
    });
});
