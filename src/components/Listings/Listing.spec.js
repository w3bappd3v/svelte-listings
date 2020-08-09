import Listing from './Listing.svelte'
import { mount } from 'cypress-svelte-unit-test'

it('renders listing', () => {
  mount(Listing, {
    props: {
        listing: {}
    },
  })
  cy.get('img').should('have.length', 1)
})