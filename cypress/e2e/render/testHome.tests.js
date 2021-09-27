describe('check home page rendering', () => {
  it('checks home', () => {
    cy.visit('/')
    cy.get('header')
    cy.scrollTo('bottom')
    cy.get('footer')
  })
})
