alert('Adicione uma resposta de cada vez')
let gabarito = []
gabarito = Array(10)
let resposta = []
respostas = Array(10)
let aluno = []
aluno = Array(15)

function adicionar() {
    var addTo = document.getElementById('respostas').value;
    resposta.push(addTo);
    document.getElementById('respostas').value = "";
}

function addGabarito() {
    var addToGab = document.getElementById('bagarito').value;
    gabarito.push(addToGab);
    document.getElementById('bagarito').value = "";
}

function corrigir() {
  var nota = 0
  var aluninho = 0
  for(let i = 0; i < gabarito.length; i++) {
    if (gabarito[i] = resposta[i])
    nota = nota++;
    aluninho = aluninho++;
}
console.log('O aluno tirou '+ nota)
}
