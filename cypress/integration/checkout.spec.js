/// <reference types="cypress" />

import Login from '../support/pages/saucedemoPages';

describe('Testes Checkout com Sucesso e Falha', () => {
    beforeEach(() => {
        cy.visit('https://saucedemo.com');
    
    })

    afterEach(() => {

    })


    it('Checkout completo com Sucesso', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.adicionarBoltTShirtCarrinho();
        Login.adicionarFleeceJacketCarrinho();
        Login.validarItemAddCarrinho();
        Login.acessarCarrinho();
        Login.validarTitle('Your Cart');
        Login.validarURLCart();
        Login.clicarCheckout();
        Login.validarTitle('Checkout: Your Information');
        Login.validarURLCheckoutOne();
        Login.inserirFirstName();
        Login.inserirLastName();
        Login.inserirZipCode();
        Login.clicarContinue();
        Login.validarTitle('Checkout: Overview');
        Login.validarURLCheckoutTwo();
        Login.validarPaymentInfo();
        Login.ValidarShippingInfo();
        Login.validarTotalInfo();
        Login.clicarFinalizar();
        Login.validarTitle('Checkout: Complete!');
        Login.validarURLCheckoutComplete();
        Login.validarMsgCheckoutComplete();

    })

    it('Checkout com ZIP CODE vazio', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.adicionarBoltTShirtCarrinho();
        Login.adicionarFleeceJacketCarrinho();
        Login.validarItemAddCarrinho();
        Login.acessarCarrinho();
        Login.validarURLCart();
        Login.clicarCheckout();
        Login.validarTitle('Checkout: Your Information');
        Login.validarURLCheckoutOne();
        Login.inserirFirstName();
        Login.inserirLastName();
        Login.clicarContinue();
        Login.validarMsgErro('Error: Postal Code is required');

    })

    it('Checkout com FIRST NAME vazio', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.adicionarBoltTShirtCarrinho();
        Login.adicionarFleeceJacketCarrinho();
        Login.validarItemAddCarrinho();
        Login.acessarCarrinho();
        Login.validarURLCart();
        Login.clicarCheckout();
        Login.validarTitle('Checkout: Your Information');
        Login.validarURLCheckoutOne();
        Login.inserirLastName();
        Login.inserirZipCode();
        Login.clicarContinue();
        Login.validarMsgErro('Error: First Name is required');

    })

    it('Checkout com LAST NAME vazio', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();
        Login.adicionarBoltTShirtCarrinho();
        Login.adicionarFleeceJacketCarrinho();
        Login.validarItemAddCarrinho();
        Login.acessarCarrinho();
        Login.validarURLCart();
        Login.clicarCheckout();
        Login.validarTitle('Checkout: Your Information');
        Login.validarURLCheckoutOne();
        Login.inserirFirstName();
        Login.inserirZipCode();
        Login.clicarContinue();
        Login.validarMsgErro('Error: Last Name is required');

    })

})