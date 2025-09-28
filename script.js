// icon navbar
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
      menuIcon.classList.toggle('fa-xmark');
      menuIcon.classList.toggle('fa-bars');
      navbar.classList.toggle('active');
    };

    // scroll active links + sticky navbar
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    let header = document.querySelector('header');

    window.onscroll = () => {
      let top = window.scrollY;

      sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
          });
        }
      });

      // sticky navbar
      header.classList.toggle('sticky', window.scrollY > 100);

      // navbar hide on scroll (mobile)
      menuIcon.classList.remove('fa-xmark');
      navbar.classList.remove('active');
    };

    // close navbar when nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active'); 
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars'); 
  });
});

// scroll reveal

ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration: 2000,
     dely: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
 ScrollReveal().reveal('.home-image, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left'});
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});


//  form code 

  const form = document.querySelector('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // page reload hone se rokta hai

    const url = form.action;
    const formData = new FormData(form);

    const res = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      alert('✅ Message sent successfully!');
      form.reset(); // form empty ho jayega
    } else {
      alert('❌ Failed to send message. Please try again.');
    }
  });

  // js for read more button 

  function toggleText() {
    const btn = event.target;
    const moreText = btn.previousElementSibling.querySelector(".more");

    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      btn.innerText = "Read Less";
    } else {
      moreText.style.display = "none";
      btn.innerText = "Read More";
    }
  }
