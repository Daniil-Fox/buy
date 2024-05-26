const settingsTabs = document.querySelectorAll(".settings-main__item");
const settingsContent = document.querySelectorAll(".settings-main__content");

settingsTabs.forEach((item) => {
  item.addEventListener("click", (e) => {
    const dataset = item.dataset.settings;
    settingsTabs.forEach((el) => el.classList.remove("active"));
    settingsContent.forEach((el) => el.classList.remove("active"));
    document
      .querySelector(
        `.settings-main__content[data-settings-content="${dataset}"]`
      )
      .classList.add("active");
    item.classList.add("active");
  });
});
