// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Back to Top Button visibility and functionality
  const backToTopButton = document.querySelector(".back-to-top");
  
  // Show or hide the Back to Top button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove("hidden");
    } else {
      backToTopButton.classList.add("hidden");
    }
  });
  
  // Scroll to the top when the Back to Top button is clicked
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
  // Contact Form Validation (Optional)
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (!name || !email) {
      alert('Please fill in all fields.');
      e.preventDefault(); // Prevent form submission
    }
  });
  