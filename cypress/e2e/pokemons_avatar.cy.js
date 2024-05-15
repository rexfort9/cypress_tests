describe('Покупка нового аватара', function () {  

    before('Зайти на страницу', function () {
        cy.visit('https://pokemonbattle.me/');
          });
    
    it('e2e тест на покупку нового аватара для тренера', function () {                            
         cy.get('input[type="email"]').type('LOG');      
         cy.get('input[type="password"]').type('PASS');    
         cy.get('button[type="submit"]').click();                        
         cy.get('.header__btns > [href="/shop"]').click();               
         cy.get('.available > button').first().click();                  
         cy.get('.credit').type('4620869113632996');                     
         cy.get('.k_input_ccv').type('125');                             
         cy.get('.k_input_date').type('1225');                          
         cy.get('.k_input_name').type('GOGI');                           
         cy.get('.pay-btn').click();                                     
         cy.get('#cardnumber').type('56456');                            
         cy.get('.payment__submit-button').click();                      
         cy.contains('Покупка прошла успешно').should('be.visible');   

     });


 });