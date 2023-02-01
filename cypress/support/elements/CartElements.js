class CartElements{

    linkCarrinho = () => { return "a[class=shopping_cart_link]" }
    lblCarrinho = () => { return "span[class=shopping_cart_badge]" }
    gridProdutosCart = () => {return "div[class=cart_item]"}
    btnCheckout = () => {return "button[data-test='checkout']"}
    btnCartMochila = () => { return "button[data-test='add-to-cart-sauce-labs-backpack']" }
    btnRemoverCartMochila = () => {return "[data-test='remove-sauce-labs-backpack']"}
    btnRemoverSauceLabLight = () => {return "[data-test='remove-sauce-labs-bike-light'"}
    btnRemoverBoltTshirt = () => {return "[data-test='remove-sauce-labs-bolt-t-shirt'"}
    btnRemoverFleecJacket = () => {return "[data-test='remove-sauce-labs-fleece-jacket'"}
    btnRemoverOnesie = () =>{return "[data-test='remove-sauce-labs-onesie'"}
    btnRemoverTshirtRed = () => {return "[data-test='remove-test.allthethings()-t-shirt-(red)'"}
    btnCartSauceBike = () => { return "button[data-test='add-to-cart-sauce-labs-bike-light']" }
    btnSauceTshirt =() => {return "[data-test='add-to-cart-sauce-labs-bolt-t-shirt']"}
    btnSauceJacket = () => {return "[data-test='add-to-cart-sauce-labs-fleece-jacket'"}
    btnOnesie = () => {return "[data-test='add-to-cart-sauce-labs-onesie'"}
    btnTshirtRed = () => {return "[data-test='add-to-cart-test.allthethings()-t-shirt-(red)']"}
    btnContinueShopping = () => {return "[data-test='continue-shopping']"}
    
}

export default CartElements;