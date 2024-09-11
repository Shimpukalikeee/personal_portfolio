document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        
        // Toggle button visibility based on saved theme
        if (savedTheme === 'dark-mode') {
            document.getElementById('darkModeToggle').classList.add('d-none');
            document.getElementById('lightModeToggle').classList.remove('d-none');
        } else {
            document.getElementById('darkModeToggle').classList.remove('d-none');
            document.getElementById('lightModeToggle').classList.add('d-none');
        }
    } else {
        // Default to light mode if no theme is saved
        document.body.classList.add('light-mode');
    }

    // Initially, show only the "home" section when the page loads
    showSection('home');
});

function showSection(sectionId) {
    // Hide all sections
    let sections = document.querySelectorAll('.section, #home');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('fade-in');
    });
    
    // Show the selected section
    let selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
    selectedSection.classList.add('fade-in');
}

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const lightModeToggle = document.getElementById('lightModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark-mode'); // Save the theme in localStorage
    darkModeToggle.classList.add('d-none');
    lightModeToggle.classList.remove('d-none');
});

lightModeToggle.addEventListener('click', () => {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light-mode'); // Save the theme in localStorage
    darkModeToggle.classList.remove('d-none');
    lightModeToggle.classList.add('d-none');
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevents the context menu from appearing
});
