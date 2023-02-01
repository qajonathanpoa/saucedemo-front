import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CheckoutPage from "../../pages/checkout-page";
const checkoutPage = new CheckoutPage()

When(/^devo ser obrigado a preencher os campos obrigatorios (.*)$/, (campo_obrigatorio) => {
	checkoutPage.retornarLabelCamposObrigatorios(campo_obrigatorio)
});


When(/^clico sobre o botao continue$/, () => {
	checkoutPage.clicarBotaoContinue();
});


When(/^que acesso a pagina de checkout$/, () => {
	checkoutPage.acessarPaginaCheckout();
});

When(/^preencho o ultimo nome (.*)$/, (ultimo_nome) => {
	checkoutPage.preencherLastName(ultimo_nome);
});


When(/^preencho o primeiro nome (.*)$/, (primeiro_nome) => {
	checkoutPage.preencherFirstName(primeiro_nome)
});


When(/^prencho o codigo postal (.*)$/, (cep) => {
    checkoutPage.preencherCep(cep)
});

When(/^sou direcionado para a pagina de checkout passo dois (.*)$/, (validacao_label) => {
	checkoutPage.retornarLabelCheckoutOverviewStepTwo(validacao_label)
});


When(/^clico sobre o botao finish$/, () => {
	checkoutPage.clicarBotaoFinish();
});

When(/^sou redirecionado para a pagina de compra finalizada (.*)$/, (validacao_label_finish) => {
	checkoutPage.retornarElementosCompraFinalizada(validacao_label_finish)
});







