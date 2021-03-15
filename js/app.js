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

/*Anchor */

let rocket = document.querySelector('.rocket')
      let topBtn = document.querySelector('.topbtn')

      window.onscroll = function () {
        topBtn.classList.toggle('active', window.scrollY > 120)

        let topBtonActive = topBtn.classList.contains('active')
        if (topBtonActive != true) {
          setTimeout(function () {
            rocket.classList.remove('active')
          }, 300)
        }
      }

      //para subir para o top d pagina
      $(document).ready(function () {
        $('.topbtn').click(function () {
          $('.rocket').addClass('active')
          setTimeout(() => {
            $('html, body').animate({ scrollTop: 0 }, 1500)
          }, 200)
        })
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
const ModalMoveit = {
    openMoveit() {
     document.querySelector(".modal-overlaymoveit").classList.add("active");
     document.querySelector("#filmes").classList.add("invisible");
    },
    closeMoveit() {
      document.querySelector(".modal-overlaymoveit").classList.remove("active");
      document.querySelector("#filmes").classList.remove("invisible");
    },
  };
const ModalFinance = {
    openFinance() {
     document.querySelector(".modal-overlaydevfinance").classList.add("active");
     document.querySelector("#filmes").classList.add("invisible");
    },
    closeFinance() {
      document.querySelector(".modal-overlaydevfinance").classList.remove("active");
      document.querySelector("#filmes").classList.remove("invisible");
    },
  };
const ModalInstagram = {
    openInstagram() {
     document.querySelector(".modal-overlaydevinstagram").classList.add("active");
     document.querySelector("#filmes").classList.add("invisible");
    },
    closeInstagram() {
      document.querySelector(".modal-overlaydevinstagram").classList.remove("active");
      document.querySelector("#filmes").classList.remove("invisible");
    },
  };

  
  