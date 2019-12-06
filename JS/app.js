const sections = document.querySelectorAll('section');
const ul = document.createElement('ul');
document.getElementById('navbar__list').appendChild(ul);

//loop through elements to grab the data-nav elements
for (let i = 0; i < sections.length; i++) {
    const section = sections[i];

    const li = document.createElement('li');
    li.addEventListener('click', function clickHandler() {
        location.hash = section.id;

        // add class to section
        // remove class from sibling sections

        // add class to section links
        // remove class from sibling section links
    });
    li.textContent = section.dataset.nav;
    ul.appendChild(li);

};