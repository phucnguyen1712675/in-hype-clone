$(document).ready(function () {
  $('a.btn.btn-load-more').click(function () {
    $(this).addClass('btn-loading');
  });

  $('.posts-grid-4-block-wrapper .btn.btn-load-more').click(function () {
    setTimeout(function () {
      $('.posts-grid-4-block-wrapper .col.l-4:hidden').slice(0, 3).slideDown();

      if ($('.posts-grid-4-block-wrapper .col.l-4:hidden').length === 0) {
        $('.posts-grid-4-block-wrapper .btn.btn-load-more').fadeOut('slow');
        $('.posts-grid-4-block-wrapper .row + .row').remove();
      }
    }, 1000);
  });

  $('.blog-block-wrapper .btn.btn-load-more').click(function () {
    setTimeout(function () {
      $(
        '.blog-block-wrapper .blog-posts-list .blog-post.block.list-post:hidden'
      )
        .slice(0, 8)
        .slideDown();

      if (
        $(
          '.blog-block-wrapper .blog-posts-list .blog-post.block.list-post:hidden'
        ).length === 0
      ) {
        $('.blog-block-wrapper .btn.btn-load-more').fadeOut('slow');
        $('.blog-block-wrapper .blog-posts-list + .row').remove();
      } else {
        $('.blog-block-wrapper .btn.btn-load-more.btn-loading').removeClass(
          'btn-loading'
        );
      }
    }, 1000);
  });

  const navbar = $('#navbar');

  $('.main-menu-mobile-toggle i').click(function () {
    if (navbar.hasClass('in')) {
      const menuItemHasChildren = $(
        'li.menu-item.menu-item-has-children.mobile-submenu-opened'
      );
      menuItemHasChildren.removeClass('mobile-submenu-opened');

      navbar.removeClass('in');
    } else {
      navbar.addClass('in');
    }
  });

  function isDesktopScreen() {
    return $(window).width() > 991;
  }

  $('#navbar .nav > li.menu-item.menu-item-has-children > a').click(function (
    e
  ) {
    if (!isDesktopScreen()) {
      e.preventDefault();

      // Get menu-item
      const menuItem = $(this).parent();

      // Is opening
      if (menuItem.hasClass('mobile-submenu-opened')) {
        // Get children
        const children = $(
          '.sub-menu li.menu-item.menu-item-has-children',
          menuItem
        );

        // Its child is opening
        if (children.hasClass('mobile-submenu-opened')) {
          children.removeClass('mobile-submenu-opened');
        }

        // Close it
        menuItem.removeClass('mobile-submenu-opened');
      }
      // Is not opening
      else {
        // Open it
        menuItem.addClass('mobile-submenu-opened');
      }
    }
  });

  $('#navbar .nav .sub-menu li.menu-item.menu-item-has-children > a').click(
    function (e) {
      if (!isDesktopScreen()) {
        e.preventDefault();

        // Is opening
        if ($(this).parent().hasClass('mobile-submenu-opened')) {
          // Close it
          $(this).parent().removeClass('mobile-submenu-opened');
        }
        // Is not opening
        else {
          // Open it
          $(this).parent().addClass('mobile-submenu-opened');
        }
      }
    }
  );
});
  