/// <reference types="Cypress"/>

import CheckoutElements from "../support/elements/CheckoutElements";
const url = Cypress.config("baseUrl")
const checkoutElements = new CheckoutElements()

class CheckoutPage{

    acessarPaginaCheckout(){
        cy.visit({
            url: url + "checkout-step-one.html",
            method: 'GET',
            failOnStatusCode: false
        })

    }

    preencherFirstName(primeiro_nome){
        cy.get(checkoutElements.firstNameCampo()).type(primeiro_nome)
    }
    preencherLastName(ultimo_nome){
        cy.get(checkoutElements.lastNameCampo()).type(ultimo_nome)

    }
    preencherCep(cep){
        cy.get(checkoutElements.zipCodeCampo()).type(cep)
    }
    retornarLabelCamposObrigatorios(campo_obrigatorio){
        cy.get(checkoutElements.lblCamposObrigatorios()).should("contain.text", campo_obrigatorio)
    }

    retornarLabelCheckoutOverviewStepTwo(validacao_label){
    cy.get(checkoutElements.lblOverviewCheckoutStepTwo()).should("contain.text", validacao_label)
    
}
retornarElementosCompraFinalizada(validacao_label_finish){
    cy.get(checkoutElements.finishPageElements()).should("contain.text", validacao_label_finish)
}
    clicarBotaoContinue(){
        cy.get(checkoutElements.btnContinue()).click()
    }
    clicarBotaoFinish(){
        cy.get(checkoutElements.btnFinish()).click()
    }


}

export default CheckoutPage;