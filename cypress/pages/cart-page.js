class CartPage {
    btnCheckout = '[data-test=checkout]'

    fazerCheckout() {
        cy.get(this.btnCheckout).click()
    }
}

export default CartPage