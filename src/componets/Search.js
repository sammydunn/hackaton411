import React, { useState } from 'react';

const Search = (props) => {
  const [searchInput, setSearchInput] = useState('')
  const [type, setType] = useState('story')

  const handleSearchInput = (e) => {
    console.log(e.target.value)
    setType(e.target.value)
  }
  
  const handleSearch = () => {
    console.log('you clicked search')
  }
  
  return (
    
     <div className = 'headerContainer'>
     
      <div className = 'searchContainer'>
       
        <div className = 'inputContainer'>
         
          <input
          className = 'searchInput'
          type = 'text'
          value = {searchInput}
          placeholder = 'search...'
          onChange = {handleSearchInput}
          >

          </input>
         
          <button className = 'searchButton' onClick = {handleSearch}>Search</button>
      
        </div>
    
      </div>
   
    </div>
  );
}

export default Search;
