describe('Автотесты для формы логина и пароля', function () {

  beforeEach('Зайти на страницу авторизации', function () {
    cy.visit('https://login.qa.studio');
      });

    it('Позитивный кейс авторизации', function () {
          cy.get('#mail').type('german@dolnikov.ru');
          cy.get('#pass').type('iLoveqastudio1');
          cy.get('#loginButton').click();
          cy.get('#messageHeader').contains('Авторизация прошла успешно');
          cy.get('#messageHeader').should('be.visible');
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');

     });
           
     it('Логика восстановления пароля', function () {
          cy.get('#forgotEmailButton').click();
          cy.get('#mailForgot').type('hermes@mail.ru');
          cy.get('#restoreEmailButton').click();
          cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');
          
     })            
 
     it('Негативный кейс авторизации (неверный пароль)', function () {
          cy.get('#mail').type('german@dolnikov.ru');
          cy.get('#pass').type('cosmostars415@#');
          cy.get('#loginButton').click();
          cy.get('#messageHeader').should('be.visible');
          cy.get('#messageHeader').contains('Такого логина или пароля нет');
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');
 
     })

     it('Негативный кейс авторизации (неверный логин)', function () {
          cy.get('#mail').type('hermes@mail.ru');
          cy.get('#pass').type('iLoveqastudio1');
          cy.get('#loginButton').click();
          cy.get('#messageHeader').should('be.visible');
          cy.get('#messageHeader').contains('Такого логина или пароля нет');
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');

     })

     it('Негативный кейс валидации (без символа @)', function () {
          cy.get('#mail').type('germandolnikov.ru');
          cy.get('#pass').type('iLoveqastudio');
          cy.get('#loginButton').click();
          cy.get('#messageHeader').should('be.visible');
          cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');
 
     })

     it('Приведение к строчным буквам в логине', function () {
          cy.get('#mail').type('GerMan@Dolnikov.ru');
          cy.get('#pass').type('iLoveqastudio1');
          cy.get('#loginButton').click();
          cy.get('#messageHeader').contains('Авторизация прошла успешно');
          cy.get('#messageHeader').should('be.visible');
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');

     })
 

 })