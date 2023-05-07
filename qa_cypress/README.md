# Cypress

### Для автоматизации тестирования UI с помощью Cypress на JavaScript необходимо выполнить следующие шаги:

1. Установить Cypress:

`npm install cypress --save-dev` or `npm install -D`


2. Создать файл cypress.json в корневой директории проекта и добавить в него следующий код:

`{
  "baseUrl": "http://localhost:3000",
  "viewportWidth": 1280,
  "viewportHeight": 720
}`


3. Создать файл cypress/integration/ui.spec.js и добавить в него следующий код:

`describe('UI tests', () => {`
  `beforeEach(() => {`
    `cy.visit('/')`
  `})`

  `it('should display the correct title', () => {
    cy.get('h1').should('have.text', 'My App')
  })`

  `it('should navigateto the correct page when clicking a link', () => {
    cy.get('a[href="/about"]').click()
    cy.url().should('include', '/about')
  })`

  `it('should display an error message when submitting an invalid form', () => {
    cy.get('input[name="email"]').type('invalidemail')
    cy.get('button[type="submit"]').click()
    cy.get('.error-message').should('be.visible')
  })
})`


4. Запустить тесты с помощью команды:

`npx cypress run`


или открыть интерфейс Cypress с помощью команды:

`npx cypress open`


и запустить тесты в интерактивном режиме.

### Список основных запросов (commands) в Cypress

1. Установка Cypress:

`npm install cypress --save-dev` or `npm install cypress -D`


2. Запуск Cypress:

`npx cypress open` если есть тесты и запуск не в первый раз то запуск команты `npx cypress run`


3. Написание теста:

`describe('Название теста', () => {
  it('Описание теста', () => {
    // Код теста
  })
})`


4. Поиск элементов на странице:

`cy.get('селектор')`


5. Ввод текста в поле ввода:

`cy.get('селектор').type('текст')`


6. Клик по элементу:

`cy.get('селектор').click()`


7. Проверка значения элемента:

`cy.get('селектор').should('have.value', 'ожидаемое значение')`


8. Проверка видимости элемента:

`cy.get('селектор').should('be.visible')`


9. Проверка наличия элемента:

`cy.get('селектор').should('exist')`


10. Проверка текста элемента:

`cy.get('селектор').should('have.text', 'ожидаемый текст')`


11. Переход на другую страницу:

`cy.visit('URL')`


12. Ожидание элемента на странице:

`cy.get('селектор', { timeout: 10000 }).should('exist')`


13. Ожидание заданного времени:

`cy.wait(5000)`


14. Использование переменных:

`const переменная = 'значение'
cy.get('селектор').type(переменная)`


---

## Для отображения подсказок написания кода в VScode
### Пишем (копируем) скрипт в поле написания кода в самом начале.   

- `///<reference types="cypress"/>`

## Вот список основных запросов (commands) в Cypress с примерами:

1. cy.visit() - переход на страницу
- `cy.visit('https://www.google.com')`


2. cy.get() - поиск элемента на странице
- `cy.get('.my-class')`
- `cy.get('#my-id')`
- `cy.get('[data-cy=my-data-cy]')`


3. cy.contains() - поиск элемента по тексту
- `cy.contains('Submit')`


4. cy.click() - клик на элементе
- `cy.get('.my-button').click()`


5. cy.type() - ввод текста в элемент
- `cy.get('#username').type('myusername')`


6. cy.clear() - очистка поля ввода
- `cy.get('#username').clear()`


7. cy.check() - выбор чекбокса или радиокнопки
- `cy.get('#checkbox').check()`


8. cy.uncheck() - снятие выбора с чекбокса
- `cy.get('#checkbox').uncheck()`


9. cy.select() - выбор опции из выпадающего списка
- `cy.get('#my-select').select('Option 1')`


10. cy.wait() - ожидание
- `cy.wait(1000)` // ожидание 1 секунду


11. cy.should() - проверка условия
- `cy.get('.my-class').should('have.class', 'active')`


12. cy.intercept() - перехват запросов
- `cy.intercept('GET', '/api/users').as('getUsers')`
- `cy.get('.my-button').click()`
- `cy.wait('@getUsers')`


13. cy.route() - мокирование запросов
- `cy.route('GET', '/api/users', [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}])`


14. cy.exec() - выполнение команд внутри Node.js
- `cy.exec('npm run build')`


15. cy.wrap() - обертка объекта для цепочки команд
- `cy.wrap({ name: 'John' }).should('have.property', 'name', 'John')`

### 

1. Запрос на открытие страницы:

`cy.visit('https://www.example.com')`


2. Запрос на поиск элемента на странице:

`cy.get('#element-id')`


3. Запрос на ввод текста в поле ввода:

`cy.get('#input-field').type('Текст для ввода')`


4. Запрос на клик по элементу:

`cy.get('#button-id').click()`


5. Запрос на проверку видимости элемента:

`cy.get('#element-id').should('be.visible')`


6. Запрос на проверку содержимого элемента:

`cy.get('#element-id').should('have.text', 'Ожидаемый текст')`


7. Запрос на проверку атрибута элемента:

`cy.get('#element-id').should('have.attr', 'attribute-name', 'Ожидаемое значение')`


8. Запрос на проверку URL страницы:

`cy.url().should('include', 'ожидаемый-URL')`


9. Запрос на проверку наличия элемента на странице:

`cy.contains('Текст элемента').should('exist')`


10. Запрос на проверку отсутствия элемента на странице:

`cy.contains('Текст элемента').should('not.exist')`
