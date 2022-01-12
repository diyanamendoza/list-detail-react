import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout'

it('should render the layout', () => {
    const { container } = render(
        <MemoryRouter>
            <Layout />
        </MemoryRouter>
        )
    expect(container).toMatchSnapshot()
})