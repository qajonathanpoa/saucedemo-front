/// <reference types="Cypress"/>
import LoginElements from "../support/elements/LoginElements"
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {


    //Acessar site que será testado
    acessarSite() {
        cy.visit(url)
    }
   
   
    //Digitar campo Username
    preencherUserName(username) {
        if (username) {
            cy.get(loginElements.usrNameCampo()).type(username)
        }
    }
    //Digitar campo Password
    preencherPassword(password) {
        cy.get(loginElements.pasWordCampo()).type(password)

    }
    //Clicar botao login
    clicarBotaoLogin() {

        cy.get(loginElements.buttonLogin()).click()
    }
    //Valdar mensagem dos campos quando nao preenchidos
    validaMensagemCamposObrigatorios(resultado) {
         cy.get(loginElements.lblUsuarioRequired()).should("contain", resultado)
    }
    


}
export default LoginPage;