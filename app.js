const htmlContent = document.querySelectorAll('h2');
const ulList = document.querySelectorAll('.navbar_list')
const emptyArray = [];
for (let i = 0; i < htmlContent.length; i++) {
    emptyArray.push(htmlContent[i].innerHTML);
}

console.log(emptyArray);



/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
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