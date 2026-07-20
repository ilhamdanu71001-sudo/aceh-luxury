const button = document.getElementById("openInvitation");
const bgMusic = document.getElementById("bgMusic");

const leftDoor = document.querySelector(".left-door");
const rightDoor = document.querySelector(".right-door");
const light = document.querySelector(".door-light");

button.addEventListener("click", () => {
  
  bgMusic.play().catch(error => {
    console.log(error);
});

    leftDoor.style.transform = "rotateY(-110deg)";

    rightDoor.style.transform = "rotateY(110deg)";

    light.style.opacity = "1";

});
button.addEventListener("click", () => {

    leftDoor.style.transform = "rotateY(-110deg)";
    rightDoor.style.transform = "rotateY(110deg)";
    light.style.opacity = "1";

    setTimeout(() => {

        document.getElementById("opening").style.opacity = "0";

    },1000);

    setTimeout(() => {

        document.getElementById("hero").scrollIntoView({
            behavior:"smooth"
        });

    },1800);

});

// ==========================
// COUNTDOWN
// ==========================

// Ganti dengan tanggal sidang yang sebenarnya
const targetDate = new Date("August 18, 2026 09:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

},1000);
// ==========================
// MUSIC BUTTON
// ==========================

const musicToggle = document.getElementById("musicToggle");

musicToggle.addEventListener("click", () => {

    if(bgMusic.paused){

        bgMusic.play();

        musicToggle.innerHTML = "🎵";

    }else{

        bgMusic.pause();

        musicToggle.innerHTML = "▶";

    }

});
// ==========================
// SCROLL ANIMATION
// ==========================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: 0.15

});

reveals.forEach(section => {

    observer.observe(section);

});