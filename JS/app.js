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
    //console.log(li.className);
    var finalizedData = li.textContent += htmlContent[i].dataset.nav;

    //scrollTo helper function
    function scrollToSection() {
        location.hash = htmlContent[i].id;
    }

    /* function addActiveClass() {
        var activeclass = document.querySelectorAll('section');
        for (var i = 0; i < activeclass.length; i++) {
            activeclass[i].addEventListener('click', activateClass);
        }

        function activateClass(e) {
            for (var i = 0; i < activeclass.length; i++) {
                activeclass[i].classList.remove('your-active-class');
            }
            e.target.classList.add('your-active-class');
            console.log(li)
        }
 */
}

{
    /* <script
    src = "https://code.jquery.com/jquery-3.4.1.js"
    integrity = "sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
    crossorigin = "anonymous" > < /script>

    $(document).on('click', 'ul li', function() {
        $(this).addClass('active').siblings().removeClass('active')
    })


    // if (current.className <= 0) { */
}
//     current.className = current.className.replace(" active", "");
// }
// console.log(current);
// // Add the active class to the current/clicked button