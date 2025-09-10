// Bloqueia botÃ£o direito
document.addEventListener('contextmenu', e => e.preventDefault());

// Bloqueia atalhos Ctrl+S, Ctrl+U, F12, Ctrl+Shift+I
document.addEventListener('keydown', e => {
  if (
    (e.ctrlKey && (e.key === 's' || e.key === 'u')) ||
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && e.key === 'I')
  ) {
    e.preventDefault();
  }
});

// Exemplo de aÃ§Ã£o para o botÃ£o
document.getElementById('meuBotao').addEventListener('click', () => {
  alert('BotÃ£o clicado!');
});