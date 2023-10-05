const txtAnim = document.querySelector('.changing-text')

new Typewriter(txtAnim, {
    loop : true,
    deleteSpeed : 70
    /* deleteSpeed : (10 rapide / deleteSpeed: 70 lent) */

})
    /* changeDelay : (10 rapide / changeDelay: 70 lent) */
    .changeDelay(90)
    .typeString("Bonjour, je m'appelle " +
        "Charles")
    .pauseFor(1000)
    .deleteChars(29)
    .pauseFor(300)
    .typeString("Dévelloppeur - Full stack")
    .pauseFor(1000)
    .deleteChars(25)
    .pauseFor(300)
    .typeString("Étudiant a L'ESD")
    .pauseFor(1000)
    .deleteChars(16)
    .pauseFor(300)
    .start()


let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,
    fill: {gradient: ['#a445b2', '#fa4299']}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function(event, progress, stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
$(".js .bar").circleProgress({
    value: 0.70
});
$(".react .bar").circleProgress({
    value: 0.60
});
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";




        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 7 + 0.3
                }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

