// Hamburger js

function hamMenu(x) {
  x.classList.toggle("change");
}

// dropdown jq

$(document).ready(function() {
  $(".hamIcon").click(function() {
    $(".mobile-dropdown").toggleClass("active");
  });
});
