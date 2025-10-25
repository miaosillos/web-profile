// Smooth scrolling for nav links
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight nav item based on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) link.classList.add('active');
  });
});

// Fetch JSON data asynchronously
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    loadSkills(data.skills);
    loadHobbies(data.hobbies);
  })
  .catch(err => console.error('Error loading JSON:', err));

// Function to populate skills dynamically
function loadSkills(skills) {
  const container = document.getElementById('skills-container');
  skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skill');
    skillDiv.innerHTML = `
      <label>${skill.name}</label>
      <div class="progress-bar" style="width: ${skill.level}"></div>
    `;
    container.appendChild(skillDiv);
  });
}

// Function to populate hobbies dynamically
function loadHobbies(hobbies) {
  const container = document.getElementById('hobbies-container');
  hobbies.forEach(hobby => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<h3>${hobby}</h3>`;
    container.appendChild(card);
  });
}
