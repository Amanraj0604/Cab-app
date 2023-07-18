// import React from 'react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("")
	const [errorMsg, setErrorMsg] = useState("")
	const [successMsg, setSuccessMsg] = useState("")
	const auth = getAuth();
	const navigate = useNavigate()
	const handleLogin = (e) => {
		e.preventDefault()
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setSuccessMsg('Logged in Successfully')

				//console.log(loggeduser.email)
				setEmail('')
				setPassword('')
				setErrorMsg('')
				setTimeout(() => {
					setSuccessMsg('');
					navigate('/cabapp');
				}, 3000);
			})
			.catch((error) => {
				// const errorCode = error.code;
				// console.log(error.message)
				if (error.message === 'Firebase: Error (auth/invalid-email).') {
					setErrorMsg('Plz fill all required fields')
				}
				if (error.message === 'Firebase: Error (auth/user-not-found).') {
					setErrorMsg('Email not found');
				}
				if (error.message === 'Firebase: Error (auth/wrong-password).') {
					setErrorMsg('Wrong Password');
				}
			});
	}

	//const Login = () => {
	return (

		<div>
			<>


				<div className="mainBox">
					<div className="boxx">

						{/* <form autoComplete='off' onSubmit={handleSubmit}> */}
						<form autoComplete='off' className='myform'>

							<span className="logo" ><u>WeLCome</u></span>
							<h2>Sign in</h2>
							<div className="inputBoxxx">
								{/* <input type="text" required placeholder='UserName'/> */}
								<input onChange={(e) => setEmail(e.target.value)} type="email" required />
								<span>UserName</span>
								<i></i>
							</div>
							<div className="inputBoxxx">
								{/* <input type="password" required /> */}
								<input onChange={(e) => setPassword(e.target.value)} type="password" required />
								<span>Password</span>
								<i></i>
							</div>
							<div className="links">
								<a href='#'>Forget Password ?</a>
								<a><Link to={'/rej'}>You haven't Account..? Register Hear</Link></a>
							</div>
							<div className='div-login'>
								<spam>
									{/* <button type='submit' className='logbtn'> */}
									<button onClick={handleLogin} className='logbtn'>
										
											Login

									</button>
								</spam>
								<span className='my-error'>
									{errorMsg && <> <div className='error-msg'>{errorMsg}</div> </>}
									{successMsg && <><div className='success-msg'>{successMsg}</div> </>}
								</span>

							</div>
							{/* {err && <span>Something Worng</span>} */}
						</form>
					</div>
				</div>

			</>
		</div>
	)
}

export default Login
