/// <reference types = "cypress"/> 


describe('First test DemoQA', () => {
    //создаем массив для поиска элементов
    const expectedMenuItemNames = [
        'Elements',
        'Forms',
        'Alerts, Frame & Windows',
        'Widgets',
        'Interactions',
        'Book Store Application'];

    it('Verification menu item names', () => {
        //открытие сайта
        cy.visit('https://demoqa.com'); //в cypress.config.js прописали название сайта. в тесте можно заменить на /
        //тест, поиск элементов, проверка соответствия кол-во элементов.
        cy.get('.card').should('have.length', expectedMenuItemNames.length).each(($el, idx) => {
            //проверка фактического и ожидаемого результата
            expect($el.text()).to.be.equal(expectedMenuItemNames[idx]);

        });
    })
    // второй способ теста с .should, .each
    it('Verification menu item names part 2', () => {
        cy.visit('https://demoqa.com')
        cy.get('.card')
            .should('have.length', expectedMenuItemNames.length)
            .each((el, idx) => {
                cy.log(el)
                expect(el.text()).to.be.equal(expectedMenuItemNames[idx])
            })
    })

    //третий способ теста (через промис)
    it('Verification menu item names part 3', () => {
        cy.visit('https://demoqa.com')
        cy.get('.card')
            .should('have.length', expectedMenuItemNames.length)
            .then(($els) => {
                return Cypress.$.makeArray($els).map($el => $el.innerText)
            })
            .should('deep.equal', expectedMenuItemNames)
    })
    // форма регистрации
    // it.only (.only перед it означает, что будет выполняться только этот тест)

    it('Form filling', () => {
        cy.visit('https://demoqa.com')
        cy.get('.card:nth-child(2)').click()
        cy.get('.element-group:nth-child(2)>div').click()
        cy.get('#firstName')
            .should('have.text', '')
            .type('Ivan')
            .should('have.value', 'Ivan')
        cy.get('#submit').click()
        cy.get('#firstName').should('have.css', 'border-color', 'rgb(40, 167, 69)')

    })
})



