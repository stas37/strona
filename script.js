    // Kod do pokazywania tylko wybranej sekcji
    const menuLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');

    function showSection(hash) {
      sections.forEach(section => {
        if ('#' + section.id === hash) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }

    document.addEventListener('DOMContentLoaded', function() {
      showSection('#menu');
      menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const hash = this.getAttribute('href');
          showSection(hash);
          window.scrollTo({top: 0, behavior: 'smooth'});
        });
      });
    });
