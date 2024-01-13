document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle profile details visibility
    function toggleProfileDetails() {
        var profileDetails = document.querySelector('.profile-details');
        profileDetails.style.display = (profileDetails.style.display === 'none' || profileDetails.style.display === '') ? 'block' : 'none';
    }
    
    document.getElementById('searchInput').addEventListener('input', function(event) {
        const inputValue = event.target.value;
        console.log('Search query:', inputValue);
        alert('Search query: ' + inputValue);
    });
        
    // Event listener to toggle profile details on profile icon hover
    var profileIcon = document.querySelector('.profile-icon-container');
    profileIcon.addEventListener('mouseenter', toggleProfileDetails);
    profileIcon.addEventListener('mouseleave', toggleProfileDetails);
});

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

var coll = document.getElementsByClassName("collapsible");
var i;

for(i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.style.display === "block"){
            content.style.display = "none";
        }
        else{
            content.style.display = "block";
        }
    });
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}