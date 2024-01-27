const accordion = document.querySelectorAll(".item");
const nav = document.querySelector(".header");
const burgerMenu = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");
const slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let slideIndex = 0;
let intervalId = 0;

//nav bar logic
burgerMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("display-nav");
});

window.addEventListener("scroll", () => {
  if (window.scrollY !== 0) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

//accordion function
accordion.forEach((acco) => {
  acco.onclick = () => {
    let isActive = acco.classList.contains("active");
    accordion.forEach((sub) => {
      sub.classList.remove("active");
    });
    if (!isActive) {
      acco.classList.add("active");
    }
  };
});

//fade in carousel function

initializeSlider();

function initializeSlider() {
  console.log(slides.values);
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[slideIndex].classList.add("active");
}

function prevSlide() {
  slideIndex--;

  showSlide(slideIndex);
}
function nextSlide() {
  slideIndex++;

  showSlide(slideIndex);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;
    showSlide(slideIndex);
  });
});
