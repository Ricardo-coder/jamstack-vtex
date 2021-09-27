const { scrollToId } = require('@vtex/test-tools/dist/cypress').default

describe('check all links in the home', () => {
  before(() => {
    cy.visit('/')
    scrollToId('footer', { cyclesLimit: 5 })
  })
  it('check all links to sites', () => {
    const localURL = new URL(Cypress.config().baseUrl)

    cy.get("a:not([href*='mailto:'])").each(($page) => {
      const url = new URL($page.prop('href'))

      if (url.hostname !== localURL.hostname) {
        return
      }

      cy.visit($page.prop('href'))
    })
  })
})
