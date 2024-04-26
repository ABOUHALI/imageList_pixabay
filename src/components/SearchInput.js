import React, { useEffect, useState } from 'react';

const SearchInput = ({onSearchSubmit}) => { 

    
    

    
    const onFormSubmit=(event)=>{
            event.preventDefault();
            //console.log(entry)
            onSearchSubmit(entry)
        }

     

    const [entry,setEntry]=useState('');


  return (
    <div className='ui segment'>
        <form  onSubmit={onFormSubmit}
        className='ui form' action=''>
            <div className='field'>
                <div className='ui massive icon input'>
                <input  type='text' placeholder='search..'
                    onChange={(event)=>setEntry(event.target.value)}
                    value={entry}

                />
                <i className='search icon'></i>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SearchInput