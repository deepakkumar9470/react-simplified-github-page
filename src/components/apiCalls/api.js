import axios from 'axios';


const url = 'https://api.github.com'


export const fetchIssues = async () =>{
    return await axios.get(
        `${url}/search/issues?q={react}{&per_page=10$page_numbers=1`,
        
    );
};

