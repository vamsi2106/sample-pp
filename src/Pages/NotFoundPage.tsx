import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC =()=> {

    const navigate= useNavigate()

  return (
    <div className="not-found-container">
    <img
      alt="page not found"
      src="https://res.cloudinary.com/lalitendra/image/upload/v1702832735/erroring_1_avyr0b.png"
    />
    <h1>Page Not Found</h1>
    <p>
      we are sorry, the page you requested could not be found.Please go back to
      the homepage.
    </p>
    <div>
      <button onClick={()=> navigate('/')} className="nf-btn" type="button">
        Home Page
      </button>
    </div>
  </div>
  )
}

export default NotFoundPage;