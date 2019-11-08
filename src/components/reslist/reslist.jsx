import React from 'react'
import './reslist.css'
import Listitem from '../resitem/listitem'



function reslist({results}) {


    if (results.length > 0) {

        return (
            <div className="natayejbox gerdak">
            
            {results.map(result => <Listitem result={result} />)}
            
    
    
            </div>
        )
        
    }


    return (
        

    null

    );



    
}

export default reslist
