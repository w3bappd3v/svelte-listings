import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import Listing from "./Listing.svelte"

test('shows proper heading when rendered', () => {
    const { getByText } = render(Listing)
  
    expect(getByText('view listing')).toBeInTheDocument()
})