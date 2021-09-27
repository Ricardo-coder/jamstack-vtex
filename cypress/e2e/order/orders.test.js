const { clearCart, closeCart, goToProductPageByShelf, checkText } =
  require('@vtex/test-tools/dist/cypress').default

describe('Order flows', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('/graphql/?operationName=AddToCartMutation*').as(
      'addToCartMutation'
    )
    cy.intercept('/graphql/?operationName=UpdateItemsMutation*').as(
      'updateItemsMutation'
    )

    clearCart()
  })

  it('tests an item order and its checkout', () => {
    goToProductPageByShelf()

    cy.clickById('nextProductImage')

    cy.url().then((path) => {
      const itemURL = new URL(path)

      cy.clickById('addToCart', { force: true })
      cy.wait('@addToCartMutation')
      cy.get('@addToCartMutation').then(({ response }) => {
        if (
          itemURL.host.includes('localhost') ||
          itemURL.host.includes('preview')
        ) {
          cy.setCookie(
            'checkout.vtex.com',
            `__ofid=${response.body.data.addToCart.id}`
          )
        }
      })

      cy.clickById('goCheckout')

      cy.url().should('include', '/checkout/#/cart')
      cy.get(`a[href="//${itemURL.host}${itemURL.pathname}"]`)
    })
  })

  it('tests an order with add to cart, 2 sku/3 qtd, description check and shipping simulation', () => {
    goToProductPageByShelf()

    cy.clickById('nextProductImage')

    cy.clickById('addToCart')
    cy.wait('@addToCartMutation')
    cy.get('@addToCartMutation').then(({ response }) => {
      cy.url().then((path) => {
        const itemURL = new URL(path)

        if (
          itemURL.host.includes('localhost') ||
          itemURL.host.includes('preview')
        ) {
          cy.setCookie(
            'checkout.vtex.com',
            `__ofid=${response.body.data.addToCart.id}`
          )
        }
      })
    })

    checkText('minicartTitle', 'Count (1)')

    closeCart()

    cy.visit('/working-shirt/p?skuId=2000546').then(() => {
      cy.clickById('addToCart')

      cy.wait('@addToCartMutation')
    })

    checkText('minicartTitle', 'Count (2)')

    cy.getById('numericStepperInput').eq(1).scrollIntoView().type('2').blur()
    cy.wait('@updateItemsMutation')

    cy.clickById('goCheckout')

    cy.url().should('include', '/checkout/#/cart')

    cy.get('tr[class="product-item"]').should('have.length', 2)
  })
})
