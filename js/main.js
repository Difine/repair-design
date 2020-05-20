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
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '#pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '#next',
      prevEl: '#prev',
    },
  })
  var next = $('#next');
  var prev = $('#prev');
  var bullets= $('.swiper-container-horizontal > .swiper-pagination-bullets');
  next.css('left', prev.width() + 24 + bullets.width() + 13)
  bullets.css('left', prev.width() + 21)

  var mySwiper1 = new Swiper ('.swiper-container1', {
    loop: true,
    pagination: {
      el: '#pagination1',
      type: 'bullets',
    },
    navigation: {
      nextEl: '#next1',
      prevEl: '#prev1',
    },
  })
  var next1 = $('#next1');
  var prev1 = $('#prev1');
  var bullets1= $('#pagination1');
  next1.css('left', prev1.width() + 24 + bullets1.width() + 13)
  bullets1.css('left', prev1.width() + 21)

  new WOW().init();

    var block_show = false;
  
  function scrollTracking(){
    if (block_show) {
      return false;
    }
  
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('#section-title').offset().top;
    var eh = $('#section-title').outerHeight();
    var dh = $(document).height();   
  
    if (wt + wh >= et || wh + wt == dh || eh + et < wh){
      block_show = true;
      document.querySelector('.control__section-title').classList.add("anim__slideRightLeft");
    }
  }
  
  $(window).scroll(function(){
    scrollTracking();
  });
    
  $(document).ready(function(){ 
    scrollTracking();
  });

  //Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17,
      },
      policyCheckbox: "required",
      // правило-обьект (сообщения)
      userEmail: {
        required: true,
        email: true
      }
    },
    errorElement: "div",
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      policyCheckbox: "Подтвердите обработку данных",
    },
    errorPlacement: function(error, element) { 
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
    }
    error.insertAfter($(element));
    }
  });
  // Валидация формы в подвале
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      footerUserName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      footerUserPhone: {
        required: true,
        minlength: 17,
      },
      footerPolicyCheckbox: "required",
      // правило-обьект (сообщения)
      userEmail: {
        required: true,
        email: true
      }
    },
    errorElement: "div",
    messages: {
      footerUserName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      footerUserPhone: "Заполните поле",
      footerPolicyCheckbox: "Подтвердите обработку данных",
    },
    errorPlacement: function(error, element) { 
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
    }
    error.insertAfter($(element));
    }  
  });
  // Валидация формы в контроле
  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      controlUserName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      controlUserPhone: {
        required: true,
        minlength: 17,
      },
      controlPolicyCheckbox: "required",
      // правило-обьект (сообщения)
    },
    errorElement: "div",
    messages: {
      controlUserName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      controlUserPhone: "Заполните поле",
      controlPolicyCheckbox: "Подтвердите обработку данных",
    },
    errorPlacement: function(error, element) { 
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
    }
    error.insertAfter($(element));
    }
  });

  // маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "Ваш номер телефона:"});

});