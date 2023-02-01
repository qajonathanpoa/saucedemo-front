/// <reference types="Cypress"/>


import InventoryElements from "../support/elements/InventoryElements";
const url = Cypress.config("baseUrl")
const inventoryElements = new InventoryElements()

class InventoryPage {
    //Acessar pagina inventory
    acessarInventory() {

        cy.visit({
            url: url + "inventory.html",
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
            url: url + "inventory.html",
            method: 'GET',
            failOnStatusCode: false

        })
        

    }
    
    
}


export default InventoryPage