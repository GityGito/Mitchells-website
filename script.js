document.addEventListener('DOMContentLoaded', function() {
    const popupPanel = document.getElementById('popupPanel');
    const closeBtn = document.querySelector('.close-btn');

    // Show the popup panel when the webpage is clicked
    document.body.addEventListener('click', function() {
        popupPanel.style.display = 'flex';
    });

    // Hide the popup panel when the close button is clicked
    closeBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the event from propagating to the body
        popupPanel.style.display = 'none';
    });

    // Hide the popup panel when clicking outside the popup content
    window.addEventListener('click', function(event) {
        if (event.target === popupPanel) {
            popupPanel.style.display = 'none';
        }
    });
});