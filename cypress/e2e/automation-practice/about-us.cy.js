//Arquivo .cy e não .spec depois da atualização

//Para carregar a sintaxe do Cypress
/// <reference types="cypress" />

//Suite dos testes
describe('Tela About Us', ()=> {

    //Executar uma vez no começo dos testes
    before(()=>{
        cy.log('Fui executado uma vez')
    })

    //Contexto a ser executado antes de cada cenário de teste
    beforeEach(()=> {
        cy.log('Fui executado antes de cada teste')
        cy.visit('http://automationpractice.com/index.php ')
    })

    //Cenário de teste 1
    it('Acessar about us', ()=>{
        cy.get('a[title="About us"').click()
        cy.get('h1.page-heading').should('have.text', 'About us')
    })

})