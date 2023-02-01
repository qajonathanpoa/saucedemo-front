/// <reference types="Cypress"/>
import CartElements from "../support/elements/CartElements"
import CheckoutElements from "../support/elements/CheckoutElements";

const cartElements = new CartElements()
const checkoutElements = new CheckoutElements()
const url = Cypress.config("baseUrl")

class CartPage {

    //Acessar pagina carrinho
    acessarCartPage() {

        cy.visit({
            url: url + "cart",
            method: 'GET',
            failOnStatusCode: false
        })
    }
    clicarBotaoCheckout (){
        cy.get(cartElements.btnCheckout()).click();
    }
    validarTitlePaginadeCheckout(resultado_checkout){
        cy.get(checkoutElements.titleCheckout()).should("have.text", resultado_checkout)
    }
    retornaCarrinhoVazio() {

        cy.get(cartElements.lblCarrinho).should("not.be.visible")
    }
    retornaCarrinhoAtualizado(carrinho_atualizado) {

        let retornoCarrinho = carrinho_atualizado

        if (retornoCarrinho == 0) {
            cy.get(cartElements.lblCarrinho).should("not.be.visible")

        } else {
            cy.get(cartElements.lblCarrinho()).should("have.text", carrinho_atualizado)
        }
    }

    retornaQuantProdutosGridCart(carrinho_atualizado) {

        cy.get(cartElements.gridProdutosCart()).should("have.length", carrinho_atualizado)
    }
    adicionarItensCarrinho(quant_produtos) {

        let listaProdutos = quant_produtos

        switch (listaProdutos) {
            case "1":
                cy.get(cartElements.btnCartMochila(quant_produtos)).click()
                break;
            case "2":
                cy.get(cartElements.btnCartMochila(quant_produtos)).click()
                cy.get(cartElements.btnCartSauceBike(quant_produtos)).click()
                break;

            case "3":
                cy.get(cartElements.btnCartMochila(quant_produtos)).click()
                cy.get(cartElements.btnCartSauceBike(quant_produtos)).click()
                cy.get(cartElements.btnOnesie(quant_produtos)).click()
                break;
            case "4":
                cy.get(cartElements.btnCartMochila(quant_produtos)).click()
                cy.get(cartElements.btnCartSauceBike(quant_produtos)).click()
                cy.get(cartElements.btnOnesie(quant_produtos)).click()
                cy.get(cartElements.btnTshirtRed(quant_produtos)).click()
                break;
            case "5":
                cy.get(cartElements.btnCartMochila(quant_produtos)).click()
                cy.get(cartElements.btnCartSauceBike(quant_produtos)).click()
                cy.get(cartElements.btnOnesie(quant_produtos)).click()
                cy.get(cartElements.btnTshirtRed(quant_produtos)).click()
                cy.get(cartElements.btnSauceJacket(quant_produtos)).click()

                break;
            case "6":
                cy.get(cartElements.btnCartMochila(quant_produtos)).click()
                cy.get(cartElements.btnCartSauceBike(quant_produtos)).click()
                cy.get(cartElements.btnOnesie(quant_produtos)).click()
                cy.get(cartElements.btnTshirtRed(quant_produtos)).click()
                cy.get(cartElements.btnSauceJacket(quant_produtos)).click()
                cy.get(cartElements.btnSauceTshirt(quant_produtos)).click()

                break;

            default:
                console.log("Desculpe, estamos sem nenhum produto selecionado " + listaProdutos + ".");
                break;
        }
    }
    removerItensCarrinho(quant_a_remover) {

        let listaCarrinho = quant_a_remover

        switch (listaCarrinho) {
            case "1":
                cy.get(cartElements.btnRemoverCartMochila(quant_a_remover)).click()

                break;

            case "2":
                cy.get(cartElements.btnRemoverCartMochila(quant_a_remover)).click()
                cy.get(cartElements.btnRemoverSauceLabLight(quant_a_remover)).click()
                break;
            case "3":
                cy.get(cartElements.btnRemoverCartMochila(quant_a_remover)).click()
                cy.get(cartElements.btnRemoverSauceLabLight(quant_a_remover)).click()
                cy.get(cartElements.btnRemoverOnesie(quant_a_remover)).click()
                break;
            case "4":
                cy.get(cartElements.btnRemoverCartMochila(quant_a_remover)).click()
                cy.get(cartElements.btnRemoverSauceLabLight(quant_a_remover)).click()
                cy.get(cartElements.btnRemoverOnesie(quant_a_remover)).click()
                cy.get(cartElements.btnRemoverTshirtRed(quant_a_remover)).click()
                break;
            case "5":
                cy.get(cartElements.btnRemoverCartMochila(quant_a_remover)).click()
                cy.get(cartElements.btnRemoverSauceLabLight(quant_a_remover)).click()
                cy.get(cartElements.btnRemoverOnesie(quant_a_remover)).click()
                cy.get(cartElements.btnRemoverTshirtRed(quant_a_remover)).click()
                cy.get(cartElements.btnRemoverFleecJacket(quant_a_remover)).click()
                break;
            case "6":
                cy.get(cartElements.btnRemoverCartMochila(quant_a_remover)).click()
                cy.get(cartElements.btnRemoverSauceLabLight(quant_a_remover)).click()
                cy.get(cartElements.btnRemoverOnesie(quant_a_remover)).click()
                cy.get(cartElements.btnRemoverTshirtRed(quant_a_remover)).click()
                cy.get(cartElements.btnRemoverFleecJacket(quant_a_remover)).click()
                cy.get(cartElements.btnRemoverBoltTshirt(quant_a_remover)).click()

                break;
        }
    }

    clicarCarrinho() {
        cy.get(cartElements.linkCarrinho()).click()

    }


}

export default CartPage;