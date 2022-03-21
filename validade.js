(() => {
  function validaDados() {

    window.event.preventDefault();

    if (document.form.nome.value.length > 50) {
      alert('O campo Nome deve conter no máximo 50 caracteres.');
      document.form.nome.focus();
    }
    else if (document.form.assunto.value.length > 50) {
      alert('O campo Assunto deve conter no máximo 50 caracteres.');
      document.form.assunto.focus();
    }
    else if (document.form.mensagem.value.length > 300) {
      alert('O campo Mensagem deve conter no máximo 300 caracteres.');
      document.form.mensagem.focus();
    }

  }

  document.querySelector("form").addEventListener("submit", validaDados);
})();