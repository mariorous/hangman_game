// Variable global para almacenar la referencia a la ventana emergente
let popupWindow = null;

// Evento de clic en el botón
document.getElementById('openPopupBtn').addEventListener('click', function() {
    // Si la ventana ya está abierta y no está cerrada, dale foco
    if (popupWindow && !popupWindow.closed) {
        popupWindow.focus();
    } else {
        // Abre una nueva ventana
        popupWindow = window.open('https://www.example.com', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
    }
});

// Evento para dar foco a la ventana emergente si se hace clic en la pestaña principal
window.addEventListener('focus', function() {
    if (popupWindow && !popupWindow.closed) {
        popupWindow.focus(); // Vuelve a poner la ventana emergente en primer plano
    }
});
 