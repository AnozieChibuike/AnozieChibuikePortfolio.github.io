

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        let head = document.getElementById("arrow")
        console.log(targetSection)
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});


function scroller() {
    window.scrollTo({
        // top: 0,
        // behavior: "smooth"
        top: screenTop,
        behavior: "smooth"
    })    
}