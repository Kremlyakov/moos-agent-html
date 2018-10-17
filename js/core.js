$(function(){

  console.log('page loaded!');

  initFrUserMenu();
  initRangeSlider();
  initFixedFilters();
  initSearchForm();
  initStatesFormControls();

  $(document).on('scroll', function(){
    initFixedFilters();
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

  function initFrUserMenu() {
    let userMenuBtn = $('.fr-user-menu__main, .user-panel__main');

    if(userMenuBtn.length === 0) return false;

    userMenuBtn.on('click', function(e){
      e.preventDefault();

      userMenuBtn.parent().toggleClass('open');
    });
  }
  function initRangeSlider() {
    let rangeContainer = $('#rangeSlider');

    if(rangeContainer.length === 0) return false;

    rangeContainer.slider({

    });
  }
  function initFixedFilters() {
    let filtersContainer = $('.main-filter');

    if(filtersContainer.length === 0) return false;

    if($(window).scrollTop() > 0){
      filtersContainer.addClass('main-filter--fixed');
    } else {
      filtersContainer.removeClass('main-filter--fixed');
    }
  }
  function initSearchForm() {
    let searchInput = $('#search');
    let searchForm = searchInput.closest('.form-search');

    if(searchInput.length === 0 || searchForm.length === 0) return false;

    searchInput.on('input', function(){
      (searchInput.val() === '')
        ? hideElements()
        : showElements();
    });

    function showElements() {
      searchForm.addClass('filled');
    }
    function hideElements() {
      searchForm.removeClass('filled');
    }
  }
  function initStatesFormControls() {
    let inputsList = $('.form-control');

    if(inputsList.length === 0) return false;

    inputsList.on('input', function(){
      if($(this).val() === '') {
        $(this).removeClass('filled');
      }else {
        $(this).addClass('filled');
      }
    });
  }
});