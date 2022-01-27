import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Character from './Character';

it('should display the provided character', () => {
  const { container } = render(
    <MemoryRouter>
      <Character
        character={{
          photoUrl: 'https://placebear.com/200/300',
          name: 'Ted',
          affiliation: 'bear nation',
          allies: 'bees',
          enemies: 'humans',
        }}
      />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
  screen.getByText(/Ted/i)
});
