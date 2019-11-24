const htmlContent = document.querySelectorAll('section');
const ul = document.createElement('ul');
var li = document.createElement('li');
document.getElementById('navbar__list').appendChild(ul);
const newTextContent = [];
const secondArray = [];

//loop through elements to grab the data-nav elements
for (let i = 0; i < htmlContent.length; i++) {
    newTextContent.push(htmlContent[i].innerText);
    secondArray.push(htmlContent[i].className);
    console.log(secondArray);
    var li = document.createElement('li');
    ul.appendChild(li);
    //console.log(newTextContent);
    var finalizedData = li.textContent += htmlContent[i].dataset.nav;
    //console.log(finalizedData);
    //var finalizedContent2 = htmlContent[i].id;

    // Loop through the buttons and add the active class to the current/clicked button
    //console.log(finalizedData);
    //for (var y = 0; y < newTextContent.length; y++) {
    //secondArray.push(htmlContent[y].className)
    //console.log(secondArray);
    //console.log(newTextContent);
    //secondArray[y].addEventListener("click", function() {
    //var current = document.getElementsByClassName("your-active-class");
    //current[0].className = current[0].className.replace(" your-active-class", "");
    //this.className += " active";
    //console.log(current);



};


// Get the container element
//var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
//var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button



//console.log(navbar__list);




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