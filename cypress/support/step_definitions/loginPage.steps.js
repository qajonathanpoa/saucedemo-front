import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


import LoginPage from "../../pages/login-page";

const loginPage = new LoginPage()

Given(/^que acesso a home saucedemo como usuario logado$/, () => {
	
	cy.sessionStandardUser();
});


When(/^informo usuario e senha (.*)$/,(password) => {
	cy.sessionLogin(password)
});


When(/^informo o usuário (.*)$/, (username) => {
	cy.sessionLogin(username)
});


// When(/^eu clico sobre o botao login$/, () => {
// 	loginPage.clicarBotaoLogin();
// });


When(/^preencho o campo e senha com dados de um usuario bloqueado$/, () => {
	loginPage.preencherPassword()
});



Then(/^vejo a mensagem (.*)$/, (resultado) => {
	
	loginPage.validaMensagemCamposObrigatorios(resultado)
	
});








