/// <reference types ="cypress"/>

describe('comon methods', () => {
    it('verify', () => {
        cy.visit('https://demoqa.com/')
        cy.get('div.category-cards .card-body').find('h5').should('have.length', 6)
        cy.title().should('eq', 'DEMOQA')
        cy.get('div.avatar').should('have.css', 'color', 'rgb(1. 160. 224)')
        cy.get('div.card-body h5').contains('Element').click()
        cy.get('div.main-header').should('contain', 'Elements')
    })

})
