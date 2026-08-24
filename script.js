function myPage(id) {
    // Hide all sections and remove the animation class
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
        page.classList.remove('active-page');
    });

    // Display the selected section and trigger the slide-up/fade animation
    const activePage = document.getElementById(id);
    if (activePage) {
        // Use flex for layouts that require it, block for others
        activePage.style.display = (id === 'about' || id === 'project' || id === 'contact') ? 'flex' : 'block';
        
        // Brief timeout ensures the display change registers before adding the animation class
        setTimeout(() => {
            activePage.classList.add('active-page');
        }, 10);
    }

    // Smoothly scroll to the top of the page when navigating tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function sub(formElement) { 
    // Add a fade out transition to the form
    if (formElement) {
        formElement.style.transition = "opacity 0.5s ease";
        formElement.style.opacity = "0";
        setTimeout(() => {
            formElement.style.display = "none";
        }, 500);
    }
    
    // Display the success message with an animation
    const msg = document.getElementById("message");
    if (msg) {
        setTimeout(() => {
            msg.innerHTML = "Message sent successfully! I will get back to you soon.";
            msg.classList.add('active-page'); // Re-use the fade-in animation
        }, 500);
    }
}