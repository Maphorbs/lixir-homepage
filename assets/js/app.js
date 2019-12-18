const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlinks");
  const navlinks = document.querySelectorAll(".navlinks a");

  //when burger is clicked, it's class should change/toggle to "nav-active" class
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //animate links
    navlinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 +
        0.5}s`;
    });
    //Burger Animation; change/toggle its class to 'toggle' class
    burger.classList.toggle("toggle");
  });
};

navSlide();
