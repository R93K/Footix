// CLIC HEADER //

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/footix.png') {
      myImage.setAttribute('src', 'images/footix2.png');
    } else {
      myImage.setAttribute('src', 'images/footix.png');
    }
});



// DECOMPTE EURO //

  // DATE CIBLE
var countDownDate = new Date("Jun 12, 2020 21:00:").getTime();

  // MAJ DU DECOMPTE CHAQUE SECONDE
var x = setInterval(function() {

  // DATE HEURE ACTUELLE
  var now = new Date().getTime();

  // TROUVER LA DUREE ENTRE MAINTENANT ET LA DATE CIBLE
  var distance = countDownDate - now;

  // CALCUL DES JOURS, HEURES, MINUTES ET SECONDES
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // AFFICHER LE RESULTAT DANS L'ELEMENT id="demo"
  document.getElementById("euro").innerHTML = days + " jours " + hours + " h "
  + minutes + " min " + seconds + " sec ";
}, 1000);




// DIAPORAMA //

var slideIndex = 1;
showSlides(slideIndex);

// SUIVANT/PRECEDENT
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// MINIATURES
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}