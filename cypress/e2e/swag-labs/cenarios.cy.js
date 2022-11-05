/// <reference types="cypress" />
import LoginPage from '../../pages/login-page'
import ProductsPage from '../../pages/products-page'
import CartPage from '../../pages/cart-page'
import InformationPage from '../../pages/information-page'

describe('Swag Labs', () => {
    const loginPage = new LoginPage()
    const productsPage = new ProductsPage()
    const cartPage = new CartPage()
    const informationPage = new InformationPage()

    context('Usuário Logado', () => {
        beforeEach(() => {
            loginPage.acessar()
            loginPage.login('standard_user', 'secret_sauce')
        })

        it('Deve finalizar uma compra com sucesso', () => {
            productsPage.adicionarFleece()
            productsPage.acessarCarrinho()
            cartPage.fazerCheckout()
            informationPage.preencherFirstName('vrau')
            informationPage.preencherLastName('vrau')
            informationPage.preencherPostalCode('0012331')
            informationPage.acessarOverview()
        })
    })

    context('Usuário não logado', () => {
        beforeEach(() => {
            loginPage.acessar()
        })

        it('Deve acessar o swaglabs com sucesso', () => {
            cy.url().should('contains', 'saucedemo')
        })

        it('Deve exibir mensagem ao logar sem informar usuário', () => {
            cy.get('[data-test="login-button"]').click()
            cy.get('form h3').should('have.text', 'Epic sadface: Username is required')
        })

        it('Deve exibir mensagem ao logar sem informar senh', () => {
            loginPage.login('standard_user', '{backspace}')
            cy.get('[data-test="login-button"]').click()
            cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')
        })

        it('Deve realizar login com sucesso', () => {
            // cy.get('[data-test="username"]').type('standard_user')
            // cy.get('[data-test="password"]').type('secret_sauce')
            // cy.get('[data-test="login-button"]').click()
            loginPage.login('standard_user', 'secret_sauce')
            cy.url().should('include', 'inventory.html')
            cy.get('.title').should('have.text', 'Products')
        })

        it('add jaqueta fleece no carrinho', () => {
            cy.get('#user-name').type('standard_user')
            cy.get('#password').type('secret_sauce')
            cy.get('#login-button').click()
            cy.url().should('include', 'inventory')
            cy.get('.title').should('have.text', 'Products')
            productsPage.adicionarFleece()
            //cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
            cy.get('.shopping_cart_link').click()
            cy.get('.cart_quantity').should('have.text', 1)
            cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Fleece Jacket')
        })
    })
})