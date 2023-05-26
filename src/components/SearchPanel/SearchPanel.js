import React from 'react'
import './SearchPanel.css'
import ItemStatusFilter from '../ItemStatusFilter'
const SearchPanel = () => {
    return (
      <div className='search-panel'>
        <input 
        className="search-panel-input"
        placeholder='search' 
        />
        <ItemStatusFilter/>
      </div>
    )
  }
  
export default SearchPanel;