document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        resultado.innerHTML = "Por favor, insira valores válidos!";
        resultado.className = "resultado";
        return;
    }

    const imc = peso / (altura * altura);
    let mensagem = "";
    let classe = "";

    if (imc < 18.5) {
        mensagem = "você está abaixo do peso. Considere se alimentar melhor.";
        classe = "magro";
    } else if (imc < 24.9) {
        mensagem = "seu peso está normal. Parabéns!";
        classe = "normal";
    } else if (imc < 29.9) {
        mensagem = "você está com sobrepeso. Que tal se exercitar um pouco mais?";
        classe = "sobrepeso";
    } else {
        mensagem = "você está obeso. Procure um médico para acompanhamento.";
        classe = "obeso";
    }

    resultado.className = "resultado " + classe;
    resultado.innerHTML = `<strong>${nome}</strong>, seu IMC é <strong>${imc.toFixed(2)}</strong>. ${mensagem}`;


});
