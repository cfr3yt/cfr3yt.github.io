const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    const particles =[];
    const color = randomColor();

    const particle = document.createElement('span');
    particle.classList.add('particle', 'move');

    const { x, y} = randomLocation();
    particle.style.setProperty('--x', x);
    particle.style.setProperty('--y', y);
    particle.style.background = color;
    btn.style.background = color;
}) 
