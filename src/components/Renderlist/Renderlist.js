import React,{useState, useEffect} from 'react'
import {fetchIssues} from '../apiCalls/api'
import './Renderlist.scss'


const Renderlist = () => {
    const [issues, setIssues] = useState([])
    const [page, setPage] = useState(1)
    

    useEffect(() =>{
            
              const getIssuesData = async () => {     
                const res =  await fetchIssues(page)  
                setIssues((prev) => [...prev , ...res.data.items]);                
              }

              getIssuesData();
    },[page]);

   // infinite scrooling 
   const scrollToEnd = () =>{
       setPage(page + 1)
   }
    
   window.onscroll = function () {
       if(window.innerHeight +  document.documentElement.scrollTop === 
        document.documentElement.offsetHeight){
            scrollToEnd()

       }
   }  


    return (
        <div className="issues">
              

              {
                  issues.map(issue=>{
                      return (
                            <div key={issue.id} className="spandiv">
                                
                             <div className="bugreport">
                               <h4>{issue.title}</h4> 
                                <span className='bug1'>bug report</span>
                                <span className='bug2'>needs triage</span>
                               </div>
                                <p className="body">score: {issue.score}</p>
                                <p className="desc">Desc: {issue.body}</p>
                                <span className='number'># {issue.number}</span>
                                <span className='date'>date: {issue.created_at}</span>
                            </div>
                      )
                  })
                }
        </div>

        
    )
        
    
}

export default Renderlist
