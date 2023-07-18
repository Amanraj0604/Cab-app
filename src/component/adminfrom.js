import React from 'react'
import { Link } from 'react-router-dom'
import '../component/adminfrom.css'

const Adminfrom = () => {
  return (
    <div>
      <div className="b-boxes">
        <div className="in-button">
          <button className="button-out">
            <a href="#" class="button-1"> <Link to={'/dash'}>DASHBOARD</Link></a>
            <a class="button-1"><Link to={'/admindata'}>Insert Data</Link></a>
            <a href="#" class="button-1">Delete Data</a>
            <a href="#" class="button-1">Update Data</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Adminfrom
