let numeroA = [];
let numeroB = [];
let V3 = [];
 a-com
function adicionar() {

    var addToA = document.getElementById('V1').value;
    var addToB = document.getElementById('V2').value;
    numeroA.push(addToA);
    numeroB.push(addToB);
    document.getElementById('V1').value = "";
    document.getElementById('V2').value = "";
}

function calcular() {
    let i = 0
    for (i = 0; i < numeroA.length; i++) {
        V3.push(numeroA[i] * numeroB[i])
    }
    let soma = 0
    for (i = 0; i < V3.length; i++) {
        soma = soma + V3[i]
    }
    console.log(soma)
}