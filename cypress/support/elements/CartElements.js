class CartElements{

    linkCarrinho = () => { return "a[class=shopping_cart_link]" }
    lblCarrinho = () => { return "span[class=shopping_cart_badge]" }
    gridProdutosCart = () => {return "div[class=cart_item]"}
    btnCartMochila = () => { return "button[data-test='add-to-cart-sauce-labs-backpack']" }
    btnRemoverCartMochila = () => {return "[data-test='remove-sauce-labs-backpack']"}
    btnCartSauceBike = () => { return "button[data-test='add-to-cart-sauce-labs-bike-light']" }
    btnSauceTshirt =() => {return "[data-test='add-to-cart-sauce-labs-bolt-t-shirt']"}
    btnSauceJacket = () => {return "[data-test='add-to-cart-sauce-labs-fleece-jacket'"}
    btnOnesie = () => {return "[data-test='add-to-cart-sauce-labs-onesie'"}
    btnTshirtRed = () => {return "[data-test='add-to-cart-test.allthethings()-t-shirt-(red)']"}
    btnContinueShopping = () => {return "[data-test='continue-shopping']"}
    
}

export default CartElements;