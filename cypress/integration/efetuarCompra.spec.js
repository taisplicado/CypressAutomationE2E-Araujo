/// <reference types="cypress" />
import araujo from '../support/pages/index'

describe('Testes de Interface WEB E2E Araujo', () => {
    beforeEach(() => {
        cy.visit('https://www.araujo.com.br/') 
    })

    afterEach(() => {
  
    })
    it('Efetuar os passos de compra de um produto, sem finalizar a venda', () => {
        araujo.acessarTelaInicial();
        araujo.pesquisarProduto();
        araujo.visualizarProduto();
        araujo.adicionarProdutoCarrinho();
        araujo.FinalizarCompra();
        araujo.inserirCEP();
        araujo.validarValorTotal();
    })

})