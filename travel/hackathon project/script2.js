let slideIndex = 0;
  const cards = document.querySelectorAll('.card-container');
  const totalCards = cards.length;

  function showSlides() {
    slideIndex++;
    if (slideIndex >= totalCards) {
      slideIndex = 0;
    }
    const offset = -slideIndex * cards[0].offsetWidth * 0.6667;
    document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
  }

  showSlides();


 