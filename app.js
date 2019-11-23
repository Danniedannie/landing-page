const htmlContent = document.querySelectorAll('section');
const ul = document.createElement('ul');
var li = document.createElement('li');
document.getElementById('navbar__list').appendChild(ul);
const newTextContent = [];


for (let i = 0; i < htmlContent.length; i++) {
    newTextContent.push(htmlContent[i].innerText);
    console.log(htmlContent);
    var li = document.createElement('li');
    var anchor = document.createElement('a');
    ul.appendChild(li);
    li.textContent += htmlContent[i].dataset.nav;


}




console.log(navbar__list);




//console.log(navbar__list);




/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: No
 *
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active