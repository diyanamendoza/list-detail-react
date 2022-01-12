import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import Home from './Home'

const server = setupServer(
    rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters', 
    (req, res, ctx) => {
        return res(
          ctx.json([{
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
          }])
        )
      })
    )

    describe('Home', () => {
        beforeAll(() => {
            server.listen()
            })
              
         afterAll(() => {
            server.close()
            })
              
        it('should show character list', async () => {
            render(
            <MemoryRouter initialEntries={['/']}>
                <Home />
            </MemoryRouter>
            )
                
            screen.getByText('Loading...')                
            await screen.findByText(/Ted/i)
            await screen.findByText(/Fred/i)
         })
    
    })