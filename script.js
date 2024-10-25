document.getElementById('bimg').addEventListener('click', function() {
    const img = document.getElementById('img');
    if (img.src.includes('cat.jpg')) {
        img.src = 'dog.jpg';
    } else {
        img.src = 'cat.jpg';
    }
});

document.getElementById('btitle').addEventListener('click', function() {
    const title = document.getElementById('title');
    title.textContent = "Novo Título";
});

document.getElementById('bpar').addEventListener('click', function() {
    const par = document.getElementById('par');
    par.textContent = "Este é o novo texto do parágrafo.";
});

document.getElementById('baudio').addEventListener('click', function() {
    const audio = new Audio('audio.mp3');
    audio.play();
});


document.getElementById('btn1').addEventListener('click', function() {

    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');

    btn1.classList.toggle('highlight');
    btn2.classList.toggle('highlight');
    btn3.classList.toggle('highlight');
});
