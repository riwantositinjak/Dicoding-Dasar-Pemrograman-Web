const slide = () => {
  const icon = document.querySelector(".icon");
  const navigation = document.querySelector(".navigation");
  const navLinks = document.querySelectorAll(".navigation li");

  //toggle nav
  icon.addEventListener("click", () => {
    navigation.classList.toggle("nav-active");

    // animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navigationLinkAnimate 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });

    // icon animation
    icon.classList.toggle("toggle");
  });
};

slide();
