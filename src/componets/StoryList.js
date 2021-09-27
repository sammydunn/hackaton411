import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Story from './Story';
import Search from './Search'

export default function StoryList() {
  const URL = 'https://hn.algolia.com/api/v1/search?'
  const [isLoading, setisLoading] = useState(true);
  const [stories, setStories] = useState([])
  
  
useEffect(() => {
  console.log('useEffect ran')
  axios.get(URL)
    .then(response => response.data)
    .then(data => {
      setStories(data.hits)
        console.log(stories)
    })
}, [])
  
  
  
  return (
    <div className = 'body'>
     <div>
       <Search />
     </div>

      

      {stories.map(story => {
        return(
          <Story key={story.objectID} story={story} />
             )
          })
      }
    </div>
  )
}
