(function () {
  "use strict";

  document
    .querySelector("#navbarSideCollapse")
    .addEventListener("click", function () {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
})();

$(document).ready(function () {
  if ($(window).width() < 575) {
    $(".blockResize").removeClass("text-end");
  }
});

$(window).resize(function () {
  if (window.innerWidth < 575) {
    $(".blockResize").removeClass("text-edit");
  } else {
    $(".blockResize").addClass("text-end");
  }
});

$(window).resize(function () {
  if (window.innerWidth > 575) {
    $(".blockResize").addClass("text-edit");
  } else {
    $(".blockResize").removeClass("text-end");
  }
});

$(document).ready(function () {
  if ($(window).width() < 767) {
    $(".blockResizeKeys").removeClass("text-end");
  }
});

$(window).resize(function () {
  if (window.innerWidth < 767) {
    $(".blockResizeKeys").removeClass("text-edit");
  } else {
    $(".blockResizeKeys").addClass("text-end");
  }
});

$(window).resize(function () {
  if (window.innerWidth > 767) {
    $(".blockResizeKeys").addClass("text-edit");
  } else {
    $(".blockResizeKeys").removeClass("text-end");
  }
});
