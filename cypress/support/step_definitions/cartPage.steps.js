import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "../../pages/cart-page";
const cartPage = new CartPage()

When(/^seleciono um ou mais de um produto para o meu carrinho (.*)$/, (quant_produtos) => {
    
	cartPage.adicionarItensCarrinho(quant_produtos)
});

When(/^eu clico sobre o carrinho$/, () => {
	cartPage.clicarCarrinho();
});



When(/^vou escolher quais produtos vou remover (.*)$/, (quant_a_remover) => {
	cartPage.removerItensCarrinho(quant_a_remover);
});



When(/^vejo a grid de produtos na mesma quantidade dos produtos selecionados (.*)$/, (quant_produtos) => {
	cartPage.retornaQuantProdutosGridCart(quant_produtos)
});





When(/^deve exibir a pagina com o valor de carrinho vazio$/, () => {
	cartPage.retornaCarrinhoVazio();
});
