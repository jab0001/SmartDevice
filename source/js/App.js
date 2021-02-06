"use strict";

const footer = document.querySelector(".page-footer");
const bannerBtn = document.querySelector(".banner__btn");
const bannerScroll = document.querySelector(".banner__scroll");
const websiteBtn = footer.querySelector(".website__btn");
const websiteMenu = footer.querySelector(".website__list");
const officeBtn = footer.querySelector(".office__btn");
const officeMenu = footer.querySelector(".office__list");
const contactBtn = document.querySelector(".question-form button");
const userName = document.querySelector("#name");
const userPhone = document.querySelector("#phone");
const userPhoneModal = document.querySelector("#user-phone-modal");
const userText = document.querySelector("#message");
const openModalBtn = document.querySelector(".main-nav__btn");
const popup = document.querySelector(".modal");
const popupFog = document.querySelector(".fog");
const closeModalBtn = document.querySelector(".modal__btn-close");

document.addEventListener("DOMContentLoaded", function (evt) {
  evt.preventDefault();
  websiteMenu.classList.remove("website__list--no-js");
  officeMenu.classList.remove("office__list--no-js");
  websiteMenu.classList.add("website--closed");
  officeMenu.classList.add("office--closed");
});

websiteBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  websiteMenu.classList.toggle("website--opened");
  websiteBtn.classList.toggle("website__btn--remove");
});

officeBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  officeMenu.classList.toggle("office--opened");
  officeBtn.classList.toggle("office__btn--remove");
});

bannerBtn.addEventListener("click", function () {
  window.scrollBy({
    top: contacts.offsetTop - window.scrollY,
    behavior: "smooth",
  });
});

bannerScroll.addEventListener("click", function () {
  window.scrollBy({
    top: advantages.offsetTop - window.scrollY,
    behavior: "smooth",
  });
});

IMask(userPhone, { mask: "+{7}(000)000-00-00" });
IMask(userPhoneModal, { mask: "+{7}(000)000-00-00" });

contactBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  localStorage.setItem("user-name", userName.value);
  localStorage.setItem("user-phone", userPhone.value);
  localStorage.setItem("user-text", userText.value);
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal--active")) {
      popup.classList.remove("modal--active");
      popupFog.classList.remove("fog--active");
    }
  }
});

popupFog.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal--active")) {
    popup.classList.remove("modal--active");
    popupFog.classList.remove("fog--active");
  }
});

closeModalBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal--active")) {
    popup.classList.remove("modal--active");
    popupFog.classList.remove("fog--active");
  }
});

openModalBtn.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal--active");
  popupFog.classList.add("fog--active");
});
