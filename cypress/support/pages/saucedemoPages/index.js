//Elementos
const el = {

  tfUsername: '[data-test=username]',
  tfPassword: '[data-test=password]',
  btLoginButton: '[data-test=login-button]',
  txtErrorLogin: '[data-test=error]',
  txtTitle:'.title',
  btFiltro: '[data-test=product_sort_container]',
  btDetalhesBackPack: '#item_4_title_link > .inventory_item_name',
  btAddToCartBackPack: '[data-test=add-to-cart-sauce-labs-backpack]',
  btRemoveBackPackCart: '[data-test=remove-sauce-labs-backpack]',
  btBackToProducts: '[data-test=back-to-products]',
  btAddToCartBoltTShirt: '[data-test=add-to-cart-sauce-labs-bolt-t-shirt]',
  btAddToCartFleeceJacket: '[data-test=add-to-cart-sauce-labs-fleece-jacket]',
  btRemoveBoltTShirtToCart:'[data-test=remove-sauce-labs-bolt-t-shirt]',
  btCarrinho: '.shopping_cart_link',
  validarItemAddCarrinho: '.shopping_cart_badge',
  btCheckout: '[data-test=checkout]',
  tfFirstName:'[data-test=firstName]',
  tfLastName: '[data-test=lastName]',
  tfZipCode: '[data-test=postalCode]',
  btContinue: '[data-test=continue]',
  txtValidarPaymentInfo: '.summary_info > :nth-child(2)',
  txtValidarShippingInfo: '.summary_info > :nth-child(4)',
  txtValidarTotalInfo: '.summary_total_label',
  btFinish: '[data-test=finish]',
  txtCheckoutComplete: '.complete-header',
  URLInventory: 'https://www.saucedemo.com/inventory.html',
  URLProduto: 'https://www.saucedemo.com/inventory-item.html?id=4',
  URLCart: 'https://www.saucedemo.com/cart.html',
  URLCheckoutOne: 'https://www.saucedemo.com/checkout-step-one.html',
  URLCheckoutTwo: 'https://www.saucedemo.com/checkout-step-two.html',
  URLCheckoutComplete: 'https://www.saucedemo.com/checkout-complete.html',

}

//Ações
class Login {

  inserirUsername(){
    cy.get(el.tfUsername).type('standard_user');
  }
  inserirPassword(){
    cy.get(el.tfPassword).type('secret_sauce');
  }
  inserirPasswordIncorreto(){
    cy.get(el.tfPassword).type('qualquer_coisa');
  }
  inserirUsuarioIncorreto(){
    cy.get(el.tfUsername).type('qualquer_coisa');
  }
  clicarLogin(){
    cy.get(el.btLoginButton).click();
  }
  validarURLInventory(){
    cy.url().should('be.equal', el.URLInventory);
  }
  validarURLProduto(){
    cy.url().should('be.equal', el.URLProduto);
  }
  validarURLCart(){
    cy.url().should('be.equal', el.URLCart);
  }
  validarURLCheckoutOne(){
    cy.url().should('be.equal', el.URLCheckoutOne)
  }
  validarURLCheckoutTwo(){
    cy.url().should('be.equal', el.URLCheckoutTwo)
  }
  validarURLCheckoutComplete(){
  cy.url().should('be.equal', el.URLCheckoutComplete);
  }
  clicarFiltroZA(){
    cy.get(el.btFiltro).select('Name (Z to A)');
  }
  clicarFiltroLoHi(){
    cy.get(el.btFiltro).select('Price (low to high)');
  }
  clicarFiltroHiLo(){
    cy.get(el.btFiltro).select('Price (high to low)');
  }
  clicarFiltroAZ(){
    cy.get(el.btFiltro).select('Name (A to Z)');
  }
  clicarNomeBackPack(){
  cy.get(el.btDetalhesBackPack).click({force:true});
  }
  clicarAddBackPackCarrinho(){
    cy.get(el.btAddToCartBackPack).click({force:true});
  }
  removerBackPackCarrinho(){
    cy.get(el.btRemoveBackPackCart).click({force:true});
  }
  clicarVoltarPaginaProdutos(){
    cy.get(el.btBackToProducts).click({force:true});
  }
  validarMsgErro(message){
    cy.get(el.txtErrorLogin).should('have.text', message);
  }
  validarTitle(message){
    cy.get(el.txtTitle).should('have.text', message);
  }
  adicionarBoltTShirtCarrinho(){
    cy.get(el.btAddToCartBoltTShirt).click({force:true});
  }
  adicionarFleeceJacketCarrinho(){
    cy.get(el.btAddToCartFleeceJacket).click({force:true});
  }
  validarItemAddCarrinho(){
    cy.get(el.validarItemAddCarrinho).should('exist');
  }
  validarItemRetiradoCarrinho(){
    cy.get(el.validarItemAddCarrinho).should('not.exist');
  }
  removerBoltTShirtCarrinho(){
    cy.get(el.btRemoveBoltTShirtToCart).click({force:true});
  }
  acessarCarrinho(){
    cy.get(el.btCarrinho).click({force:true});
  }
  clicarCheckout(){
    cy.get(el.btCheckout).click({force:true});
  }
  inserirFirstName(){
    cy.get(el.tfFirstName).type('Darth');
  }
  inserirLastName(){
    cy.get(el.tfLastName).type('Vader');
  }
  inserirZipCode(){
    cy.get(el.tfZipCode).type('9999999');
  }
  clicarContinue(){
    cy.get(el.btContinue).click({force:true});
  }
  validarPaymentInfo(message){
    cy.get(el.txtValidarPaymentInfo).should('have.text', 'SauceCard #31337');
  }
  ValidarShippingInfo(message){
    cy.get(el.txtValidarShippingInfo).should('have.text', 'FREE PONY EXPRESS DELIVERY!');
  }
  validarTotalInfo(message){
    cy.get(el.txtValidarTotalInfo).should('have.text', 'Total: $71.26');
  }
  clicarFinalizar(){
    cy.get(el.btFinish).click({force:true});
  }
  validarMsgCheckoutComplete(message){
    cy.get(el.txtCheckoutComplete).should('have.text', 'THANK YOU FOR YOUR ORDER');

  }
  
}

export default new Login();