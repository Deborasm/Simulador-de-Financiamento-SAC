'use strict';

import {Financiamento} from './Financiamento.js';
import {FinanciamentoCarencia} from './FinanciamentoCarencia.js';

const comCarencia = document.querySelector('#comCarencia');
const listaCarencia = document.querySelector('#listaCarencia');
const btnCalcular = document.querySelector('#btnCalcular');
const dadosTabela = document.querySelector('#dadosTabela');
const textoValor = document.querySelector('#textoValor');
const textoEntrada = document.querySelector('#textoEntrada');
const textoTaxaJuros = document.querySelector('#textoTaxaJuros');
const textoPrazo = document.querySelector('#textoPrazo');
const btnNovaSimulacao = document.querySelector('#btnNovaSimulacao');
const carencia = document.querySelector('#carencia');
const resultados = document.querySelector('#resultados');

comCarencia.addEventListener('change', function() {
    if (this.checked) {
        listaCarencia.style.visibility = 'visible';
    } else {
        listaCarencia.style.visibility = 'hidden';
    }
});
btnCalcular.addEventListener('click', function() {
    const valor = parseFloat(textoValor.value);
    const entrada = parseFloat(textoEntrada.value);
    const taxaJuros = parseFloat(textoTaxaJuros.value);
    const prazo = parseFloat(textoPrazo.value);
    let simulacao;
    if(comCarencia.checked) {
        const carencia = parseInt(listaCarencia.value);
        simulacao = new FinanciamentoCarencia(valor, entrada, taxaJuros, prazo, carencia);
    } else {
        simulacao = new Financiamento(valor, entrada, taxaJuros, prazo);
    }
    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
    
    resultados.style.visibility = 'visible';
    btnCalcular.style.visibility = 'hidden';
    if(comCarencia.checked == false) {
        carencia.style.visibility = 'hidden';
    }
});
btnNovaSimulacao.addEventListener('click', function() {
    textoValor.value = "";
    textoEntrada.value = "";
    textoTaxaJuros.value = "";
    textoPrazo.value = "";
    comCarencia.checked = false;
    listaCarencia.style.visibility = 'hidden';
    while (dadosTabela.firstChild) {
        dadosTabela.firstChild.remove();
    }
    resultados.style.visibility = 'hidden';
    btnCalcular.style.visibility = 'visible';
    carencia.style.visibility = 'visible';
});