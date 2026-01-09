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

 function mySkill(skill) {
    if (!skill) return;
    let skillSection = document.getElementById(skill);
    skillSection.style.display = '';
 }