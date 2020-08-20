const navSlide = () => {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

//Toggle nav
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
			//Burger animation
			burger.classList.toggle('toggle');
		});
		//Close nav by taking mouse off of it
    nav.addEventListener('mouseleave', () => {
      if(nav.classList.toggle('nav-active')===true) {
        nav.classList.toggle('nav-active');
      }
      if(burger.classList.toggle('toggle')===true) {
        burger.classList.toggle('toggle');
      }
    })

    //Close nav by clicking on one of the nav list items
    for (let i=0; i < navLinks.length - 1; i++) {
      navLinks[i].addEventListener('click', () => {
        if(nav.classList.contains('nav-active')) {
          nav.classList.toggle('nav-active');
        }
        if(burger.classList.contains('toggle')) {
          burger.classList.toggle('toggle');
				}
      })
    }
}

navSlide();
