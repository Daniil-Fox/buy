import "./_components.js";

const burgerBtn = document.querySelector(".header-mob__burger");
const menu = document.querySelector(".menu");
const menuBody = menu.querySelector(".menu__body");
burgerBtn.addEventListener("click", (e) => {
  burgerBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
menu.addEventListener("click", (e) => {
  burgerBtn.classList.remove("active");
  menu.classList.remove("active");
});
menuBody.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
});

const select = document.querySelectorAll(".custom-select");
if (select && select.length > 0) {
  select.forEach((s) => {
    const rSelect = s.querySelector("select");
    const btn = s.querySelector(".custom-select__header");

    btn.addEventListener("click", (e) => {
      let isActive = btn.classList.toggle("active");
      const dropdown = s.querySelector(".custom-select__dropdown");
      const items = dropdown.querySelectorAll(".custom-select__item");
      dropdown.style.maxHeight = isActive ? dropdown.scrollHeight + "px" : null;

      items.forEach((item) => {
        item.addEventListener("click", (el) => {
          rSelect.value = el.currentTarget.textContent;

          btn.querySelector("span").textContent = el.currentTarget.textContent;

          dropdown.style.maxHeight = null;
          btn.classList.remove("active");
        });
      });
    });
  });
}

const accInfoBtn = document.querySelector(".acc-info");

accInfoBtn?.addEventListener("click", (e) => {
  const data = document.querySelector(".header-data");
  data.classList.toggle("active");
});


const formInputs = document.querySelectorAll('.form__label')

if(formInputs && formInputs.length > 0){
  formInputs.forEach(input => {
    input.addEventListener('click', e => {
      const plug = input.querySelector('.form__input-wrapper')
      plug?.classList.remove('form-input-error')
    })
  })
}
