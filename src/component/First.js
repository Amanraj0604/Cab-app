// import React from 'react'
//import { AiFillCar } from 'react-icons/ai';
import React, { useState, useEffect } from 'react'
import { useNavigate ,Link} from 'react-router-dom'
import { auth, db } from '../Configration/Config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import '../component/login/Login'
import '../component/App.css'
import '../component/login/adminlogin.js'


const First = () => {
  const GetCurrentUser = () => {
    const [user, setUser] = useState('');
    const userCollectionRef = collection(db, "users");

    useEffect(() => {
      auth.onAuthStateChanged(userlogged => {
        if (userlogged) {
          // console.log(userlogged.email)
          const getUsers = async () => {
            const q = query(collection(db, "users"), where("uid", "==", userlogged.uid))
            // console.log(q)
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
          };
          getUsers();
        }
        else {
          setUser(null);
        }
      })
    }, [])
    return user
  }

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login');
    })
  }

  const loggeduser = GetCurrentUser();
  const navigate = useNavigate();
  const myStyle = { backgroundColor: "#1a1c30" }
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light heading fixed-top ">
          <div className="container-fluid">
            {/* <button className="btn btn-primary"><a className="navbar-brand" href="#"><AiFillCar /></a></button> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="btn btn-outline-primary"><a className="nav-link active" aria-current="page" ><Link to={'/'}><h6>HOME</h6></Link></a></button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-primary"><a className="nav-link" ><Link to={'/Cabapp'}><h6>MENU</h6></Link></a></button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-primary"><a className="nav-link"><Link to={'/contect'}><h6>Contect us</h6></Link></a></button>
                </li>
              </ul>
              { !loggeduser &&
              <form className="d-flex">
                <button className="btn btn-outline-success" >
                  <a ><Link to={'/login'}>LOGIN</Link></a>
                
                  {/* <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                     
                    </button>
                    {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" ><Link to={'/login'}>Costomer</Link></a></li>
                      <li><a class="dropdown-item" ><Link to={'/Adminlogin'}>Admin</Link></a></li>
                    </ul> *}
                  </div> */}
                </button>
              </form>}
              {loggeduser &&
          
              <form className="d-flex">
                 
               
                <button className='btn btn-outline-success' onClick={handleLogout}>logout</button>
              </form>}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default First
