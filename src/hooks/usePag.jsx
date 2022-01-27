import { useState } from 'react'

export const usePag = (initialPage = 1, pageCount = 25) => {
    const [currPage, setCurrPage] = useState(initialPage)
    const [totalPages, setTotalPages] = useState(pageCount)

    const viewPrevPage = () => {
        if (currPage > 1) setCurrPage((prevPage) => prevPage - 1)
    }

    const viewNextPage = () => {
        if (currPage < totalPages) setCurrPage((prevPage) => prevPage + 1)
    }

    return {
        currPage, setCurrPage, totalPages, setTotalPages, viewPrevPage, viewNextPage
    }
}