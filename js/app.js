$('.owl-carousel').owlCarousel({
    loop:true,
    margin:7,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


const Modal = {
    open() {
     document.querySelector(".modal-overlay").classList.add("active");
     document.querySelector("#filmes").classList.add("invisible");
    },
    close() {
      document.querySelector(".modal-overlay").classList.remove("active");
      document.querySelector("#filmes").classList.remove("invisible");
    },
  };

  
  