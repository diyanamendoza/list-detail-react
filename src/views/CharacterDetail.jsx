import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Character from '../components/Character/Character'
import { getCharacter } from '../services/avatarAPIs'
import styles from '../App.css'

export default function CharacterDetail() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [character, setCharacter] = useState(null)

    useEffect(() => {
        setLoading(true)
        const getOne = async () => {
            const res = await getCharacter(id)
            setCharacter(res)
            setLoading(false)
        }
        getOne()
    }, [id])

    return (
        <div className={styles.detailcontainer}>
            <Link to="/">Back to Characters</Link>
            <article>
            {loading && <p>Character incoming!</p>}
            {character && <Character character={character} />}
            </article>    
        </div>
    )
}
