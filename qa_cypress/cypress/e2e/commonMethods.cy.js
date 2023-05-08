/// <reference types ="cypress"/>

describe('comon methods', () => {
    it('verify', () => {
        cy.visit('https://demoqa.com/')
        cy.get('div.category-cards .card-body').find('h5').should('have.length', 6)
        cy.title().should('eq', 'DEMOQA')
    })

})
