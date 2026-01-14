function myPage(id) {
    //hide all sections
    document.querySelectorAll('.page').forEach (page => {
        page.style.display = 'none';
    });
    //show the selected section
    const page = document.getElementById(id);
    if (page) {
        page.style.display = 'block';
            }
    } 
function sub(form) {
    form.style.display = "none";

    const msg = document.getElementById("message");
        msg.innerHTML = "Message sent successfully. I will get back to you soon!";
}
    
        