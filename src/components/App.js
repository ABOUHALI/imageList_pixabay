import React, { useState } from 'react'
import SearchInput from './SearchInput'
import axios from 'axios';
import ImageList from './imageList';


const App = () => {

  const [images,setImages]=useState([])

  const onSearchSubmit=async (entry)=>{
    //console.log(entry)
    const response =await axios.get(`https://pixabay.com/api/?key=43540523-4bfb3f921ef79c50350daa167&q=${entry}&image_type=photo&pretty=true`)
    console.log(response.data.hits)
    setImages(response.data.hits)
  }

  return (
    <div className='ui container' style={{marginTop:'30 px'}}>
      <SearchInput onSearchSubmit={onSearchSubmit}/>
      <ImageList images={images}/>
      </div>
  )
}

export default App