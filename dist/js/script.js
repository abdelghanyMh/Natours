// hide navbar when a link  clicked
const links = document.querySelectorAll('.navigation__link')
const toggleBtn = document.getElementById("navi-toggle")

function hideNavBar(event) {
    toggleBtn.checked = false;
}

// Select element with popup__content class, assign to popup variable
const popup = document.querySelector(".popup__content")

// Select the close btn on the popup X
const closeBTn = document.querySelector(".popup__close")

function hidePopup(event) {

    // If user clicks inside the element, do nothing
    if (event.target.closest(".popup__content"))
        return

        // If user clicks outside the element, hide it!
    window.location.href = closeBTn.href



}



// add events listners
links.forEach(element => {
    element.addEventListener('click', hideNavBar);
});



// Detect all clicks on the document
document.addEventListener("click", hidePopup)