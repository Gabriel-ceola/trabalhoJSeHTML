//custo * quantidade .
// valor * quantidade - custo
alert('Adicione todos os valores de uma só vez')
let listaMes1 = []
let listaMes2 = []
let lucro01 = []
let lucro02 = []

let quantM01 = []
let quantM02 = []
let valorM01 = []
let valorM02 = []
let custoM01 = []
let custoM02 = []
let custosM01 = []
let custosM02 = []
let quantMeses = []
let pagoAnual = []
quantMeses = Array()

function adicionar(){
  var addToM1 = document.getElementById('quantM1').value;
  quantM01.push(addToM1);
  var addToV1 = document.getElementById('valorM1').value;
  valorM01.push(addToV1);
  var addToC1 = document.getElementById('custoM1').value;
  custoM01.push(addToC1);
  var addToM2 = document.getElementById('quantM2').value;
  quantM02.push(addToM2);
  var addToV2 = document.getElementById('valorM2').value;
  valorM02.push(addToV2);
  var addToC2 = document.getElementById('custoM2').value;
  custoM02.push(addToC2);

  document.getElementById('quantM1').value = "";
  document.getElementById('quantM2').value = "";
  document.getElementById('valorM1').value = "";
  document.getElementById('valorM2').value = "";
  document.getElementById('custoM1').value = "";
  document.getElementById('custoM2').value = "";
}
function mensal(){
  let i = 0
    for (i = 0; i < 12; i++) {
        listaMes1.push(valorM01[i] * quantM01[i]);//PAGO
        listaMes2.push(valorM02[i] * quantM02[i]);
        custosM01.push(quantM01[i] * custoM01[i]);//CUSTO
        custosM02.push(quantM02[i] * custoM02[i]);
        lucro01.push(listaMes1[i] - custosM01[i]);//LUCRO
        lucro02.push(listaMes2[i] - custosM02[i]);
}
console.log('Valor recebido pelo servico do motor M1 R$'+ listaMes1)
console.log('Valor recebido pelo servico do motor M2 R$'+ listaMes2)
console.log('Lucro obtido do motor M1 R$' + lucro01)
console.log('Lucro obtido do motor M2 R$' + lucro02)
console.log('Custo do motor M1 R$' + custosM01)
console.log('Custo do motor M2 R$' + custosM02)
}
function anual(){

  

  let lucroAnual = []
  let custoAnual = []

  let lucroAnual2 = []
  let custoAnual2 = []
  
  let i = 0
    for (i = 0; i < 1; i++) {

      lucroAnual.push(custoM01[i] + custoM01[i]);//CUSTO
      lucroAnual2.push(custoM02[i] + custoM02[i]);
      custoAnual.push(lucro01[i] + lucro01[i]);//LUCRO
      custoAnual2.push(lucro02[i] + lucro02[i]);
        
        console.log('Lucro obtido do motor M1 no ano R$' + lucroAnual)
        console.log('Lucro obtido do motor M2 no ano R$' + lucroAnual2)
        console.log('Custo do motor M1 no ano R$' + custoAnual)
        console.log('Custo do motor M2 no ano R$' + custoAnual2)

    }
}
