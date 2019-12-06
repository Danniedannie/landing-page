// const sections = document.querySelectorAll('section');
// const ul = document.createElement('ul');
// document.getElementById('navbar__menu').appendChild(ul);
// //loop through elements to grab the data-nav elements
// for (let i = 0; i < sections.length; i++) {
//     const section = sections[i];
//     const li = document.createElement('li');
//     li.setAttribute('id',section.dataset.nav);
//     li.addEventListener('click', function clickHandler() {
//         location.hash = section.id;
//       const currentSection = document.querySelector(`[data-nav=${this.id}]`);
//        // remove class from sibling sections
//       const allSections = document.querySelectorAll('section');
//       allSections.forEach((section) =>{
//         console.log(section)
//         section.classList.remove('active');
//       })
//        // add class to section
//       currentSection.classList.add('active');
//       const allLi = document.querySelectorAll('li');
//       allLi.forEach((li) =>{
//         console.log(li)
//         li.classList.remove('active');
//       })
//         // remove class from sibling section links
//       this.classList.add('active');
//     });
//     li.textContent = section.dataset.nav;
//     ul.appendChild(li);
// };

const sections = document.querySelectorAll('section');
const ul = document.createElement('ul');
document.getElementById('navbar__list').appendChild(ul);
//loop through elements to grab the data-nav elements
for (let i = 0; i < sections.length; i++) {    
    const section = sections[i];    
    const li = document.createElement('li');    
    li.setAttribute('id', section.dataset.nav)    
    li.addEventListener('click', function clickHandler() {        
        location.hash = section.id;   
        console.log(this.id)   
        const currentSection = document.querySelector(`[data-nav=${this.id}]`);      
        // remove class from sibling sections 
        const allSections = document.querySelectorAll('section');      
        allSections.forEach((section) => {        
                console.log(section)        
                section.classList.remove('active');      
            })       
            // add class to section
                   currentSection.classList.add('active');      
        const allLi = document.querySelectorAll('li');   
        console.log(this) 
        allLi.forEach((li) => {        
                console.log(li)        
                li.classList.remove('active');      
            })        
            // remove class from sibling section links
              this.classList.add('active');    
    });    
    li.textContent = section.dataset.nav;    
    ul.appendChild(li);
};