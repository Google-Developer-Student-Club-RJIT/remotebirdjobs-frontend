import React from 'react'
import loading from "./loading.gif";

const Spinner=()=>{
    return (
        <div className='text-center w-100vw'>
            <img src={loading} className="my-3" alt="Loading" />
        </div>
    )
    
}

export default Spinner
