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
    $('.blog-block-wrapper .blog-posts-list .blog-post.block.list-post:hidden')
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
