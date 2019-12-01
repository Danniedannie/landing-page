const htmlContent = document.querySelectorAll('section');
const ul = document.createElement('ul');
var li = document.createElement('li');
document.getElementById('navbar__list').appendChild(ul);
const newTextContent = [];

//loop through elements to grab the data-nav elements
for (let i = 0; i < htmlContent.length; i++) {
    newTextContent.push(htmlContent[i]);
    var li = document.createElement('li');
    ul.appendChild(li);
    li.setAttribute('class', htmlContent[i].id);
    console.log(li)
    li.addEventListener('click', scrollToSection);
    var finalizedData = li.textContent += htmlContent[i].dataset.nav;

    //scrollTo helper function
    function scrollToSection(x) {
        location.hash = htmlContent[i].id;
    }
};