function redirecionar() {
    window.location.href = "https://www.youtube.com/watch?v=SdkWBHLHTgg";
}
const botaoMaluco = document.getElementById('botao-maluco');

botaoMaluco.addEventListener('mouseenter', () => {
const novoX = Math.random() * (window.innerWidth - botaoMaluco.offsetWidth);
const novoY = Math.random() * (window.innerHeight - botaoMaluco.offsetHeight);
botaoMaluco.style.transform = `translate(${novoX}px, ${novoY}px)`;
});
