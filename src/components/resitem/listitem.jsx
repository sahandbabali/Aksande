import React from 'react'
import './listitem.css';
function listitem({result}) {



    



    return (
        

        <div className="listitem" style={{
            backgroundImage: `url(${result.src.medium})`
            
            
        }}>

            


             <p>{result.photographer}</p>
        </div>
    )
}

export default listitem;
