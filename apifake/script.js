
function consultarCPF() {
  const cpf = document.getElementById('cpf').value;
  if (cpf.length < 11) {
    alert("Digite um CPF válido.");
    return;
  }

  const nomes = ['Carlos Souza', 'Maria Fernanda', 'João Silva', 'Beatriz Rocha', 'Rafael Oliveira', 'Juliana Lima'];
  const nascimentos = ['03/08/1991', '15/04/1988', '22/11/1995', '30/06/1984', '10/01/1990', '27/09/1992'];
  const valores = ['R$ 1.289,00', 'R$ 982,50', 'R$ 1.736,00', 'R$ 2.003,00', 'R$ 874,90', 'R$ 1.501,25'];

  const index = parseInt(cpf.charAt(cpf.length - 1)) % nomes.length;

  document.getElementById('nome').textContent = nomes[index];
  document.getElementById('nascimento').textContent = nascimentos[index];
  document.getElementById('valor').textContent = valores[index];
  document.getElementById('resultado').classList.remove('hidden');
}
