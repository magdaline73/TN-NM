<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
   
    <title>My Portfolio</title>
   
</head>
<body>

<header>
    <h1>My Portfolio</h1>
    <h2>S. Shalini</h2>
    <p>Computer Science Student</p>
    <img src="profile.jpg" alt="Profile Photo">
</header>

<nav>
    <a href="#about">About</a>
    <a href="#education">Education</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
</nav>

<section id="about">
    <h2>About Me</h2>
    <p>Hello! I am Shekina Magdaline, a passionate Computer Application student with a strong interest in programming languages like C++ and Python. I enjoy building creative and functional web applications.</p>
</section>

<section id="education">
    <h2>Education</h2>
    <ul>
        <li><b>Bachelor of Computer Application</b> - Vidhya Sagar Women's College (2024 - 2027)</li>
        <li><b>High School</b> - Meenakshi ammal matric higher secondary school (2022 - 2024)</li>
    </ul>
</section>

<section id="skills" class="skills">
    <h2>Skills</h2>
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>Python</span>
    <span>C++</span>
</section>

<section id="projects">
    <h2>Projects</h2>
    <ul>
        <li><b>Portfolio Website</b> - A responsive personal portfolio using HTML, CSS, and JS.</li>
        <li><b>Student Management System</b> - A Python-based desktop application.</li>
    </ul>
</section>

<section id="contact">
    <h2>Contact</h2>
    <p>Email: <a href="mailto: shekinamagdaline08@gmail.com">shekinamagdaline08@gmail.com</a></p>
    <p>Phone: +91-9176931864</p>
    <p>LinkedIn: <a href="#" target="_blank">linkedin.com/in/shekinamagdaline</a></p>
</section>

<footer>
    <p>&copy; 2025 Shekina Magdaline  | All Rights Reserved</p>
</footer>

<!-- Back to Top Button -->
<button id="backToTop">↑ Top</button>

<script>
    // Show "Back to Top" button when scrolling down
    const backToTop = document.getElementById('backToTop');
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    };

    // Scroll to top when button clicked
    backToTop.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
</script>

</body>
</html>