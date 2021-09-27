describe('Search page Filters and Sorting options', () => {
  before(() => {
    cy.visit('/apparel-accessories/')
  })

  it('checks page structure', () => {
    cy.getById('productSummaryContainer')
    cy.scrollTo(0, '100%')
    cy.get('footer')
  })

  it('check Facets', () => {
    cy.getById('collapsible-Others')
      .first()
      .should('be.visible')
      .getById('filterItemValue')
      .first()
      .click()
      .then(($facets) => {
        const [firstFacet] = $facets.first()

        const quantity = Number(firstFacet.nextSibling.textContent)
        const facetName = firstFacet.textContent.toLowerCase()

        // Check if the filter applied actually ended up in the URL
        cy.location('pathname').should((loc) => {
          expect(loc).to.include(facetName)
        })

        // Check if the filter applied actually brought the number of products it said it would
        cy.getById('productSummaryContainer').should('have.length', quantity)
      })
  })
})
