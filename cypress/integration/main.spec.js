describe('Testing for Contact Page', () => {
  it('clicks the link "btn"', () => {
    cy.visit('http://localhost:8000/about')

    cy.get('.test-firstname').type('This is a test for the first name --My name is Lekan')

    cy.get('.test-email').type('email@gmail.com')

    cy.get('.test-txtarea').type('Hello, Am cypress your personal site tester :)')

    cy.get('.btn').contains("Submit")
  })
})