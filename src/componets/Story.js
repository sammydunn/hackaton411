import React from 'react';

const Story = (props) => {
  const {objectID, author, created_at, title, url, num_comments} = props.story

  
  return (
    <div className = "storyContainer">
      <a
      className = "storyLink"
      href = {url}
      target= "_blank"
      rel = 'noreferrer'
      >
      {title}
      </a>
     
      <div>
      By  {author} | {num_comments} | {created_at}
      </div>
    </div>
  );
}

export default Story;
