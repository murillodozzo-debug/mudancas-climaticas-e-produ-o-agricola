let score = 0;
let answered = new Set();

function calcularRisco() {
  const regiao = document.getElementById('regiao').value;
  const cultura = document.getElementById('cultura').value;
  const temp = Number(document.getElementById('temp').value);

  let base = 10;
  if (cultura === 'Soja') base = 12;
  if (cultura === 'Milho') base = 14;
  if (cultura === 'Trigo') base = 11;
  if (cultura === 'Feijão') base = 13;

  const extra = Math.round(base + temp * 4);
  document.getElementById('resultado').innerHTML =
    `${regiao} • ${cultura}: estimativa de irrigação extra de ${extra}% devido ao aumento térmico.`;
}

function responderQuiz(correta, botao) {
  const item = botao.parentElement.textContent;
  if (answered.has(item)) return;

  answered.add(item);
  if (correta) score += 1;
  document.getElementById('score').textContent = `Pontuação: ${score}`;
}