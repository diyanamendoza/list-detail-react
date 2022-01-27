import './Character.css'

export default function Character({character}) {
    return (
        <figure>
        <img src={character.photoUrl} alt={character.name} />
        <figcaption>
          <h2>{character.name}</h2>
          <p>FAMBAM: {character.affiliation}</p>
          <p>LOVAS: {character.allies}</p>
          <p>HATERS: {character.enemies}</p>
        </figcaption>
      </figure>
    )
}
