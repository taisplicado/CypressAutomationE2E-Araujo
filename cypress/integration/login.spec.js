/// <reference types="cypress" />

import Login from '../support/pages/saucedemoPages'

describe('Testes Login com Sucesso e Falha', () => {
    beforeEach(() => {
        cy.visit('https://saucedemo.com');

    })

    afterEach(() => {
  
    })
  

    it('Login com sucesso usuário comum', () => {

        Login.inserirUsername();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarTitle('Products');
        Login.validarURLInventory();

    })

    it('Login com PASSWORD incorreto', () => {

        Login.inserirUsername();
        Login.inserirPasswordIncorreto();
        Login.clicarLogin();
        Login.validarMsgErro('Epic sadface: Username and password do not match any user in this service');

    })

    it('Login com USUÁRIO incorreto', () => {

        Login.inserirUsuarioIncorreto();
        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarMsgErro('Epic sadface: Username and password do not match any user in this service');

    })

    it('Login com PASSWORD vazio', () => {

        Login.inserirUsername();
        Login.clicarLogin();
        Login.validarMsgErro('Epic sadface: Password is required');

    })

    it('Login com USUÁRIO vazio', () => {

        Login.inserirPassword();
        Login.clicarLogin();
        Login.validarMsgErro('Epic sadface: Username is required');

    })

    it('Login com USUÁRIO e PASSWORD vazios', () => {

        Login.clicarLogin();
        Login.validarMsgErro('Epic sadface: Username is required');

    })

})