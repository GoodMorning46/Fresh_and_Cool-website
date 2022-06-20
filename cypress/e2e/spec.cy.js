describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.visit('http://localhost:3000/test')
    cy.visit('http://localhost:3000/faq')
  })
})