import React, { useEffect, useState } from 'react'
import AllCharacters from '../components/Character/AllCharacters'
import Pagination from '../components/Pagination/Pagination'
import { usePag } from '../hooks/usePag'
import { getCharacters } from '../services/avatarAPIs'

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [characters, setCharacters] = useState(null)
    const { currPage, setCurrPage, viewNextPage, viewPrevPage } = usePag()

    useEffect(() => {
        setLoading(true)
        const getAll = async () => { 
            const res = await getCharacters(currPage)
            setCharacters(res)
            setLoading(false)
        }
        getAll()
    }, [currPage])

    return (
        <>
            <Pagination currPage={currPage} setCurrPage={setCurrPage} viewNextPage={viewNextPage} viewPrevPage={viewPrevPage} />
            <p>{loading && 'Loading...'}</p>
            {characters && <AllCharacters characters={characters} />}
        </>
    )
}
