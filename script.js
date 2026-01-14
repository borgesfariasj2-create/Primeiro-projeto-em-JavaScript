var botao = document.getElementById('btnAvaliar');
var res = document.getElementById('resultado');

botao.addEventListener('click', function avaliar(){
var nota = Number(document.getElementById('nota').value);
var frequencia = Number(document.getElementById('frequencia').value);

    if (nota < 0 || nota > 10 ||
        frequencia < 0 || frequencia > 100) {
        res.innerHTML = `DIGITE DADOS VÁLIDOS`;
        res.style.backgroundColor = 'gray';
        res.style.color = 'black';
    }else if (nota < 4 || frequencia < 75) {
        res.innerHTML = `VOCÊ FOI REPROVADO`;
        res.style.backgroundColor = 'red';
        res.style.color = 'white';
    }else if (nota < 7 && frequencia >= 75) {
        res.innerHTML = `VOCÊ FICOU DE RECUPERAÇÃO`;
        res.style.backgroundColor = 'yellow';
        res.style.color = 'black';
    }else {
        res.innerHTML = `VOCÊ FOI APROVADO`;
        res.style.backgroundColor = 'green';
        res.style.color = 'white';
    }
});