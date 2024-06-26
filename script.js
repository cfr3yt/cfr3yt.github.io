const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const particles = [];
    const color = randomColor();

    const particle = document.createElement('span');
    particle.classList.add('particle', 'move');

    const { x, y } = randomLocation();
    particle.style.setProperty('--x', x);
    particle.style.setProperty('--y', y);
    particle.style.background = color;
    btn.style.background = color;

    btn.appendChild(particle);

    particles.push(particle);

    setTimeout(() => {
        for (let i = 0; i < 100; i++) {
            const innerP = document.createElement('span');
            innerP.classList.add('particle', 'move');
            innerP.style.transform = `translate(${x}, ${y})`;

            const xs = Math.random() * 200 - 100 + 'px';
            const ys = Math.random() * 200 - 100 + 'px';

            innerP.style.setProperty('--x', `calc(${x} + ${xs})`);

            innerP.style.animationDuration = Math.random() * 300 + 200 + 'ms';
            innerP.style.background = color;

            btn.appendChild(innerP);
            particles.push(innerP);
        }
        setTimeout(() => {
            particles.forEach(particle => {
                particle.remove();
            });
        }, 1000);
    }, 1000);
});

function randomLocation() {
    return {
        x: Math.random() * window.innerWidth - window.innerWidth / 2 + 'px',
        y: Math.random() * window.innerHeight - window.innerHeight / 2 + 'px'
    };
}

function randomColor() {
    return `hsl(${Math.floor(Math.random() * 362)}, 100%, 50%)`;
}

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid = null;

initializeSlider(){
    
function initializeSlider(){

    slides[slideIndex].classList.add("displaySlide");

}
function showSlide(index){

}
function prevSlide(){

}
function nextSlide(){

}
