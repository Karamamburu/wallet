function insertBalance() {
    $.get('/main/blocks/balance/balanse.html', function(balance) {
      $('section').html(balance);
    });
  }
  $(document).ready(insertBalance);