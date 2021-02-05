"use strict";

const footer = document.querySelector(".page-footer");
const scrollBtn = document.querySelector(".banner__scroll");
const websiteBtn = footer.querySelector(".website__btn");
const websiteMenu = footer.querySelector(".website__list");
const officeBtn = footer.querySelector(".office__btn");
const officeMenu = footer.querySelector(".office__list");
const contactBtn = document.querySelector(".question-form__btn");
const userName = document.querySelector("#name");
const userPhone = document.querySelector("#phone");
const userText = document.querySelector("#message");

document.addEventListener("DOMContentLoaded", function (evt) {
  evt.preventDefault();
  websiteMenu.classList.remove("website--no-js");
  officeMenu.classList.remove("office--no-js");
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

scrollBtn.addEventListener("click", function () {
  window.scrollBy({
    top: down.offsetTop - window.scrollY,
    behavior: "smooth",
  });
});

IMask(document.querySelector('#phone'), {mask: '+{7}(000)000-00-00'});

contactBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  localStorage.setItem("user-name", userName.value);
  localStorage.setItem("user-phone", userPhone.value);
  localStorage.setItem("user-text", userText.value);
});
