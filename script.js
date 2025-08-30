const button = document.getElementById('colorBtn');
const h1 = document.querySelector('h1');
function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i< 6; i++){
        color += letters[Math.floor(Math.random()*16)];
        
    }
    return color;
}
button.addEventListener('click', function(){
document.body.style.backgroundColor = getRandomColor();
});
button.addEventListener('click',() => {
const color1 = getRandomColor();
const color2 = getRandomColor();
const c = getRandomColor();
document.body.style.backgroundColor = c;
h1.textContent = `Current color: ${c}`;

document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
});