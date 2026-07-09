(function() {
  "use strict"; // Start of use strict

  // Hide any open sidebar submenu accordions using Bootstrap's Collapse API
  var hideSidebarCollapses = function() {
    document.querySelectorAll('.sidebar .collapse.show').forEach(function(el) {
      bootstrap.Collapse.getOrCreateInstance(el, { toggle: false }).hide();
    });
  };

  // Toggle the side navigation
  document.querySelectorAll('#sidebarToggle, #sidebarToggleTop').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      document.body.classList.toggle('sidebar-toggled');
      var sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('toggled');
      if (sidebar.classList.contains('toggled')) {
        hideSidebarCollapses();
      }
    });
  });

  // Close any open menu accordions when window is resized below 768px
  window.addEventListener('resize', function() {
    var sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    if (window.innerWidth < 768) {
      hideSidebarCollapses();
    }

    // Toggle the side navigation when window is resized below 480px
    if (window.innerWidth < 480 && !sidebar.classList.contains('toggled')) {
      document.body.classList.add('sidebar-toggled');
      sidebar.classList.add('toggled');
      hideSidebarCollapses();
    }
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation is hovered over
  document.querySelectorAll('body.fixed-nav .sidebar').forEach(function(sidebar) {
    sidebar.addEventListener('wheel', function(e) {
      if (window.innerWidth > 768) {
        this.scrollTop += (e.deltaY < 0 ? -1 : 1) * 30;
        e.preventDefault();
      }
    });
  });

  // Scroll to top button appear
  var scrollToTop = document.querySelector('.scroll-to-top');
  if (scrollToTop) {
    document.addEventListener('scroll', function() {
      var scrollDistance = window.pageYOffset || document.documentElement.scrollTop;
      scrollToTop.style.display = scrollDistance > 100 ? 'block' : 'none';
    });

    // Smooth scrolling using native scroll behavior
    scrollToTop.addEventListener('click', function(e) {
      e.preventDefault();
      var href = this.getAttribute('href');
      var target = href && href !== '#' ? document.querySelector(href) : null;
      var top = target ? target.getBoundingClientRect().top + window.pageYOffset : 0;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  }

})(); // End of use strict
