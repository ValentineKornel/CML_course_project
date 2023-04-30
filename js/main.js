(function () {
    const burger = document.querySelector('.header-burger')
    const menu = document.querySelector('.header-nav')
    const close = document.querySelector('.nav-close')
    const Links = document.querySelectorAll('.header-link')

    burger.addEventListener('click', () => {
        menu.classList.add('header-nav-active')
    })
    close.addEventListener('click', () => {
        menu.classList.remove('header-nav-active')
    })
    if (window.innerWidth < 770) {
        Links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('header-nav-active')
            })
        })
    }

})();

// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight = document.querySelector('header').clientHeight;
        let target = document.querySelector(targetEl);
        // let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerElHeight - 400;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

const kontBtn = document.querySelector('.kont-item')
const kontMenu = document.querySelector('.header-kontakt')
const close = document.querySelector('.head-close')
const headerMenu = document.querySelector('.header-wrapper')


kontBtn.addEventListener('click', () => {
    kontMenu.classList.add('hk-active') // kontMenu.removeAttribute('hidden')
    headerMenu.style.width = '63%';
})
close.addEventListener('click', () => {
    kontMenu.classList.remove('hk-active') // kontMenu.setAttribute('hidden')
    headerMenu.style.width = '100%';
});

const allBtn = document.querySelector('.all')
const hearBtn = document.querySelector('.hear')
const handBtn = document.querySelector('.hand')
const legBtn = document.querySelector('.leg')
const works = document.querySelectorAll('.arbeit-img')

allBtn.addEventListener('click', () => {
    removeClass ()
    works.forEach(work  => {

        work.classList.toggle('arbeit-img-active')
    })
})

hearBtn.addEventListener('click', () => {
    removeClass ()
    works.forEach(work  => {
       if (work.classList.contains('ar-hear')) {
           work.classList.add('arbeit-img-active')
       }
    })
})

handBtn.addEventListener('click', () => {
    removeClass ()
    works.forEach(work  => {
        if (work.classList.contains('ar-hand')) {
            work.classList.add('arbeit-img-active')
        }
    })
})
legBtn.addEventListener('click', () => {
    removeClass ()
    works.forEach(work  => {
        if (work.classList.contains('ar-leg')) {
            work.classList.toggle('arbeit-img-active')
        }
    })
})

function removeClass () {
    works.forEach(work  => {
        work.classList.remove('arbeit-img-active')
    })
}
