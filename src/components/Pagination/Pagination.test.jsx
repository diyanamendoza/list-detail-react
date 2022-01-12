import { render, screen } from '@testing-library/react'
import Pagination from './Pagination'

it('should render the pagination nav', () => {
    const { container } = render(
         <Pagination currPage={1}/>
        )
    expect(container).toMatchSnapshot()
    screen.getByText(/Page 1/i)
})