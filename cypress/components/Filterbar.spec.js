import Filterbar from '../../src/components/Filterbar.svelte'
import { mount } from 'cypress-svelte-unit-test'

describe("Filterbar", () => {
    it('should render filterbar', () => {
        mount(Filterbar, {
            props: {
                searchString:''
            },
        })
        cy.get('.filterbar').should('have.length', 1)
    })
})