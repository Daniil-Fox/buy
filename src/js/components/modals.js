const modalLogin = document.querySelector(".modal-login");

const modalSignin = document.querySelector(".modal-signin");

const modalPayment = document.querySelector(".modal-payment");

const modalAccept = document.querySelector(".accept");

const modalConfirm = document.querySelector(".confirm");
const modalOffer = document.querySelector(".offer-send");

const loginBtn = document.querySelector(".login-btn");
const signInBtn = document.querySelector(".signin-btn");

const paymentBtn = document.querySelector(".payment-btn");

const acceptBtn = document.querySelectorAll('.accept-btn')
const confirmBtn = document.querySelectorAll('.confirm-btn')
const offerBtn = document.querySelectorAll('.offer-btn')

const modals = document.querySelectorAll(".modal");

loginBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  modalLogin.classList.add("active");
});

if(acceptBtn.length > 0){
  acceptBtn.forEach(b => {
    b.addEventListener("click", (e) => {
      e.preventDefault();
      modalAccept.classList.add("active");
    });
  })
}

if(confirmBtn.length > 0){
  confirmBtn.forEach(b => {
    b.addEventListener("click", (e) => {
      e.preventDefault();
      modalConfirm.classList.add("active");
    });
  })
}

if(offerBtn.length > 0){
  offerBtn.forEach(b => {
    b.addEventListener("click", (e) => {
      e.preventDefault();
      modalOffer.classList.add("active");
    });
  })
}

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
  const modalClose = el.querySelector('.modal__close')
  el.addEventListener("click", (e) => {
    el.classList.remove("active");
  });
  modalClose?.addEventListener("click", (e) => {
    el.classList.remove("active");
  });

  body.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
