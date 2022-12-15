///////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: javascript.js
// Description: This program is for the dropdown content button when the page
//              shrinks on a desktop device.
//////////////////////////////////////////////////////////////////////////////////////////////////////

const dropdownButton = document.querySelector('.dropbtn');
const myDropdown = document.getElementById('myDropdown');

dropdownButton.addEventListener('click', myFunction);

/* When the user clicks on the button, toggle between hiding
and showing the dropdown content. */
function myFunction(event){
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it.
window.onclick = function(event) {
    if ((!event.target.matches('.dropbtn')))
    {
        if (myDropdown.classList.contains('show'))
        {
            myDropdown.classList.remove('show');
        }
    }
}
