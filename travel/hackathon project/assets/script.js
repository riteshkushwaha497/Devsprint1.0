// Function to adjust the width of review cards based on window size
function adjustCardWidth() {
    var screenWidth = window.innerWidth;
    var cardWidth;

    // Adjust card width based on screen size
    if (screenWidth >= 768) {
        cardWidth = 'calc(100% - 40px)';
    } else if (screenWidth >= 576) {
        cardWidth = 'calc(100% - 30px)';
    } else {
        cardWidth = 'calc(100% - 20px)';
    }

    // Apply the calculated width to each review card
    var reviewCards = document.querySelectorAll('.review_card');
    reviewCards.forEach(function(card) {
        card.style.width = cardWidth;
    });
}

// Call the adjustCardWidth function when the page loads and when the window is resized
window.onload = adjustCardWidth;
window.addEventListener('resize', adjustCardWidth);
