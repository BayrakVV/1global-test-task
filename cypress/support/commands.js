/// <reference types="Cypress" />

Cypress.Commands.add('acceptCookies', () => {
  cy.get('#usercentrics-root')
    .shadow()
    .find('[data-testid="uc-accept-all-button"]')
    .click()
})

Cypress.Commands.add('selectCurrency', (currency) => {
  // Open currency modal
  cy.get('.flex-row:contains("- ")').last().click()

  cy.contains('div', currency).click()

  cy.closeModal()
})

Cypress.Commands.add('navigateToCountry', (country) => {
    cy.contains('p', country).click()
})

Cypress.Commands.add('closeModal', () => {
  cy.get('body').type('{esc}')
})
