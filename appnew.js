const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

document.getElementById('openButton').addEventListener('click', function() {
    window.open('project3.html', '_blank');
});

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: true,
    centerMode: true,
    arrows: false,
    responsive: {
       
        480: {
            dots: false, // dots enabled 1280px and up
            
        },
    },
});



navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible")
        ? navToggle.setAttribute("aria-expanded", true)
        : navToggle.setAttribute("aria-expanded", false);
        
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");

} );


/*? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);*/


        
       