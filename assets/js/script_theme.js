const btntheme = document.querySelector(".theme_darklight");
console.log(btntheme);
const html = document.documentElement;
btntheme.onclick = (e) => {
  const classHtml = Array.from(html.classList);
  if (classHtml.includes("dark")) {
    html.classList.remove("dark");
  } else {
    html.classList.add("dark");
  }
};
