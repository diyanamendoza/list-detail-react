import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import CharacterDetail from './CharacterDetail'


const server = setupServer(
    rest.get(`https://last-airbender-api.herokuapp.com/api/v1/characters/undefined`, (req, res, ctx) => {

        return res(
          ctx.json({
            photoUrl: 'https://placebear.com/200/300',
            name: 'Ted',
            affiliation: 'bear nation',
            allies: 'bees',
            enemies: 'humans',
            _id: 1
          })
        )
      })
    )

    describe('CharacterDetail', () => {
        beforeAll(() => {
            server.listen()
            })
              
         afterAll(() => {
            server.close()
            })
              
        it('should show character details', async () => {
            render(
            <MemoryRouter initialEntries={['/characters/1']}>
                <CharacterDetail/>
            </MemoryRouter>
            )
                
            screen.getByText('Character incoming!') 
            await screen.findByText(/Ted/i)
         })
    
    })