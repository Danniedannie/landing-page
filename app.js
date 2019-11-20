const htmlContent = document.querySelectorAll('h2');
const ulList = document.querySelectorAll('.navbar_list');
const newNavElement = document.createElement('div');
const newTextContent = [];
for (let i = 0; i < htmlContent.length; i++) {
    newTextContent.push(htmlContent[i].innerHTML);
}
var myJSON = JSON.stringify(newTextContent)
    //ulList.insertAdjacentHTML('beforebegin', newTextContent);
console.log(newTextContent);



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