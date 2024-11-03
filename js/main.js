window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const fixedPosition = header.offsetTop;

  window.addEventListener("scroll", () => {
    console.log(fixedPosition, window.scrollY);
    if (window.scrollY > 1) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
});
