let column_link = document.querySelectorAll(".link-parent");
column_link = Array.from(column_link);
column_link.forEach((item) => {
  const subdrop = item.nextElementSibling;
  const classsubdrop = subdrop.classList;

  item.onclick = () => {
    if (classsubdrop.contains("menu-column__item--active")) {
      subdrop.classList.remove("menu-column__item--active");
    } else {
      subdrop.classList.add("menu-column__item--active");
    }
  };
});

let navbar_link = document.querySelectorAll(".navbar__link");
navbar_link = Array.from(navbar_link);
navbar_link.forEach((item) => {
  const dropdown = item.nextElementSibling;
  const classdropdown = dropdown.classList;
  item.onclick = () => {
    console.log(dropdown);
    if (classdropdown.contains("show")) {
      dropdown.classList.remove("show");
    } else {
      dropdown.classList.add("show");
    }
  };
});
