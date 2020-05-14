/*document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector(".modal");
  const modalBtn = document.querySelectorAll('[data-toggle=modal]')
  const closeBtn = document.querySelector('.modal__close');
  const modalDialog = document.querySelector('.modal__dialog');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal);
  document.body.addEventListener('keyup', function (e) {
    let key = e.keyCode;
    if (key == 27) {
      modal.classList.remove('modal--visible');
    };
  });
    modal.onclick = function (event) {
      if (event.target == modal) {
      modal.classList.remove('modal--visible');
    };
  };
});
*/

$(document).ready(function () {
  var  modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible')
  });
  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible')
  })
  $(function(){
    $(window).scroll(function(){
      if($(window).scrollTop() > 100) {
        $('#scroll_top').show();
      } else {
        $('#scroll_top').hide();
      }
    });
    $('#scroll_top').click(function(){
      $('html, body').animate({scrollTop: 0}, 'slow');
      return false;
    });
  });
});