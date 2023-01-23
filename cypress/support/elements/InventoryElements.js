class InventoryElements {
    lblInventory = () => { return "[data-test='error']" }
    titleProducts = () => { return "span[class='title']" }
    listaProductsInventory = () => { return "div[class='inventory_item']" }
    hamburgerLogout = () => { return "#react-burger-menu-btn" }
    logoutButton = () => { return "#logout_sidebar_link" }
    credentialsLoginPage = () => { return "div[id='login_credentials'/*h4]" }
    linkCarrinho = () => { return "a[class=shopping_cart_link]" }
    lblCarrinho = () => { return "span[class=shopping_cart_badge]" }
    btnCartMochila = () => { return "button[data-test='add-to-cart-sauce-labs-backpack']" }
    btnCartSauceBike = () => { return "button[data-test='add-to-cart-sauce-labs-bike-light']" }
}

export default InventoryElements;