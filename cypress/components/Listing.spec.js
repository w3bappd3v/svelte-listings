import Listing from '../../src/components/Listings/Listing.svelte'
import { mount } from 'cypress-svelte-unit-test'

describe("Listing", () => {
  it('should render listing', () => {
    mount(Listing, {
      props: {
          listing: {}
      },
    })
    cy.get('.listing').should('have.length', 1)
  })
})