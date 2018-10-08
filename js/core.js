$(function(){

  console.log('page loaded!');

  initFrUserMenu();

  $('#rangeSlider').slider({

  });

  // Modal opening fix
  $('[data-toggle="modal"]').on('click', function(e){
    e.preventDefault();
    e.stopPropagation();

    let eventTarget = $(e.currentTarget).data('target');
    let modal = $('.modal');
    console.log(eventTarget);

    if($(e.currentTarget).data('dismiss') === 'modal'){
      modal.modal('hide');
      if(eventTarget !== ''){
        modal.on('hidden.bs.modal', function(){
          $(eventTarget).modal('show');
          return true;
        });
      }
    } else {
      $(eventTarget).modal('show');
    }
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