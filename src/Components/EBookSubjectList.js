// SecondNavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./EBookSubjectList.css"

const EBookSubjectList= () => {
  return (
    <div className='second-nav-bar'>
      <Link to="/Science">Science</Link>
      <Link to="/Technology">Technology</Link>
      <Link to="/Math">Math</Link>
      <Link to="/General">General</Link>
      <Link to="/SCU">SCU</Link>
      <Link to="/RID">RID</Link>
    </div>
  );
}

export default EBookSubjectList;
