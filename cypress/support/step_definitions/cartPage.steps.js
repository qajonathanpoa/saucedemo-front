import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "../../pages/cart-page";
const cartPage = new CartPage()

When(/^seleciono um ou mais de um produto para o meu carrinho (.*)$/, (quant_produtos) => {
    
	cartPage.adicionarItensCarrinho(quant_produtos)
});

When(/^eu clico sobre o carrinho$/, () => {
	cartPage.clicarCarrinho();
});



When(/^vou escolher quais produtos remover (.*)$/, (quant_a_remover) => {
	cartPage.removerItensCarrinho(quant_a_remover);
});



When(/^vejo a grid de produtos na mesma quantidade do carrinho (.*)$/, (carrinho_atualizado) => {
	cartPage.retornaQuantProdutosGridCart(carrinho_atualizado)
});





When(/^deve exibir a pagina com o valor de carrinho vazio$/, () => {
	cartPage.retornaCarrinhoVazio();
});


When(/^deve exibir a página com a quantidade de itens no carrinho (.*)$/, (carrinho_atualizado) => {
	cartPage.retornaCarrinhoAtualizado(carrinho_atualizado)
});


When(/^clico sobre o botao de checkout$/, () => {
	cartPage.clicarBotaoCheckout();
});


When(/^sou direcionado para a pagina de checkout de produtos (.*)$/, (resultado_checkouto) => {
	cartPage.validarTitlePaginadeCheckout(resultado_checkouto);
});

