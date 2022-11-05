class ProductsPage {
    btnAddToCartFleece = '[data-test=add-to-cart-sauce-labs-fleece-jacket]'
    btnRemoveFromCart = '[data-test=remove-sauce-labs-fleece-jacket]'
    linkCart = '.shopping_cart_link'

    adicionarFleece(){
        cy.get(this.btnAddToCartFleece).click()
    }

    removerFleece(){
        cy.get(this.btnRemoveFromCart).click()
    }

    acessarCarrinho() {
        cy.get(this.linkCart).click()
    }
}

export default ProductsPage