const modalLogin = document.querySelector(".modal-login");

const modalSignin = document.querySelector(".modal-signin");

const modalPayment = document.querySelector(".modal-payment");

const loginBtn = document.querySelector(".login-btn");
const signInBtn = document.querySelector(".signin-btn");

const paymentBtn = document.querySelector(".payment-btn");

const modals = document.querySelectorAll(".modal");

loginBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  modalLogin.classList.add("active");
});

paymentBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  modalPayment.classList.add("active");
});

signInBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  modalSignin.classList.add("active");

  const signInBtn2 = document.querySelector(".signin2-btn");
  const modalSignin2 = document.querySelector(".modal-signin2");

  signInBtn2.addEventListener("click", (e) => {
    modalSignin.classList.remove("active");
    modalSignin2.classList.add("active");
  });
});

modals.forEach((el) => {
  const body = el.querySelector(".modal__body");
  el.addEventListener("click", (e) => {
    el.classList.remove("active");
  });

  body.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
