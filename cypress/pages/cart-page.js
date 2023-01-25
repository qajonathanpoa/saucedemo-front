/// <reference types="Cypress"/>
import CartElements from "../support/elements/CartElements"

const cartElements = new CartElements()
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
    retornaCarrinhoVazio() {

        cy.get(cartElements.lblCarrinho).should("not.be.visible")
    }
        
    retornaQuantProdutosGridCart(){
        
        cy.get(cartElements.gridProdutosCart()).should("have.length", 1)
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
    removerItensCarrinho(quant_a_remover){

        let listaCarrinho = quant_a_remover

        switch (listaCarrinho) {
            case "1":
                cy.get(cartElements.btnRemoverCartMochila(quant_a_remover)).click()
                cy.get(cartElements.lblCarrinho()).should("have.text", 1)
            break;
        }
    }
    clicarCarrinho() {
        cy.get(cartElements.linkCarrinho()).click()

    }


}

export default CartPage;