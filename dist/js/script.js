// hide navbar when a link  clicked

const links = document.querySelectorAll('.navigation__link')
const toggleBtn = document.getElementById("navi-toggle")

function hideNavBar(event) {
    toggleBtn.checked = false;
}
// add events listners
links.forEach(element => {
    element.addEventListener('click', hideNavBar);
});