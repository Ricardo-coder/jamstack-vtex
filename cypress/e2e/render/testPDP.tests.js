describe('check that PDP page is rendering', () => {
  before(() => {
    cy.visit('/')
  })
  it('checks PDP renders and has a product to buy', () => {
    cy.getById('productSummaryTitle').eq(0).click()
    cy.get('header').should('be.visible')
    cy.getById('addToCart')
  })
})
