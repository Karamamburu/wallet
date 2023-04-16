$(document).ready(function() {

  $('section').load('/main/blocks/balance/balance.html');

  const navLinks = document.querySelectorAll('.navbar-link');

  navLinks.forEach(link => link.addEventListener('click', function() {
    const sectionName = $(this).parent().attr('value');
    $('section').load('./blocks/' + sectionName + '/' + sectionName + '.html');
  }));
});