function insertHeader() {
    $.get('./blocks/header/header.html', function(header) {
      $('header').html(header);
    });
  }
  $(document).ready(insertHeader);