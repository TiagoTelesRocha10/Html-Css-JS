
const calcular = document.getElementById('calcular');


function imc () {
    /*alert('teste click')*/
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        /*alert('preenchido')*/
        const valorIMC =(peso / (altura * altura)).toFixed(2)/*para arredondar um valor númerico*/

        let classificação = '';

        if (valorIMC < 18.5){
            classificação = 'Abaixo do peso.'
        }else if(valorIMC < 25){
            classificação = ' com o peso ideal. Parabéns'
        }else if(valorIMC < 30){
            classificação = 'Levemente acima do peso'
        }else if(valorIMC < 35){
            classificação = 'com obesidade grau 1'
        }else if(valorIMC < 40){
            classificação = 'com obesidade grau 2'
        }else {
            classificação = 'com obesidade grau 3. Cuidado!!'
        }
        
        
        resultado.textContent = `${nome} seu IMC é ${valorIMC}.E você está ${classificação}`


        /*resultado.textContent = valorIMC*/

    }else {
        /*alert('Preencha todos os campos')*/
        resultado.textContent = 'Preencha todos os campos'
    }
}


calcular.addEventListener('click', imc); 
