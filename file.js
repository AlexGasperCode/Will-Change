const $cuadrado = document.getElementById('cuadrado');
// $cuadrado = addEventListener('Nombre del evento', 'Que hago si ocurre el evento');
// $cuadrado.addEventListener('animationstart', (event) => {
// $cuadrado.addEventListener('animationend', (event) => {
$cuadrado.addEventListener('animationend', (event) => {
    // console.log(event.animationName);
    if (event.animationName === 'rebote') {
        $cuadrado.style.animationName = 'cuadrado escalera';
        $cuadrado.style.animationDuration = '3s';
    }
});