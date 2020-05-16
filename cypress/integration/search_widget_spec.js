describe('SearchWidget Test', () => {
  it('Searching for a city', () => {
    cy.visit('/').get('.cities-input').type('Sao ')

    cy.get('.cities').within(() => {
      cy.get('li:first').contains('São Paulo').click()
    })

    cy.get('.cities-input').should('have.value', 'São Paulo')
  })
})