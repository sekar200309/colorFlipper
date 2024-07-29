const btn = document.getElementById("btn");
const ccode = document.getElementById("color");
const bg = document.getElementById("wrap");

const hexcode = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click', function(){
    let hexcolor = '#';
    for (let i=0; i<6; i++) {
        hexcolor += randomhexa();
    }
    bg.style.backgroundColor = hexcolor;
    ccode.innerHTML=hexcolor;

})

function randomhexa() {
    let randomIndex = Math.floor(Math.random()*hexcode.length);
    return hexcode[randomIndex];
}