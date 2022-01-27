import './Pagination.css';

export default function Pagination({currPage, viewNextPage, viewPrevPage}) {

const leftArrow = <svg onClick={viewPrevPage} cursor='pointer'
                    xmlns="http://www.w3.org/2000/svg" width='30' height='30' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>

const rightArrow = <svg onClick={viewNextPage} cursor='pointer'
                    xmlns="http://www.w3.org/2000/svg" width='30' height='30' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>


    return (
        <nav>
            {(currPage > 1) && leftArrow}
            <p>Page {currPage}</p>
            {(currPage < 26) && rightArrow}
        </nav>
    )
}
