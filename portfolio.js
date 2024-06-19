<section id="portfolio">
  <h2>My Work</h2>
  <div id="filters">
    <button class="filter-btn" data-filter="all">All</button>
    <button class="filter-btn" data-filter="web">Web Design</button>
    <button class="filter-btn" data-filter="graphic">Graphic Design</button>
  </div>
  <div class="project" data-category="web">
    <h3>Web Design Project</h3>
    <img src="web-project.jpg" alt="Web Project">
    <p>Description of the web design project.</p>
  </div>
  <div class="project" data-category="graphic">
    <h3>Graphic Design Project</h3>
    <img src="graphic-project.jpg" alt="Graphic Project">
    <p>Description of the graphic design project.</p>
  </div>
  <!-- Add more projects with appropriate data-category attributes -->
</section>
// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    e.preventDefault();
  }
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    projects.forEach(project => {
      if (filter === 'all' || project.getAttribute('data-category') === filter) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});
