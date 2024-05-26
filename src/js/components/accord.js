const accordItems = document.querySelectorAll("[data-accord]");

accordItems.forEach((item) => {
  const btn = item.querySelector("[data-accord-btn]");
  const content = item.querySelector("[data-accord-content]");
  if (item.classList.contains("active")) {
    content.style.maxHeight = content.scrollHeight + "px";
  }
  btn.addEventListener("click", (e) => {
    let isActive = item.classList.toggle("active");

    content.style.maxHeight = isActive ? content.scrollHeight + "px" : null;
  });
});
