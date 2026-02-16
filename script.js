const body = document.body;
const toggleButton = document.getElementById('moonicon');
const sunIcon = document.getElementById('sunicon');
const menubutton = document.getElementById('menubtn');
const work1 = document.getElementById('work-1');
const navi = document.getElementById('navi');
const downwhite = document.getElementById('downwhite');
const downblack = document.getElementById('downblack');
const mdinfo = document.getElementById('mdinfo');



// auto slide close
const links = [
    document.getElementById('home2'),
    document.getElementById('about2'),
    document.getElementById('service2'),
    document.getElementById('mywork2'),
    document.getElementById('contactd'),
];

// Find the slide/aside element (update selector if needed)
const slideAside = document.getElementById('slideaside'); // Change 'slideaside' to your aside's id/class

links.filter(Boolean).forEach(link => {
    link.addEventListener('click', function () {
        // Scroll to the section
        let targetSection;
        switch (link.id) {
            case 'home2':
                targetSection = document.getElementById('home');
                break;
            case 'about2':
                targetSection = document.getElementById('about');
                break;
            case 'service2':
                targetSection = document.getElementById('service');
                break;
            case 'mywork2':
                targetSection = document.getElementById('mywork');
                break;
            case 'contactd':
                targetSection = document.getElementById('contact');
                break;
            default:
                targetSection = null;
        }
        if (targetSection) {
            const navbarHeight = navi.offsetHeight;
            const sectionTop = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
        }
        // Auto close the slide/aside
        if (slideAside) {
            slideAside.classList.remove('active');
        }
        // Optionally, deactivate menu button if needed
        if (menubutton) {
            menubutton.classList.remove('active');
        }
        // Optionally, deactivate work1 if needed
        if (work1) {
            work1.classList.remove('active');
        }
    });
});
 



// contact button

const contact = document.getElementById('contact');
const contact1 = [
    document.getElementById('contacta'),
    document.getElementById('contactb'),
    document.getElementById('contactc'),
    document.getElementById('contactd'),
];

contact1.forEach(button => {
    button.addEventListener('click', function () {
        const navbarHeight = navi.offsetHeight;
        const contactTop = contact.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: contactTop, behavior: 'smooth' });
    });
});



// home button
// show more home locate
const home = document.getElementById('home')
const homey = [
    document.getElementById('home1'),
    document.getElementById('home2'),
    document.getElementById('home3'),
];

homey.forEach(button => {
    button.addEventListener('click', function () {
        const navbarHeight = navi.offsetHeight;
        const homeTop = home.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: homeTop, behavior: 'smooth' });
    });
});






// about me button
const about = document.getElementById('about')
const about1 = [
    document.getElementById('about1'),
    document.getElementById('about2'),
];

about1.forEach(button => {
    button.addEventListener('click', function () {
        const navbarHeight = navi.offsetHeight;
        const aboutTop = about.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: aboutTop, behavior: 'smooth' });
    });
});



// Service button
const service = document.getElementById('service')
const service1 = [
    document.getElementById('service1'),
    document.getElementById('service2'),
];

service1.forEach(button => {
    button.addEventListener('click', function () {
        const navbarHeight = navi.offsetHeight;
        const serviceTop = service.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: serviceTop, behavior: 'smooth' });
    });
});



// my work button
const mywork = document.getElementById('mywork')
const mywork1 = [
    document.getElementById('mywork1'),
    document.getElementById('mywork2'),
];

mywork1.forEach(button => {
    button.addEventListener('click', function () {
        const navbarHeight = navi.offsetHeight;
        const myworkTop = mywork.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: myworkTop, behavior: 'smooth' });
    });
});



// navigation bar: change background on scroll

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navi.classList.add(
            "backdrop-blur-[3px]",
            "bg-white/30",
            "dark:bg-gray-100/30",
            "shadow-[0_0_90px_#1118274D]",
            mdinfo.classList.remove('shadow-lg')
        );
    }
    else {
        navi.classList.remove(
            "backdrop-blur-[3px]",
            "bg-white/30",
            "dark:bg-gray-100/30",
            "shadow-[0_0_90px_#1118274D]",
            mdinfo.classList.add('shadow-lg')
        );
    }
});





// Theme system: toggle theme and icons
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        toggleButton.classList.add('hidden');
        sunIcon.classList.remove('hidden');
        downwhite.classList.add('hidden');
        downblack.classList.remove('hidden');

    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        sunIcon.classList.add('hidden');
        toggleButton.classList.remove('hidden');
        downwhite.classList.remove('hidden');
        downblack.classList.add('hidden');
    }
};

const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
    });
}
if (sunIcon) {
    sunIcon.addEventListener('click', () => {
        setTheme('light');
        localStorage.setItem('theme', 'light');
    });
};


// menu button toggle

menubutton.addEventListener('click', () => {
    menubutton.classList.toggle('active');
    work1.classList.toggle('active');
});


