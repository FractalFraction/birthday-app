describe('test the birthday app', () => {
  it('check all the static elements are on the page' ,() => {
    cy.visit('/');
    cy.get("#welcome").should('contain', "Hello");
    cy.contains('label',"What's your name?");
    cy.contains('label',"When's your birthday?");
  });

  it('returns happy birthday', () => {
    cy.visit('/')
    cy.get("#name").type('Colin');    
    cy.get("#day").type('26');
    cy.get("#month").select('July');
    cy.get("#submit-button").click();
    cy.visit('/birthday');
    cy.get("#birthday-message").should('contain',"Happy Birthday, Colin!");
  });

  it('returns awaiting birthday' , () => {
    cy.visit('/')
    cy.get("#name").type('Colin');    
    cy.get("#day").type('30');
    cy.get("#month").select('July');
    cy.get("#submit-button").click();
    cy.visit('/await');
    cy.get("#await-message").should('contain',"Your birthday is in 4 days time, Colin");
  });

});
