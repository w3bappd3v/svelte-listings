import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import Filterbar from "./Filterbar.svelte"

test('shows proper heading when rendered', () => {
    const { getByText } = render(Filterbar)
  
    expect(getByText('Enter Street Address:')).toBeInTheDocument()
})