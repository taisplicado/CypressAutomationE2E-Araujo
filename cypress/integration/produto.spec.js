/// <reference types="cypress" />

import Login from '../support/pages/saucedemoPages'

describe('Testes Produto', () => {
    beforeEach(() => {
        cy.visit('https://saucedemo.com');

    })

    afterEach(() => {
  
    })
  

    it('Filtrar produtos por NOME (Z-A)', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.clicarFiltroZA();

    })

    it('Filtrar produtos por NOME (A-Z)', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.clicarFiltroAZ();


    })

    it('Filtrar produtos por PREÇO (Low-High)', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.clicarFiltroLoHi();

    })

    it('Filtrar produtos por PREÇO (High-Low)', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.clicarFiltroHiLo();

    })

    it('Acessar detalhes do produto', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.clicarNomeBackPack();
        Login.validarURLProduto();

    })

    it('Acessar detalhes do produto e voltar para página de produtos', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.clicarNomeBackPack();
        Login.validarURLProduto();
        Login.clicarVoltarPaginaProdutos();
        Login.validarTitle('Products');
        Login.validarURLInventory();

    })

})