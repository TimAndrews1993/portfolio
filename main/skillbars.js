
const intersectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // element is in viewport, do the stuff
      console.log(entry.target.classList.add('isPlaying'));

      // it's good to remove observer,
      // if you don't need it any more
      observer.unobserve(entry.target);
    }
  });
});

// get your elements, by class name '.js-item'
const elements = [...document.querySelectorAll('.progress')];

// start observing your elements
elements.forEach((element) => intersectionObserver.observe(element));
