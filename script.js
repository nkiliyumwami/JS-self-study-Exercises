// DOM EVENTS LISTENER

var h1 = document.querySelector("h1");
var button = document.querySelector("button");
button.addEventListener("click", function() {
  h1.style.background = "red";
  h1.style.border = "10px solid green";
});

var headings = document.querySelectorAll("h3");
var dogCow = headings[0];
var catGoat = headings[1];

var images = document.querySelectorAll("img");

var dog = images[0];

var cat = images[1];

var butt = document.querySelector(".btn.btn-danger");
butt.addEventListener("click", function() {
  dog.srcset =
    "http://res.freestockphotos.biz/pictures/10/10201-cows-in-a-field-pv.jpg";
  headings[0].textContent = "Cows";
});

var butto = document.querySelector(".btn.btn-primary");
butto.addEventListener("click", function() {
  cat.srcset =
    "https://upload.wikimedia.org/wikipedia/commons/f/ff/Domestic_goat_kid_in_capeweed.jpg";
  headings[1].textContent = "A goat";
});
