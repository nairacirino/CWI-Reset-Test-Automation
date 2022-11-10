/// <reference types="cypress" /> 

describe('Tela Contact Us', () => { 
    
    beforeEach(() => { cy.visit('http://automationpractice.com/index.php?controller=contact') }) 
    
    it('Teste email valido', () => { 
        cy.get('#id_contact').select(2) 
        cy.get('#email').type('email@email.com') 
        cy.get('#message').type('message') 
        cy.get('#submitMessage').click() 
        cy.get('.alert-success').should('have.text', 'Your message has been successfully sent to our team.') 
    }) 
    
    it('Teste email invalido', () => { 
        cy.get('#id_contact').select(2) 
        cy.get('#email').type('email-com') 
        cy.get('#message').type('message') 
        cy.get('#submitMessage').click() 
        cy.get('.alert-danger li').should('have.text', 'Invalid email address.') 
    }) 
}) 

