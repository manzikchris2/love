let yes = document.getElementById('btn_y');
let no = document.getElementById('btn_n');
let card = document.getElementById('container');
let message = document.getElementById('text');
no.addEventListener('click', function() {
    card.style.scale = parseFloat(card.style.scale || 1) / 0.9;
    yes.style.scale = parseFloat(yes.style.scale || 1) / 0.9;
    no.style.scale = parseFloat(no.style.scale || 1) * 0.9;
    console.log(card.style.scale);
});
yes.addEventListener('click', function() {
    message.innerText = "I knew you'd say yes! ❤️";
    card.style.backgroundColor = "#ffcccc";
    
    let im = document.getElementById('imgt');
    im.src = "done.jpg";
    im.style.width = "200px";
    im.style.height = "200px";
    no.style.display = "none";
    yes.style.display = "none";

}); 