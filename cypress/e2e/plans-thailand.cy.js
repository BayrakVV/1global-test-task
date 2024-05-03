/// <reference types="Cypress" />

describe('Thailand plans page', () => {
  before(() => {
    // Open main page and accept cookies
    cy.visit('/')
    cy.acceptCookies()
  })

  it('Checks Thailand plans page with Euro currency', () => {
    // Select Euro currency
    cy.selectCurrency('Euro - €')

    // Click on Thailand destination
    cy.navigateToCountry('Thailand')

    // Get the second plan container
    cy.get('.grid-cols-1 > .flex').eq(1).as('secondPlan')

    cy.get('@secondPlan')
      .should('contain', 'Thailand')
      .and('contain', '5 GB')
      .and('contain', '30 DAYS')
      .and('contain', 'Data only')
      .and('contain', '€9.39')
  })
})
