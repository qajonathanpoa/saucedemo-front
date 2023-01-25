import LoginElements from "./elements/LoginElements"
const url = Cypress.config("baseUrl")

Cypress.Commands.add('sessionStandardUser', (username,password) => {
    cy.session([username,password], () => {
      cy.visit(url)
      cy.get("input[placeholder='Username']").type("standard_user")
      cy.get("input[placeholder='Password']").type("secret_sauce")
      cy.get("input[type='submit']").contains('Login').click()
      cy.url().should('contain', '/')
    })
  })