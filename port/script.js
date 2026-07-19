document.addEventListener('DOMContentLoaded', () => {
    const bootText = document.getElementById('boot-text');
    
    const lines = [
        "INIT SYSTEM BOOT...",
        "LOADING KERNEL...",
        "MOUNTING VFS: [OK]",
        "ESTABLISHING SSH TUNNEL...",
        "AUTH REQUIRED: hbenzina",
        "ACCESS GRANTED.",
        "------------------------------------",
        "WELCOME TO HAMZA BENZINA'S TERMINAL",
        "ROLE: NetDevOps & Systems Engineer",
        "LOC: Marrakech, Morocco",
        "EMAIL: hbenzina484@gmail.com",
        "LINKEDIN: linkedin.com/in/hamza-benzina-7947b5356/",
        "------------------------------------",
        "Type 'help' or scroll down to execute system read."
    ];

    let lineIndex = 0;
    let charIndex = 0;

    function typeWriter() {
        if (lineIndex < lines.length) {
            if (charIndex === 0) {
                const p = document.createElement('p');
                p.id = `line-${lineIndex}`;
                bootText.appendChild(p);
            }

            const currentLine = document.getElementById(`line-${lineIndex}`);
            currentLine.innerHTML += lines[lineIndex].charAt(charIndex);
            charIndex++;

            if (charIndex < lines[lineIndex].length) {
                setTimeout(typeWriter, 15); // Typing speed
            } else {
                charIndex = 0;
                lineIndex++;
                setTimeout(typeWriter, 150); // Pause between lines
            }
        } else {
            // Add blinking cursor
            const p = document.createElement('p');
            p.innerHTML = `<span class="cursor"></span>`;
            bootText.appendChild(p);
        }
    }

    // Start boot sequence
    setTimeout(typeWriter, 500);

    // Smooth scrolling
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href.startsWith('#')) return;
            e.preventDefault();
            const targetElement = document.getElementById(href.substring(1));
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});
