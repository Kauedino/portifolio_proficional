// Garante que o código só execute após o carregamento completo da página
$(document).ready(function () {
  // Validação do formulário de contato ao tentar enviar
  $('#form-contato-principal').submit(function (event) {
    event.preventDefault(); // Evita o envio padrão para validar antes

    var nome = $('#nome').val();
    var email = $('#email').val();
    var mensagem = $('#mensagem').val();

    // Verifica se o campo nome não está vazio
    if (nome.trim() === '') {
      alert('Por favor, preencha seu nome.');
      return;
    }

    // Valida se o e-mail não está vazio e contém '@'
    if (email.trim() === '' || email.indexOf('@') === -1) {
      alert('Por favor, digite um e-mail válido.');
      return;
    }

    // Confirma que a mensagem foi preenchida
    if (mensagem.trim() === '') {
      alert('Por favor, escreva uma mensagem.');
      return;
    }

    // Se todos os campos estiverem válidos, mostra mensagem de sucesso
    alert('Formulário enviado com sucesso!');
    this.reset(); // Reseta o formulário após envio
  });

  // Efeito hover nas imagens das redes sociais dentro das seções específicas
  $('.redes-sociais-imagens img').hover(
    function () {
      // Ao entrar com o mouse, a imagem sobe 8px para dar efeito de destaque
      $(this).css('transform', 'translateY(-8px)');
    },
    function () {
      // Ao sair com o mouse, retorna à posição original
      $(this).css('transform', 'translateY(0)');
    }
  );

  // Mesmo efeito para as imagens das redes sociais no menu de navegação (navbar)
  $('.redes-sociais-imagens-navbar img').hover(
    function () {
      $(this).css('transform', 'translateY(-8px)');
    },
    function () {
      $(this).css('transform', 'translateY(0)');
    }
  );

  // Menu mobile: abre/fecha o menu ao clicar no botão ☰
  $('.menu-toggle').click(function () {
    $('.links_nav_bar').toggleClass('active');
  });
});
