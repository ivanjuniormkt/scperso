document.addEventListener("DOMContentLoaded", function () {
  const imagens = document.querySelectorAll('.pedido-img');
  let index = 0;

  function animarProximo() {
    const imagem = imagens[index];
    imagem.classList.add('ativo');

    // Remover a classe quando a animaÃ§Ã£o terminar (1.2s)
    setTimeout(() => {
      imagem.classList.remove('ativo');
      index = (index + 1) % imagens.length;
      setTimeout(animarProximo, 800); // pequena pausa antes do prÃ³ximo
    }, 1200);
  }

  animarProximo();
});