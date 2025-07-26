const form = document.getElementById('form');
const inputs = form.querySelectorAll('input, textarea');
const botao = document.getElementById('salvar');
const voltar = document.getElementById('voltar');


function verificarCampos() {
  let todosPreenchidos = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      todosPreenchidos = false;
    }
  });

  botao.disabled = !todosPreenchidos;
}


inputs.forEach(input => {
  input.addEventListener('input', verificarCampos);
});


botao.onclick = () => {
  const dados = {};

  inputs.forEach(input => {
    dados[input.name] = input.value;
  });

  localStorage.setItem('form', JSON.stringify(dados));

 
  inputs.forEach(input => {
    input.value = '';
  });

  verificarCampos(); 
  window.alert('Dados salvos com sucesso!');
};

voltar.onclick = () => {
  window.location.href = 'listagem.html';
};