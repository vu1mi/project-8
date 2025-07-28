// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

const tab_list = $$(".product-tab-item");
const tab_content = $$(".product-tab-content");
const id_tab_content = Array.from(tab_content).map((item) => item.getAttribute("data-id"));
console.log(id_tab_content);

function clearclass() {
  tab_list.forEach((item) => {
    item.classList.toggle("active-item", false);
  });
  tab_content.forEach((item) => {
    item.classList.toggle("active-tab-content", false);
  });
}
tab_list.forEach((item) => {
  item.onclick = () => {
    clearclass();
    item.classList.add("active-item");
    const id = item.dataset.id;

    for (let i = 0; i < tab_content.length; i++) {
      if (tab_content[i].dataset.id === id) {
        tab_content[i].classList.add("active-tab-content");
      }
    }
  };
});
