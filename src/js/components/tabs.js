const tabs = document.querySelectorAll(".services-hero__tabs .tab");
const tabsContent = document.querySelectorAll(".services-hero__content");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((el) => el.classList.remove("active"));
    tabsContent.forEach((el) => el.classList.remove("active"));

    const dataset = tab.dataset.tabCapture;

    const current = document.querySelector(
      `.services-hero__content[data-tab-content="${dataset}"]`
    );
    current.classList.add("active");
    tab.classList.add("active");
  });
});
