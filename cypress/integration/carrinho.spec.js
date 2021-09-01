/// <reference types="cypress" />

import Login from '../support/pages/saucedemoPages'

describe('Testes Carrinho', () => {
    beforeEach(() => {
        cy.visit('https://saucedemo.com');

    })

    afterEach(() => {
  
    })

    it('Adicionar 1 produto no carrinho pela página de produtos', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.clicarNomeBackPack();
        Login.validarURLProduto();
        Login.clicarAddBackPackCarrinho();
        Login.validarItemAddCarrinho();
    })

    it('Adicionar 2 produtos no carrinho pela página de produtos', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.adicionarBoltTShirtCarrinho();
        Login.adicionarFleeceJacketCarrinho();
        Login.validarItemAddCarrinho();

    })

    it('Remover produto pela página de produtos', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.adicionarBoltTShirtCarrinho();
        Login.validarItemAddCarrinho();
        Login.removerBoltTShirtCarrinho();
        Login.validarItemRetiradoCarrinho();
    })

    it('Adicionar produto no carrinho pela página de detalhe do produto', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.clicarNomeBackPack();
        Login.validarURLProduto();
        Login.clicarAddBackPackCarrinho();
        Login.validarItemAddCarrinho();

    })

    it('Remover produto pela página de detalhe do produto', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.clicarNomeBackPack();
        Login.validarURLProduto();
        Login.clicarAddBackPackCarrinho();
        Login.validarItemAddCarrinho();
        Login.removerBackPackCarrinho();
        Login.validarItemRetiradoCarrinho();

    })

    it('Acessar carrinho pela página de produtos', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.adicionarBoltTShirtCarrinho();
        Login.validarItemAddCarrinho();
        Login.acessarCarrinho();
        Login.validarTitle('Your Cart');
        Login.validarURLCart();

    })

    it('Remover produto adicionado pela página de produtos', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.adicionarBoltTShirtCarrinho();
        Login.validarItemAddCarrinho();
        Login.removerBoltTShirtCarrinho();
        Login.validarItemRetiradoCarrinho()

    })

    it('Remover produto adicionado pelo carrinho', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.adicionarBoltTShirtCarrinho();
        Login.validarItemAddCarrinho();
        Login.acessarCarrinho();
        Login.validarTitle('Your Cart');
        Login.validarURLCart();
        Login.removerBoltTShirtCarrinho();
        Login.validarItemRetiradoCarrinho()

    })

})