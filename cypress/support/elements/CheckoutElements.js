class CheckoutElements{
    titleCheckout = () => {return ".title"}
    lblCamposObrigatorios = () =>{return "[data-test='error']"}
    lblOverviewCheckoutStepTwo = () =>{return "span[class='title']"}
    firstNameCampo = () => {return "[data-test='firstName']"}
    lastNameCampo = () => {return "[data-test='lastName']"}
    zipCodeCampo = () => {return "[data-test='postalCode']"}
    finishPageElements = () => {return "div[id='checkout_complete_container']"}
    btnContinue = () => {return "[data-test='continue']"}
    btnFinish = () => {return "[data-test='finish']"}

}

export default CheckoutElements;