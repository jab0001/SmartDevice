'use strict';

(function () {
  var body = document.querySelector('body');
  var footer = document.querySelector('.page-footer');
  var bannerBtn = document.querySelector('.banner__btn');
  var bannerScroll = document.querySelector('.banner__scroll');
  var websiteBtn = footer.querySelector('.website__btn');
  var websiteMenu = footer.querySelector('.website__list');
  var officeBtn = footer.querySelector('.office__btn');
  var officeMenu = footer.querySelector('.office__list');
  var contactBtn = document.querySelector('.question-form__btn');
  var userName = document.querySelector('#name');
  var userPhone = document.querySelector('#phone');
  var userPhoneModal = document.querySelector('#user-phone-modal');
  var userText = document.querySelector('#message');
  var openModalBtn = document.querySelector('.main-nav__btn');
  var popup = document.querySelector('.modal');
  var popupFog = document.querySelector('.fog');
  var closeModalBtn = document.querySelector('.modal__btn-close');
  var contacts = document.querySelector('#contacts');
  var advantages = document.querySelector('#advantages');
  var nameInput = document.querySelector('#user-name-modal');

  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };

  var maskNumber = function (phone, mask) {
    return new window.IMask(phone, mask);
  };

  if (userPhone && userPhoneModal) {
    maskNumber(userPhone, maskOptions);
    maskNumber(userPhoneModal, maskOptions);
  }

  document.addEventListener('DOMContentLoaded', function (evt) {
    evt.preventDefault();

    if (websiteMenu) {
      websiteMenu.classList.remove('website__list--no-js');
      websiteMenu.classList.add('website--closed');
    }
    if (officeMenu) {
      officeMenu.classList.remove('office__list--no-js');
      officeMenu.classList.add('office--closed');
    }
  });

  if (websiteBtn && websiteMenu) {
    websiteBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      websiteMenu.classList.toggle('website--opened');
      websiteBtn.classList.toggle('website__btn--remove');
    });
  }

  if (officeBtn && officeMenu) {
    officeBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      officeMenu.classList.toggle('office--opened');
      officeBtn.classList.toggle('office__btn--remove');
    });
  }

  if (bannerBtn) {
    bannerBtn.addEventListener('click', function () {
      window.scrollBy({
        top: contacts.offsetTop - window.scrollY,
        behavior: 'smooth',
      });
    });
  }

  if (bannerScroll) {
    bannerScroll.addEventListener('click', function () {
      window.scrollBy({
        top: advantages.offsetTop - window.scrollY,
        behavior: 'smooth',
      });
    });
  }


  if (contactBtn) {
    contactBtn.addEventListener('click', function (evt) {

      localStorage.setItem('user-name', userName.value);
      localStorage.setItem('user-phone', userPhone.value);
      localStorage.setItem('user-text', userText.value);
    });
  }

  if (popup && popupFog) {
    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains('modal--active')) {
          popup.classList.remove('modal--active');
          popupFog.classList.remove('fog--active');
          body.classList.remove('noscroll');
        }
      }
    });

    popupFog.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (popup.classList.contains('modal--active')) {
        popup.classList.remove('modal--active');
        popupFog.classList.remove('fog--active');
        body.classList.remove('noscroll');
      }
    });

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (popup.classList.contains('modal--active')) {
          popup.classList.remove('modal--active');
          popupFog.classList.remove('fog--active');
          body.classList.remove('noscroll');
        }
      });
    }
    if (openModalBtn && nameInput) {
      openModalBtn.addEventListener('click', function (event) {
        event.preventDefault();
        popup.classList.add('modal--active');
        popupFog.classList.add('fog--active');
        body.classList.add('noscroll');
        nameInput.focus();
      });
    }
  }
})();
