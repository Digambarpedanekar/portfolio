document.addEventListener('DOMContentLoaded', function () {
    const targetElement = document.querySelector('.multiple-text');

        const typewriter = new Typewriter(targetElement, {
            strings: ['Web Designer', '', 'Web Developer', ''],
            autoStart: true,
            loop: true,
            delay: 100,
            typeSpeed:100,
            deleteSpeed: 100,
            pauseFor: 1000
        });

    let menuIcon =document.querySelector('.menu-icon');
    menuIcon.addEventListener('click',()=>{
        document.querySelector('.nav-list-mobileview').classList.toggle('display');
        
    
    })
    })