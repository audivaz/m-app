document.addEventListener('DOMContentLoaded', () => {
    const upgradeSubscriptionButton = document.getElementById('upgrade-subscription');
    const cancelSubscriptionButton = document.getElementById('cancel-subscription');
    const manageSubscriptionModal = document.getElementById('manageSubscriptionModal');
    const closeButtons = document.querySelectorAll('.close');
    const confirmCancelButton = document.getElementById('confirm-cancel');
    const upgradePlanButton = document.getElementById('upgrade-plan');

    // Open Manage Subscription Modal
    upgradeSubscriptionButton.addEventListener('click', () => {
        manageSubscriptionModal.style.display = 'block';
    });

    cancelSubscriptionButton.addEventListener('click', () => {
        manageSubscriptionModal.style.display = 'block';
    });

    // Close Modals
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            manageSubscriptionModal.style.display = 'none';
        });
    });

    // Confirm Upgrade
    upgradePlanButton.addEventListener('click', () => {
        alert('Subscription upgraded!');
        manageSubscriptionModal.style.display = 'none';
    });

    // Confirm Cancellation
    confirmCancelButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to cancel your subscription?')) {
            alert('Subscription canceled!');
            manageSubscriptionModal.style.display = 'none';
            // Redirect or update UI accordingly
        }
    });

    // Close modal if user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target == manageSubscriptionModal) {
            manageSubscriptionModal.style.display = 'none';
        }
    });
});
