/// <reference types="cypress"/>

describe('first test', () => {
    it('verify link1', () => {
        cy.visit('https://example.cypress.io/')
        cy.contains('next').click()
        cy.url().should('include', '/commands/traversal')
        // cy.get('div.container h1').should('have text', 'Traversal')
    })

    it('verify link2', () => {
        cy.visit('https://example.cypress.io/')
        cy.contains('assert').click()
        // cy.url().should('include', '/commands/assertions')
        
    }) 
// выдаст ошибку при поиске через, (cy.cintains) так как в тексте много значений. Лучше делать поиск по (cy.get..и поиск локатора через devtools) 


    it('verify link3', () => {
        cy.visit('https://example.cypress.io/')
        cy.get('a[href="/commands/actions"]').contains('select').click()
        cy.url().should('include', '/commands/actions')
        
    })
})

