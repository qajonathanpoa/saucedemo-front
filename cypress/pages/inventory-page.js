/// <reference types="Cypress"/>

import InventoryElements from "../support/elements/InventoryElements";
const url = Cypress.config("baseUrl")
const inventoryElements = new InventoryElements

class InventoryPage {
    //Acessar pagina inventory
    acessarInventory() {

        cy.visit({
            url: url + "inventory-item.html",
            method: 'GET',
            failOnStatusCode: false
        })
    }

    validarMensagemInventory(resultado) {
        cy.get(inventoryElements.lblInventory())
            .should('contain', resultado)
    }
    validarPaginaInventory(resultado) {
        cy.get(inventoryElements.titleProducts())
            .should("have.text", resultado)
        cy.get(inventoryElements.listaProductsInventory())
            .should("not.be.empty")
    }
    clicarHamburgerLogout() {
        cy.get(inventoryElements.hamburgerLogout()).click({ force: true })
    }
    clicarBotaoLogout() {
        cy.get(inventoryElements.logoutButton()).click({ force: true })

    }
    validarDirecionarPaginaLogin(resultado) {
        cy.get(inventoryElements.credentialsLoginPage())
            .should("contain", resultado)
    }
    acessoInventoryPageAposLogout(resultado) {
        cy.visit({
            url: url + "inventory-item.html",
            method: 'GET',
            failOnStatusCode: false

        })
        cy.get(inventoryElements.lblInventory(resultado))
            .should("contain", resultado)

    }
    clicarCarrinho() {
        cy.get(inventoryElements.linkCarrinho()).click()

    }
    retornarQuantidadeItensCarrinho() {
        let quantCarrinho = cy.get(inventoryElements.lblCarrinho())
        console.log(quantCarrinho);
        if (quantCarrinho == 0) {
            
            quantCarrinho.should("not.exist")
           
            
        }
        else if(quantCarrinho >= 0) {
            
            quantCarrinho.should("have.value", 1)
            
        }
    }
    adicionarItensCarrinho(produto) {

        let listaProdutos = produto

        switch (listaProdutos) {
            case "Sauce Labs Backpack":
                cy.get(inventoryElements.btnCartMochila(produto)).click()
                break;
            case "Sauce Labs Bike Light":
                cy.get(inventoryElements.btnCartSauceBike(produto)).click()
                break;

            default:
                console.log("Desculpe, estamos sem nenhum produto selecionado " + listaProdutos + ".");
                break;
        }
    }
}


export default InventoryPage