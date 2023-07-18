import React from 'react'
import './From.css'

const Admindata = () => {
    return (
        <>

            <form action="">
                <div className="boxes">
                    <h1>Fill Employ Details</h1>
                    <div className="design">
                        <lable htmlFor="cos-name">Staph Name</lable>
                        <input type="text" name="name" id="name" />

                    </div>
                    <div className="design">
                        <lable htmlFor="cab-type">Post</lable>
                        <input type="text" name="type-of-cab" id="cab" />

                    </div>
                    <div className="design">
                        <lable htmlFor="city">Email</lable>
                        <input type="email" name="city" id="city" />

                    </div>
                    <div className="design">
                        <lable htmlFor="pickup">Address </lable>
                        <input type="text" name="pickup" id="picup" />

                    </div>
                    <div className="design">
                        <lable htmlFor="drop">Sallary</lable>
                        <input type="text" name="drop" id="drop" />
                    </div>
                    <div className="design">
                        <lable htmlFor="phone-no">phone no</lable>
                        <input type="text" name="phone" id="phone-no" />

                    </div>
                    <div className="design">

                        <input type="submit" name="phone" id="phone-no" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Admindata
