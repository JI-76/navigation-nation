// navigationnation.js

// Add const to handle HTML Elements
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(direction1, direction2) {
    // run a function on each Array element
    navItems.forEach((nav, i) => {
        //console.log(`slide-${direction1}-${i}`, `slide-${direction2}-${i}`);
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
}

// Function toggleNav()
function toggleNav() {
    // Toggle Menu Bars Open/Closed (X)
    menuBars.classList.toggle('change');
    
    // Toggle Menu Active (visible or not)
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate Slide-In - Overlay
        // overlay.classList.remove('overlay-slide-left');
        // overlay.classList.add('overlay-slide-right');
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        // Animate Slide-In - Nav Items
        // nav1.classList.remove('slide-out-1');
        // nav1.classList.add('slide-in-1');
        // nav2.classList.remove('slide-out-2');
        // nav2.classList.add('slide-in-2');
        // nav3.classList.remove('slide-out-3');
        // nav3.classList.add('slide-in-3');
        // nav4.classList.remove('slide-out-4');
        // nav4.classList.add('slide-in-4');
        // nav5.classList.remove('slide-out-5');
        // nav5.classList.add('slide-in-5');
        navAnimation('out', 'in');
    } else {
        // Animate Slide-Out - Overlay
        // overlay.classList.remove('overlay-slide-right');
        // overlay.classList.add('overlay-slide-left');
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
         // Animate Slide-Out - Nav Items
        //  nav1.classList.remove('slide-in-1');
        //  nav1.classList.add('slide-out-1');
        //  nav2.classList.remove('slide-in-2');
        //  nav2.classList.add('slide-out-2');
        //  nav3.classList.remove('slide-in-3');
        //  nav3.classList.add('slide-out-3');
        //  nav4.classList.remove('slide-in-4');
        //  nav4.classList.add('slide-out-4');
        //  nav5.classList.remove('slide-in-5');
        //  nav5.classList.add('slide-out-5');
        navAnimation('in', 'out');
    };
};

// Event Listeners
menuBars.addEventListener('click', toggleNav);
// nav1.addEventListener('click', toggleNav);
// nav2.addEventListener('click', toggleNav);
// nav3.addEventListener('click', toggleNav);
// nav4.addEventListener('click', toggleNav);
// nav5.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});
