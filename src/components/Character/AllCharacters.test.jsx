import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AllCharacters from './AllCharacters';

it('should display a list of characters', () => {
  const { container } = render(
    <MemoryRouter>
      <AllCharacters
        characters={[{
            photoUrl: 'https://placebear.com/200/300',
            name: 'Ted',
            affiliation: 'bear nation',
            allies: 'bees',
            enemies: 'humans',
          },
          {
            photoUrl: 'https://placebear.com/200/300',
            name: 'Fred',
            affiliation: 'bear nation',
            allies: 'bees',
            enemies: 'humans',
          }]}
      />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
  screen.getByText(/Fred/i)
  screen.getByText(/Ted/i)
});
