function enviar(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5511975649922';
    const texto = `Olá! me chamo ${nome}, ${mensagem}`;
    const formatmsg = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${formatmsg}`;
    window.open(url, '_blank');
  }