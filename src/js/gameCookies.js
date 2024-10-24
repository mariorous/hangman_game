const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');
const keyboard1 = document.getElementById('keyboard1');
const keyboard2 = document.getElementById('keyboard2'); 
const keyboard3 = document.getElementById('keyboard3');
console.log(flechaIzquierda);
console.log(flechaDerecha);
console.log(keyboard1);
console.log(keyboard2);
console.log(keyboard3);

/* window.addEventListener('load', function() {
    let popup = window.open('../views/popup.html', "", "width=400,height=700");
    
    let checkPopupClosed = setInterval(function() {
        if (popup.closed) {
            window.location.href = '../../index.html'; 
            clearInterval(checkPopupClosed); // Detener el intervalo
        }
    }, 1000); // Comprobar cada segundo (1000 milisegundos)

    console.log('La página ha terminado de cargarse!');
}); */

flechaIzquierda.addEventListener('click', function() {
    
});

flechaDerecha.addEventListener('click', function() {
    if(keyboard1.style.display === 'flex'){
        keyboard1.style.display = 'none';
        keyboard2.style.display = 'flex';
        flechaIzquierda.style.visibility = 'visible';
    } else if(keyboard2.style.display === 'flex'){
        keyboard2.style.display = 'none';
        keyboard3.style.display = 'flex';
        flechaDerecha.style.visibility = 'hidden';
    }
});