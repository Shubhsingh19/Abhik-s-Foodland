 window.addEventListener('scroll', () => {
      const nav = document.getElementById('navbar');
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });


    // menu jsvscript


  const filterButtons = document.querySelectorAll('.filter-btn');

const sections = document.querySelectorAll('.menu-section');

filterButtons.forEach(btn => {

    btn.addEventListener('click', () => {

        // Remove old active button
        filterButtons.forEach(b => {
            b.classList.remove('active');
        });

        // Add active class to clicked button
        btn.classList.add('active');

        // Get filter value
        const filterValue = btn.dataset.filter;

        // Loop through all sections
        sections.forEach(section => {

            // Get section category
            const category = section.dataset.category;

            // Show matching sections
            if (
                filterValue === 'all' ||
                category === filterValue
            ) {

                section.style.display = 'block';

            } else {

                section.style.display = 'none';

            }

        });

    });

});


        // vist us js


                window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 20) {
                nav.style.padding = '1rem 0';
                nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
            } else {
                nav.style.padding = '1.5rem 0';
                nav.style.boxShadow = 'none';
            }
        });

        // Add smooth hover for social buttons
        document.querySelectorAll('.social-btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.backgroundColor = 'var(--stone-200)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.backgroundColor = 'white';
            });
        });