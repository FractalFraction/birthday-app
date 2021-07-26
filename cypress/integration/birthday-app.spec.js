describe('test the birthday app', () => {
  it('check all the static elements are on the page' ,() => {
    cy.visit('/')
    cy.get("#welcome").should('contain', "Hello")
    cy.get("#name-question").should('contain',"What's your name?")
    cy.get("#birthday-question").should('contain',"When's your birthday?")
  })

  it('returns happy birthday', () => {
    cy.get("#name-box").type('Colin')    
    cy.get("#day-box").type('26')
    cy.get("month-select").select('July')
    cy.visit('/message')
    cy.get("#message").should('contain',"Happy Birthday, Colin!")
  });

  it('returns awaiting birthday' , () => {
    cy.get("#name-box").type('Colin')    
    cy.get("#day-box").type('30')
    cy.get("month-select").select('July')
    cy.visit('/message')
    cy.get("#message").should('contain',"Your birthday is in 4 days time, Colin")
  })

});
