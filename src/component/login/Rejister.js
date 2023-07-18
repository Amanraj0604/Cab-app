import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { auth, db } from "../../../src/Configration/Config"
import { collection, addDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import './login.css'
const Rejister = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")
    const auth = getAuth();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            addDoc(collection(db, "users"), {
                username: username, email: email,
                password: password, uid: user.uid
            }).then(() => {
                setSuccessMsg("User Added Successfully")
                setUserName('')
                setEmail('')
                setPassword('')
                setTimeout(() => {
                    setSuccessMsg('');
                    navigate('/');
                }, 3000);
            })
        }).catch((error) => {
            if (error.message === 'Firebase: Error (auth/invalid-email).') {
                setErrorMsg('Plz fill all fields');
            }
            if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                setErrorMsg('User alread exist');
            }
            if (error.message === 'Firebase: Error (auth/invalid-display-name).') {
                setErrorMsg('UserName Error');
            }



        })
    }
    return (
        <>
            <div className="mainBox">
                <div className="boxx">

                    {/* <form autoComplete='off' onSubmit={handleSubmit}> */}
                    <form autoComplete='off' className='myform'>

                        <span className="logo"><u>FILL YOUR</u></span>
                        <h2>DETAILS</h2>
                        <div className="inputBoxxx">
                            {/* <input type="text" required placeholder='UserName' /> */}
                            <input onChange={(e) => setUserName(e.target.value)} type="text" required />
                            <span>UserName</span>
                            <i></i>
                        </div>
                        <div className="inputBoxxx">
                            {/* <input type="text" required placeholder='E-mail' /> */}
                            <input onChange={(e) => setEmail(e.target.value)} type="email" required />

                            <span>Email</span>
                            <i></i>
                        </div>
                        <div className="inputBoxxx">
                            {/* <input type="text" required placeholder='Enter your Password' /> */}
                            <input onChange={(e) => setPassword(e.target.value)} type="password" required />
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div className="links">
                            <a href='#'>Password should be <br />8 charector<br />1 Capital(ABC)<br />1 Special(@,$)<br />1 Number</a>
                            <a><Link to={'/login'}>Login As</Link></a>
                        </div>
                        <button onClick={handleSubmit} type='submit' className='logbtn'>Create</button>

                        <span className='my-error'>
                            {errorMsg && <> <div className='error-msg'>{errorMsg}</div> </>}
                            {successMsg && <> <div className='success-msg'>{successMsg}</div> </>}
                        </span>

                        {/* {err && <span>Something Worng</span>} */}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Rejister
