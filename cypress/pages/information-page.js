class InformationPage {
    inputFirstName = '[data-test=firstName]'
    inputLastName = '[data-test=lastName]'
    inputPostalCode = '[data-test=postalCode]'
    btnContinue = '[data-test=continue]'

    preencherFirstName(firstName) {
        cy.get(this.inputFirstName).type(firstName)
    }

    preencherLastName(lastName) {
        cy.get(this.inputLastName).type(lastName)
    }

    preencherPostalCode(postalCode) {
        cy.get(this.inputPostalCode).type(postalCode)
    }

    acessarOverview() {
        cy.get(this.btnContinue).click()
    }
}

export default InformationPage