function insertFooter() {
    $.get('./blocks/footer/footer.html', function(footer) {
      $('footer').html(footer);
    });
  }
  $(document).ready(insertFooter);