import React from 'react'
import './Pagination.scss'



const Pagination = ({IssuePerPage,totalIssue,paginate,curPage}) => {
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(totalIssue / IssuePerPage); i++) {
        pageNumbers.push(i)
      };


    return (
        <nav>
            <ul className="pagination">
                 {
                    pageNumbers.map(number=>{
                      return (
                        <li key={number} 
                        className={`page-item ${curPage === number ? 'active' : ''}`}>
  
                            <a href="#" onClick={() => paginate(number)} className="page-link"></a>
                        </li>
                      )
                    })
                 }
            </ul>
            
        </nav>
    )
}

export default Pagination
