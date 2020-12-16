import React from 'react';

export const Pagination = (
    { pagesAmount, currentPage, setCurrentPage }
) => {


    const handleCurrentPageClick = (name) => {
        // setCurrentPage(name)
        // console.log(currentPage)
    }

    return (
        <div className="pagination">
            {/* {pagesAmount.map((name, index) => {
                return currentPage === name ? <span onClick={() => handleCurrentPageClick(name)} className="active">{name}</span> : <span onClick={() => handleCurrentPageClick(name)}>{name}</span>

            })
            } */}
        </div>


    )
}