

/* ======================toggle icon navbar===  */

let menuIcon =document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*========================scroll section active link ========= */
let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    section.forEach(sec =>{
        let top=window.scrollY;
        let offset = sec.offsetTop-150;
        let height= sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top>= offset && top<offset+height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id+']').classList.add('active');
            });
        };

    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    /*===remove toggle on click ===*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
/*===scroll reveal===*/
    ScrollReveal({
        reset:true,
        distance:'80px',
        duration :2000,
        delay:20
    });
    ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
    ScrollReveal().reveal('.home-img,.service-box,.portfolio-box,.input-box',{origin:'bottom'});
    ScrollReveal().reveal('.home-content h1,.about-img,.container-box,.footer',{origin:'left'});

    //typed content

    var typed=new Typed('.multiple-text',{
        strings:['CIVIL ENGINEERING STUDENT','SOFTWARE DEVELOPER','YOUTUBER','GRAPHIC DESIGNER'],
        typeSpeed:50,
        backSpeed:50,
        backDelay:100,
        loop:true
    });