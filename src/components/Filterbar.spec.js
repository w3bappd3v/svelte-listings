import Filterbar from './Filterbar.svelte'
import { mount } from 'cypress-svelte-unit-test'

describe("Form test", () => {
    it('renders filterbar', () => {
    mount(Filterbar, {
        props: {
        },
    })
    cy.contains('h4', 'Enter Street Address:')
    })
})