/// <reference types = "cypress"/>

describe('Authorization and Verification', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    // ввод неверных учетных данных должно появляться сообщение об ошибке.
    it('should display error message for invalid login', () => {
        cy.get('[data-cy=username]').type('invalid_username')
        cy.get('[data-cy=password]').type('invalid_password')
        cy.get('[data-cy=login-button]').click()
        cy.get('[data-cy=error-message]').should('be.visible')
    })
    // вводе верных учетных данных должен происходить успешный вход в систему.

    it('should login successfully with valid credentials', () => {
        cy.get('[data-cy=username]').type('valid_username')
        cy.get('[data-cy=password]').type('valid_password')
        cy.get('[data-cy=login-button]').click()
        cy.url().should('include', '/dashboard')
    })

    // вводе неверного кода верификации должно появляться сообщение об ошибке.
    it('should display error messagefor invalid verification code', () => {
        cy.get('[data-cy=username]').type('valid_username')
        cy.get('[data-cy=password]').type('valid_password')
        cy.get('[data-cy=login-button]').click()
        cy.get('[data-cy=verification-code]').type('invalid_code')
        cy.get('[data-cy=verify-button]').click()
        cy.get('[data-cy=error-message]').should('be.visible')
    })

    // ввод верного кода верификации должна происходить успешная верификация и переход на страницу Dashboard.
    it('should verify successfully with valid code', () => {
        cy.get('[data-cy=username]').type('valid_username')
        cy.get('[data-cy=password]').type('valid_password')
        cy.get('[data-cy=login-button]').click()
        cy.get('[data-cy=verification-code]').type('valid_code')
        cy.get('[data-cy=verify-button]').click()
        cy.url().should('include', '/dashboard')
    })
})
