describe('Testing for Contact Page', () => {
  it('clicks the link "btn"', () => {
    cy.visit('http://localhost:8000/contact')

    cy.get('span').contains('Contact')
    cy.get('.btn').contains("Submit")
  })
})