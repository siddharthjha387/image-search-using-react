import './App.css';
import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import searchImages from './api'
import ImageList from './components/ImageList'

export default function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    console.log("Do a search with", term);
    const result = await searchImages(term);
    setImages(result);
  }
  return (
    <div className='container'>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  )
}
