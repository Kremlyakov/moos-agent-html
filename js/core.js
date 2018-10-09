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
    let preventModal = '';
    console.log(eventTarget);

    if($(e.currentTarget).data('dismiss') === 'modal'){
      preventModal !== '' ? preventModal.modal('hide') : $('.modal').modal('hide');
      if(eventTarget !== ''){
        $(preventModal).on('hidden.bs.modal', function(){
          $(eventTarget).modal('show');
          preventModal = eventTarget;
        });
      }
    } else {
      $(eventTarget).modal('show');
      preventModal = eventTarget;
    }
  });


  function initFrUserMenu(){
    let userMenuBtn = $('.fr-user-menu__main, .user-panel__main');

    if(userMenuBtn.length === 0) return false;

    userMenuBtn.on('click', function(e){
      e.preventDefault();

      userMenuBtn.parent().toggleClass('open');
    });
  }
});