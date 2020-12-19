let span1 = document.querySelector(".span-1");
let span2 = document.querySelector(".span-2");
let show = document.querySelector(".show");
let navBar = document.querySelector(".nav-bar");
let product = document.querySelector(".products");
let service = document.querySelector(".services");
let productDrop = document.querySelector(".product-drop");
let serviceDrop = document.querySelector(".service-drop");
let cards = document.querySelectorAll(".card");
let hamburger = document.querySelector(".ham");


hamburger.addEventListener("click", () => {
        navBar.classList.toggle("active");
        if(navBar.classList.contains("active")){
            document.querySelector("section").addEventListener("click", ()=> {
                navBar.classList.remove("active");
            });
        }
});

product.addEventListener("click", () => {
    productDrop.classList.toggle("active");
});

service.addEventListener("click", () => {
    serviceDrop.classList.toggle("active");
});

//Animations GSAP
gsap.from(".main-page", { duration: 1, y: "-20%", ease: "power2.inOut"});

//Timeline for gsap

let timeline = gsap.timeline({
    scrollTrigger: {
         trigger: "#card-container",
        start: "top 50%"
    }
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".h3",
        start: "center 40%",
        end: "bottom 20%"
    }
});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".h3-2",
        start: "center 40%",
        end: "bottom 20%"
    }
});

timeline.fromTo("#scroll-card", {duration: 1, opacity: 0, y:"20%"},{duration: 0.5,opacity: 1, y: "0%"});

timeline.fromTo("#scroll-card-1", {duration: 1, opacity: 0, y:"20%"},{duration: 0.5,opacity: 1, y: "0%"});

timeline.fromTo("#scroll-card-2", {duration: 1, opacity: 0, y:"20%"},{duration: 0.5,opacity: 1, y: "0%"},  "-=1.2");

tl.fromTo("#card-one", {duration: 1, opacity: 0, y:"20%"},{duration: 0.5,opacity: 1, y: "0%"});

tl2.fromTo(".new-card", {duration: 1, opacity: 0, y:"20%"},{duration: 0.5,opacity: 1, y: "0%"});


//about-page animations
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "top 50%"
    }
});

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".flex-new",
        start: "top 20%",
        end: "bottom 20%"
    }
});

tl3.fromTo(".about-2", {duration: 1.5, opacity: 0, y:"30%"},{opacity: 1, y: "0%"});

tl4.fromTo(".sec-1", {duration: 1, opacity: 0, y:"20%"},{duration: 0.5,opacity: 1, y: "0%"});
tl4.fromTo(".sec-2", {duration: 1, opacity: 0, y:"20%"},{duration: 0.5,opacity: 1, y: "0%"});

//contact-page animations
let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact",
        start: "top 50%"
    }
});

let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".sec-flex",
        start: "center 100%",
        end: "bottom 20%"
    }
});

tl5.fromTo(".about-2", {duration: 1.5, opacity: 0, y:"30%"},{opacity: 1, y: "0%"});
tl6.fromTo(".h4", {duration: 1, opacity: 0, y:"20%"},{duration: 0.5,opacity: 1, y: "0%"});
tl6.fromTo(".h4-2", {duration: 1, opacity: 0, y:"20%"},{duration: 0.5,opacity: 1, y: "0%"});
