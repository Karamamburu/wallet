function insertHeader() {
    $.get('./header.html', function(header) {
      $('header').html(header);
    });
  }
  $(document).ready(insertHeader);