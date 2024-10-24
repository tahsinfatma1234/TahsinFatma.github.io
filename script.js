// Sample project data
const projects = [
    {
        title: 'Project 1',
        description: 'Description of project 1.',
        link: 'https://link-to-project1.com',
        image: 'path/to/image1.jpg'
    },
    {
        title: 'Project 2',
        description: 'Description of project 2.',
        link: 'https://link-to-project2.com',
        image: 'path/to/image2.jpg'
    },
    {
        title: 'Project 3',
        description: 'Description of project 3.',
        link: 'https://link-to-project3.com',
        image: 'path/to/image3.jpg'
    }
];

// Function to display projects dynamically
function displayProjects() {
    const projectContainer = document.getElementById('project-list');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectContainer.appendChild(projectDiv);
    });
}

// Image slider functionality
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
});

document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
});

// Call the function to display projects on page load
window.onload = () => {
    displayProjects();
    showSlide(currentSlide);
};

// Theme toggle functionality
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change button text based on theme
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});

// Enhanced form submission with validation
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (!name || !message) {
            alert('Please fill in all fields.');
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent: "${message}"`);
        form.reset(); // Reset the form
    });
}


    // Array of certificate data
    const certificates = [
        {
            name: "Certificate 1",
            link: "certificate1.pdf",
            course: "Course/Training Name 1",
            skill: "Skill/Subject 1"
        },
        {
            name: "Certificate 2",
            link: "certificate2.pdf",
            course: "Course/Training Name 2",
            skill: "Skill/Subject 2"
        },
        {
            name: "Certificate 3",
            link: "certificate3.pdf",
            course: "Course/Training Name 3",
            skill: "Skill/Subject 3"
        }
    ];

    // Function to render certificates
    function renderCertificates() {
        const certificateBox = document.getElementById("certificate-box");

        certificates.forEach(cert => {
            const certificateItem = document.createElement("div");
            certificateItem.classList.add("certificate-item");

            certificateItem.innerHTML = `
                <a href="${cert.link}" target="_blank">View ${cert.name}</a>
                <p>This certificate was awarded for completing ${cert.course}, demonstrating my proficiency in ${cert.skill}.</p>
            `;

            certificateBox.appendChild(certificateItem);
        });
    }

    // Call the function to render certificates on page load
    window.onload = renderCertificates;

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Toggle all elements that need a dark-mode class
    document.querySelectorAll('header, footer, .contact-form input, .contact-form textarea, .btn, .social-icon i').forEach(function(el) {
        el.classList.toggle('dark-mode');
    });

    // Change the button text
    this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

