  const gallery = document.querySelector(".gallery");
  const cards = document.querySelectorAll(".gallery-card");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  const cardWidth = 340;
  let currentIndex = 0;
  const maxIndex = cards.length - 3;

  function updateGallery() {
    const offset = -currentIndex * cardWidth;
    gallery.style.transform = `translateX(${offset}px)`;
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateGallery();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateGallery();
    }
  });

