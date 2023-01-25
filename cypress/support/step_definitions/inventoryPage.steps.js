import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../pages/inventory-page";

const inventoryPage = new InventoryPage()


Given(/^que acesso a pagina de produtos da saucedemo$/, () => {
    inventoryPage.acessarInventory();
});


When(/^observo a mensagem (.*)$/, (resultado) => {
    inventoryPage.validarMensagemInventory(resultado)
});


Then(/^vejo a pagina de produtos (.*)$/, (resultado) => {
    inventoryPage.validarPaginaInventory(resultado)

});


When(/^eu clico sobre o botao logout$/, () => {
    inventoryPage.clicarHamburgerLogout();
    inventoryPage.clicarBotaoLogout();

});

When(/^vejo a pagina de login (.*)$/, (resultado) => {
    inventoryPage.validarDirecionarPaginaLogin(resultado)
        
});


Then(/^tento acessar a página de produtos apos efetuar logout (.*)$/, (resultado) => {
	inventoryPage.acessoInventoryPageAposLogout(resultado);
});








