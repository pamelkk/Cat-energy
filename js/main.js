const buttonOpen = document.querySelector(".page-header__menu");
const menu = document.querySelector(".main-nav");
const buttonBefore = document.querySelector(".sample__button-before");
const buttonAfter = document.querySelector(".sample__button-after");
const photoBefore = document.querySelector(".sample__photo--before");
const photoAfter = document.querySelector(".sample__photo--after");
const form = document.querySelector(".selection__form");
const name = document.querySelector(".fs-name__field");
const contacts = document.querySelector(".fs-contacts__field");
const inputElements = document.querySelectorAll("input");
const isStorageSupport = true;
const storage = "";
const slider = document.querySelector("#myRange");

menu.classList.add("main-nav-inactive");
buttonOpen.classList.add("closed-menu");

buttonOpen.addEventListener("click", function () {
  if (!menu.classList.contains("main-nav-inactive")) {
    menu.classList.add("main-nav-inactive");
    buttonOpen.classList.add("closed-menu");
  } else {
    menu.classList.remove("main-nav-inactive");
    buttonOpen.classList.remove("closed-menu");
  }
});

[].forEach.call(inputElements, function (item) {
  item.addEventListener('focus', function(){
    item.classList.toggle('fs-active', true);
  });
});

if(buttonBefore) {
  buttonBefore.addEventListener("click", function () {
    if (!photoBefore.classList.contains("photo-active")) {
      photoBefore.classList.add("photo-active");
      photoAfter.classList.remove("photo-active");
    }
  });
}

if(buttonAfter) {
  buttonAfter.addEventListener("click", function () {
    if (!photoAfter.classList.contains("photo-active")) {
      photoAfter.classList.add("photo-active");
      photoBefore.classList.remove("photo-active");
    }
  });
}

if(slider) {
  slider.oninput = function() {
    if(slider.value > 50) {
      photoAfter.classList.add("photo-active");
      photoBefore.classList.remove("photo-active");
    } else {
      photoBefore.classList.add("photo-active");
      photoAfter.classList.remove("photo-active");
    }
  }
}
