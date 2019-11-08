import React from 'react'
import './reslist.css'
import Listitem from '../resitem/listitem'
import spin from '../../pics/25.gif';



function reslist({results}) {


    if (results.length === 0) {
        return (
        

            <spin />
        
            );
        
        
    }

    return (
        <div className="natayejbox gerdak">
        
        {results.map(result => <Listitem result={result} />)}
        


        </div>
    )
    



    
}

export default reslist
