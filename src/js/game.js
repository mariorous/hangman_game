window.addEventListener('load', function() {
    let popup = window.open('../views/popup.html', "", "width=400,height=700");
    
    let checkPopupClosed = setInterval(function() {
        if (popup.closed) {
            window.location.href = '../../index.html'; 
            clearInterval(checkPopupClosed); // Detener el intervalo
        }
    }, 1000); // Comprobar cada segundo (1000 milisegundos)

    console.log('La página ha terminado de cargarse!');
});
