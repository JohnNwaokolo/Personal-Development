// Get modal elements
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];

// Get all certificate images
const certImages = document.querySelectorAll('.cert-img');

certImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        captionText.textContent = img.alt;
    });
});

// Close the modal when clicking the close button
closeBtn.onclick = () => {
    modal.style.display = 'none';
};

// Also close modal when clicking outside the image
modal.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
};

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const projects = [
    {
        title: "Personal Blog",
        description: "A blog site with posts and categories.",
        link: "https://yourblog.com",
        image: "blog-screenshot.jpg"
    },
    {
        title: "To-Do List App",
        description: "Add, delete, and save tasks.",
        link: "https://yourtodoapp.com",
        image: "todo-screenshot.jpg"
    }
];

const projectsContainer = document.querySelector('#projects .projects-list');

function displayProjects() {
    projectsContainer.innerHTML = ''; // Clear previous content

    projects.forEach(project => {
        const projectHTML = `
      <div class="project-item">
        <img src="${project.image}" alt="${project.title}" />
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    `;
        projectsContainer.innerHTML += projectHTML;
    });
}

displayProjects();

// Show/hide button
const backToTopBtn = document.getElementById('backToTop');

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Scroll to top when clicked
backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

