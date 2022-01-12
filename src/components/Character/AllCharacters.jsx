import { Link } from 'react-router-dom'


export default function AllCharacters({ characters }) {
    return (
        <>
            <ul aria-label="characters">
                {characters.map((character) => (
                <li key={character._id+character.name}>
                    <Link to={`/characters/${character._id}`}>
                    <figure>
                        <img
                        src={character.photoUrl}
                        alt={character.name}
                        />
                        <figcaption>
                        {character.name}
                        </figcaption>
                    </figure>
                    </Link>
                </li>
                ))}
            </ul>
      </>
    )
  }
  