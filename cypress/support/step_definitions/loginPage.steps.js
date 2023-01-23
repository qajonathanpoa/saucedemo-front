import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


import LoginPage from "../../pages/login-page";

const loginPage = new LoginPage()

Given(/^que acesso a home saucedemo$/, () => {
	loginPage.acessarSite();
});


When(/^informo a senha (.*)$/,(password) => {
	loginPage.preencherPassword(password)
});

Given("informo a senha ", function () {
	return "pending";
	});

When(/^informo o usuário (.*)$/, (username) => {
	loginPage.preencherUserName(username)
});


When(/^eu clico sobre o botao login$/, () => {
	loginPage.clicarBotaoLogin();
});


When(/^preencho o campo e senha com dados de um usuario bloqueado$/, () => {
	loginPage.preencherPassword()
});



Then(/^vejo a mensagem (.*)$/, (resultado) => {
	
	loginPage.validaMensagemCamposObrigatorios(resultado)
	
});








