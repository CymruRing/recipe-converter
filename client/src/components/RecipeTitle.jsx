import React, { useState } from 'react';

// add edit functionality 

const RecipeTitle = (props) => {
  const [title, setTitle] = useState(props.title);

  const updateTitle = (e) => {
    setTitle(title => e.target.value);
  };
  const submitTitle = () => {
    // push title to app
    props.setTitle(title);
  };

  const allowEdit = () => {
    console.log('allow title change here');
  };

  if (props.hasTitle) {
    return (
        <h2>
          {props.title}  
          <span className='edit' onClick={allowEdit}>edit</span>
        </h2>      
    );
  } else {
    return (
      <span>
        <input id='title' placeholder='Recipe Title' onChange={updateTitle}></input>
        <button onClick={submitTitle}>Enter</button> 
      </span>
    );
  }

};

export default RecipeTitle;