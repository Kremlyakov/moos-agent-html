$(function(){

  console.log('page loaded!');

  initFrUserMenu();

  $('#rangeSlider').slider({

  });


  function initFrUserMenu(){
    let userMenuBtn = $('.fr-user-menu__main');

    if(userMenuBtn.length === 0) return false;

    userMenuBtn.on('click', function(e){
      e.preventDefault();

      userMenuBtn.parent().toggleClass('open');
    });
  }
});