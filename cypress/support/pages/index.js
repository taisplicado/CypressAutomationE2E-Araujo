//Elementos
const el = {
    btFecharPopUp:'div > .fa',
    tfPesquisar: '#ftBoxdb20c6bef79c4d71affbd07f96e9ea2e',
    btPesquisar: '#ftBtndb20c6bef79c4d71affbd07f96e9ea2e',
    selecionarDipirona:':nth-child(1) > :nth-child(2) > .item > .header > .image > img',
    txtDipirona:'[class="fn productName  Dipirona-Sodica-500mg-ml-Neo-Quimica-Generico-Gotas-20ml "]',
    btComprar:'.buy-button',
    txtCarrinho: '[class="x-minicart__item-title"]',
    btFinalizarCompra: '.x-minicart__btn-checkout',
    tfCEP: '#ship-postalCode',
    txtProdutoCarrinho: '[id="product-name722510"]',
    txtValorSubTotal: '[data-bind="text: valueLabel"]',
    txtValorEntrega: '[data-bind="text: valueLabel, visible: $parent.isShippingKnown()"]',
    txtValorTotal: '[data-bind="text: totalLabel"]',
    
}

//Ações
class araujo {
    acessarTelaInicial(){
        cy.get(el.btFecharPopUp).click();
    }
    pesquisarProduto(){
        cy.get(el.tfPesquisar).type('Dipirona');
        cy.get(el.btPesquisar).click();
    }
    visualizarProduto(){
        cy.get(el.selecionarDipirona).click({force:true});
        cy.get(el.txtDipirona).should('have.text', 'Dipirona Sódica 500mg/ml Neo Química Genérico Gotas 20mlDipirona Sódica 500mg/ml Neo Química Genérico Gotas 20ml');
        //validar produto selecionado
    }
    adicionarProdutoCarrinho(){
        cy.get(el.btComprar).click();
        cy.get(el.txtCarrinho).should('have.text', 'Dipirona Sódica 500mg/ml Neo Química Genérico Gotas 20ml');
        //validar produto no carrinho
    }
    FinalizarCompra(){
        cy.get(el.btFinalizarCompra).click();
        cy.get(el.txtProdutoCarrinho).should('have.text', 'Dipirona Sódica 500mg/ml Neo Química Genérico Gotas 20ml');
        cy.get(el.txtValorSubTotal).contains('R$ 4,99');
        //validar produto e valor
    }
    inserirCEP(){
        cy.get(el.tfCEP).type('31515002');
        cy.get(el.txtValorEntrega).contains('R$ 6,56');
        //validar valor entrega
    }
    validarValorTotal(){
        cy.get(el.txtValorTotal).contains('R$ 11,55');
    }
}
export default new araujo();